import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, ShieldCheck } from 'lucide-react';

const FINISHES = [
  { id: 'terracotta', name: 'Terracotta Matte', hex: 0xE85025, roughness: 0.35, metalness: 0.15, badgeColor: 'bg-brand-orange' },
  { id: 'navy', name: 'Midnight Navy Gloss', hex: 0x151B3D, roughness: 0.15, metalness: 0.35, badgeColor: 'bg-brand-navy' },
  { id: 'quartz', name: 'Calacatta White', hex: 0xF8F9FA, roughness: 0.2, metalness: 0.1, badgeColor: 'bg-gray-100 text-dark-900' },
  { id: 'walnut', name: 'Smoked Walnut', hex: 0x4A2E1B, roughness: 0.6, metalness: 0.05, badgeColor: 'bg-amber-950' },
];

const HOTSPOTS = [
  { id: 1, title: 'BWP Marine Ply', desc: '100% Waterproof, Boiling Waterproof Grade', x: '25%', y: '68%' },
  { id: 2, title: 'Seamless Quartz Top', desc: 'Stain, heat & scratch resistant 20mm surface', x: '52%', y: '42%' },
  { id: 3, title: 'German Soft-Close', desc: 'Blum & Hettich tested for 50,000+ smooth cycles', x: '78%', y: '65%' },
];

const Kitchen3DScene = ({ className = '', onBookConsultation }) => {
  const mountRef = useRef(null);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const cabinetMaterialsRef = useRef([]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e1329, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.2);
    camera.lookAt(0, 0.1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    // Group for the kitchen island
    const kitchenGroup = new THREE.Group();
    scene.add(kitchenGroup);

    // Cabinet Finish Material
    const cabinetMat = new THREE.MeshStandardMaterial({
      color: selectedFinish.hex,
      roughness: selectedFinish.roughness,
      metalness: selectedFinish.metalness,
    });
    cabinetMaterialsRef.current = [cabinetMat];

    // Countertop Material (Luxury white quartz)
    const counterMat = new THREE.MeshStandardMaterial({
      color: 0xF7F8FA,
      roughness: 0.18,
      metalness: 0.12,
    });

    // Handle Material (Brushed brass / Champagne gold)
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      roughness: 0.25,
      metalness: 0.85,
    });

    // Dark plinth/skirting
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x11162B,
      roughness: 0.8,
    });

    // 1. Plinth Base
    const plinthGeo = new THREE.BoxGeometry(2.3, 0.12, 1.1);
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.y = -0.65;
    plinth.receiveShadow = true;
    kitchenGroup.add(plinth);

    // 2. Main Cabinet Carcass
    const carcassGeo = new THREE.BoxGeometry(2.36, 1.1, 1.16);
    const carcass = new THREE.Mesh(carcassGeo, cabinetMat);
    carcass.position.y = -0.05;
    carcass.castShadow = true;
    carcass.receiveShadow = true;
    kitchenGroup.add(carcass);

    // 3. Shutter Panels / Drawers (Front 3 modules)
    for (let i = -1; i <= 1; i++) {
      const panelGeo = new THREE.BoxGeometry(0.72, 0.48, 0.04);
      const topPanel = new THREE.Mesh(panelGeo, cabinetMat);
      topPanel.position.set(i * 0.77, 0.22, 0.6);
      kitchenGroup.add(topPanel);

      const bottomPanel = new THREE.Mesh(panelGeo, cabinetMat);
      bottomPanel.position.set(i * 0.77, -0.32, 0.6);
      kitchenGroup.add(bottomPanel);

      // Handle Bars
      const handleGeo = new THREE.BoxGeometry(0.35, 0.025, 0.035);
      const handleTop = new THREE.Mesh(handleGeo, brassMat);
      handleTop.position.set(i * 0.77, 0.38, 0.63);
      kitchenGroup.add(handleTop);

      const handleBottom = new THREE.Mesh(handleGeo, brassMat);
      handleBottom.position.set(i * 0.77, -0.16, 0.63);
      kitchenGroup.add(handleBottom);
    }

    // 4. Countertop Slab (overhang)
    const counterGeo = new THREE.BoxGeometry(2.55, 0.08, 1.35);
    const counter = new THREE.Mesh(counterGeo, counterMat);
    counter.position.y = 0.54;
    counter.castShadow = true;
    counter.receiveShadow = true;
    kitchenGroup.add(counter);

    // 5. Inset Sink / Hob cutout feature
    const hobGlassMat = new THREE.MeshStandardMaterial({ color: 0x151518, roughness: 0.1, metalness: 0.9 });
    const hob = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.02, 0.5), hobGlassMat);
    hob.position.set(-0.6, 0.585, 0);
    kitchenGroup.add(hob);

    // Sleek architectural tap
    const tapStem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 16), brassMat);
    tapStem.position.set(0.6, 0.74, -0.1);
    const tapSpout = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.025, 0.025), brassMat);
    tapSpout.position.set(0.52, 0.92, -0.1);
    kitchenGroup.add(tapStem);
    kitchenGroup.add(tapSpout);

    // 6. Floor grid plane with soft reflection
    const floorGeo = new THREE.CircleGeometry(4, 32);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0c1024,
      roughness: 0.4,
      metalness: 0.6,
      transparent: true,
      opacity: 0.8,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.71;
    floor.receiveShadow = true;
    scene.add(floor);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff5ea, 2.4);
    dirLight.position.set(3, 5, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Brand accent rim light (orange glow)
    const orangeRimLight = new THREE.PointLight(0xE85025, 3.5, 8);
    orangeRimLight.position.set(-3, 2, -1);
    scene.add(orangeRimLight);

    // Blue fill light
    const navyFillLight = new THREE.PointLight(0x4A69FF, 2, 7);
    navyFillLight.position.set(3, -1, 2);
    scene.add(navyFillLight);

    // Mouse Interaction / Drag Orbit
    let isDragging = false;
    let previousMouseX = 0;
    let targetRotationY = 0.4;
    let targetRotationX = 0.05;

    const onMouseDown = (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      targetRotationY += deltaX * 0.008;
      previousMouseX = e.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support
    let prevTouchX = 0;
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevTouchX = e.touches[0].clientX;
      }
    };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevTouchX;
      targetRotationY += deltaX * 0.01;
      prevTouchX = e.touches[0].clientX;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };
    domEl.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth;
      const newH = mount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isDragging) {
        targetRotationY += delta * 0.35;
      }

      // Smooth damping
      kitchenGroup.rotation.y += (targetRotationY - kitchenGroup.rotation.y) * 0.08;
      kitchenGroup.rotation.x += (targetRotationX - kitchenGroup.rotation.x) * 0.08;

      // Subtle float motion
      const elapsedTime = clock.getElapsedTime();
      kitchenGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  // Update material color when finish changes
  const handleFinishChange = (finish) => {
    setSelectedFinish(finish);
    cabinetMaterialsRef.current.forEach((mat) => {
      mat.color.setHex(finish.hex);
      mat.roughness = finish.roughness;
      mat.metalness = finish.metalness;
      mat.needsUpdate = true;
    });
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-navy-950 via-[#0d122b] to-navy-900 border border-white/10 shadow-2xl ${className}`}>
      {/* 3D Canvas Mounting Point */}
      <div
        ref={mountRef}
        className="w-full h-[380px] sm:h-[460px] lg:h-[500px] cursor-grab active:cursor-grabbing"
      />

      {/* Floating Hotspots Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {HOTSPOTS.map((spot) => (
          <div
            key={spot.id}
            style={{ left: spot.x, top: spot.y }}
            className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative group">
              <button
                type="button"
                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/40 animate-pulse hover:scale-125 transition-transform"
                title={spot.title}
              >
                <span className="w-2 h-2 rounded-full bg-white" />
              </button>

              {/* Tooltip Card */}
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-navy-950/95 backdrop-blur-md rounded-xl border border-brand-orange/40 text-left shadow-2xl transition-all duration-300 pointer-events-none z-30 ${
                  activeHotspot === spot.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                }`}
              >
                <div className="flex items-center gap-1.5 text-brand-orange text-[10px] font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{spot.title}</span>
                </div>
                <p className="text-xs text-gray-300 font-normal leading-tight">
                  {spot.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Bar on 3D Card: Live Status & Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] uppercase tracking-wider text-gray-300">Interactive 3D Preview • Drag To Orbit</span>
        </div>

        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/10 text-xs text-gray-300 hover:text-white hover:border-brand-orange transition-colors"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          <span className="text-[11px] hidden sm:inline">{isRotating ? 'Pause Orbit' : 'Auto Rotate'}</span>
        </button>
      </div>

      {/* Bottom Controls: Finish Selector & CTAs */}
      <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mr-1 hidden sm:inline">
            Finish:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto py-1">
            {FINISHES.map((finish) => (
              <button
                key={finish.id}
                type="button"
                onClick={() => handleFinishChange(finish)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedFinish.id === finish.id
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/15'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-white/30"
                  style={{ backgroundColor: '#' + finish.hex.toString(16).padStart(6, '0') }}
                />
                <span className="text-[11px] whitespace-nowrap">{finish.name}</span>
              </button>
            ))}
          </div>
        </div>

        {onBookConsultation && (
          <button
            type="button"
            onClick={onBookConsultation}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-brand-orange to-orange-600 hover:from-brand-navy hover:to-brand-navy text-white text-xs font-extrabold uppercase tracking-wider shadow-lg hover:shadow-brand-orange/20 transition-all active:scale-95 whitespace-nowrap"
          >
            Customize in 3D &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default Kitchen3DScene;
