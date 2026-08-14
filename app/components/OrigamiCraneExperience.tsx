"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OrigamiCraneExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // 4. Lighting setup (Warm origami brand illumination)
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xff7a1a, 4.0); // Warm brand orange
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.8); // Subtle sky fill
    fillLight.position.set(-6, -2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xff5e00, 4.5, 20);
    rimLight.position.set(0, 3, -2);
    scene.add(rimLight);

    // 5. Crane Master Group & Inner Model Group
    const craneGroup = new THREE.Group();
    const craneInner = new THREE.Group();
    craneGroup.add(craneInner);
    scene.add(craneGroup);

    // Flight progress state (0 to 1) controlled by GSAP
    const flightState = {
      progress: 0,
    };

    // 6. 3D Flight Path (CatmullRomCurve3)
    // Starts top-right of About -> swoops center close-up -> 3D round loop across Our Work -> lands bottom-right of Products (horizontal!)
    const isMobile = window.innerWidth < 768;
    const scaleFactor = isMobile ? 0.65 : 1.0;

    const waypoints = [
      new THREE.Vector3(2.3 * scaleFactor, 1.35, -0.3),   // 0.0: Top-right corner of About (stationary perch)
      new THREE.Vector3(1.7 * scaleFactor, 0.75, 0.6),    // 0.15: Take off & swoop forward
      new THREE.Vector3(0.0, -0.2, 1.75),                 // 0.30: Swooping center-front close to screen
      new THREE.Vector3(-2.3 * scaleFactor, -0.4, 0.8),   // 0.45: Deep left wing turn across Our Work
      new THREE.Vector3(-2.5 * scaleFactor, 1.25, -0.9),  // 0.60: Climbing up-back into 3D round loop
      new THREE.Vector3(-0.3 * scaleFactor, 1.0, -1.3),   // 0.72: Rounding top-center of loop
      new THREE.Vector3(1.6 * scaleFactor, -0.5, -0.2),   // 0.86: Gliding down towards Products
      new THREE.Vector3(2.2 * scaleFactor, -1.15, 0.1),   // 0.95: Leveling approach into Products
      new THREE.Vector3(2.4 * scaleFactor, -1.25, 0.2),   // 1.00: Fixed resting perch in right-bottom corner (horizontal!)
    ];

    const flightCurve = new THREE.CatmullRomCurve3(waypoints, false, "catmullrom", 0.5);

    // Mouse tracking for subtle interactive head/wing parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Load GLB Model
    const loader = new GLTFLoader();
    let craneMesh: THREE.Object3D | null = null;

    loader.load(
      "/origami_crane.glb",
      (gltf: GLTF) => {
        const model = gltf.scene;

        model.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            // Crisp faceted origami paper material
            mesh.material = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#ff5e00"),
              roughness: 0.35,
              metalness: 0.08,
              side: THREE.DoubleSide,
              flatShading: true,
            });
          }
        });

        // Center model geometry inside the inner group
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Fix forward face direction: rotate model by Math.PI so beak points forward in direction of flight
        model.rotation.y = Math.PI;

        // Adjust scale
        const baseScale = isMobile ? 0.75 : 0.95;
        craneInner.scale.set(baseScale, baseScale, baseScale);

        craneMesh = model;
        craneInner.add(model);
        setIsLoaded(true);

        // Initialize position at start waypoint
        const initialPoint = flightCurve.getPoint(0);
        craneGroup.position.copy(initialPoint);
        const initialTangent = flightCurve.getTangent(0).normalize();
        craneGroup.lookAt(initialPoint.clone().add(initialTangent));

        // Setup GSAP ScrollTrigger timeline bound to the entire journey wrapper
        setupScrollAnimation();
      },
      undefined,
      (error: unknown) => {
        console.error("Error loading origami crane model:", error);
      }
    );

    function setupScrollAnimation() {
      // Bind flight progress strictly to the crane journey wrapper (About -> Work -> Products)
      gsap.timeline({
        scrollTrigger: {
          trigger: "#crane-journey-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.0,
          onUpdate: (self) => {
            flightState.progress = Math.max(0, Math.min(1, self.progress));
          },
        },
      });
    }

    // 8. Render & Aerodynamics Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    const currentLookTarget = new THREE.Vector3();
    const currentPosition = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (craneMesh) {
        const t = flightState.progress;
        const targetPos = flightCurve.getPoint(t);
        const tangent = flightCurve.getTangent(t).normalize();

        // Smooth position interpolation
        currentPosition.lerp(targetPos, 0.15);
        craneGroup.position.copy(currentPosition);

        // Compute forward target direction for orientation (face direction)
        const lookAheadPoint = currentPosition.clone().add(tangent);
        currentLookTarget.lerp(lookAheadPoint, 0.15);
        craneGroup.lookAt(currentLookTarget);

        // Settle factor: smoothly levels out roll and pitch to exactly 0 when perched at start (About) or end (Products)
        const settleFactor =
          t > 0.85
            ? Math.max(0, (1.0 - t) / 0.15)
            : t < 0.12
            ? Math.max(0, t / 0.12)
            : 1.0;

        // Dynamic aerodynamic banking roll (wings bank into turns)
        const bankRoll = -tangent.x * 0.7 * settleFactor;

        // Pitch tilt (tilts up when climbing, down when diving, levels horizontally at start & end)
        const pitchTilt = -tangent.y * 0.3 * settleFactor;

        // Idle wing flapping / breathing & hover
        const isPerched = t < 0.02 || t > 0.98;
        const hoverSpeed = isPerched ? 1.8 : 4.2;
        const hoverAmp = isPerched ? 0.03 : 0.08;

        const idleHover = Math.sin(elapsedTime * hoverSpeed) * hoverAmp;
        const idleWingRoll =
          Math.sin(elapsedTime * (hoverSpeed * 0.85)) * (isPerched ? 0.02 : 0.1);

        craneInner.position.y = idleHover;
        craneInner.rotation.z = bankRoll + idleWingRoll + mouse.x * 0.1; // Wing bank + mouse roll
        craneInner.rotation.x = pitchTilt + mouse.y * -0.1;             // Pitch + mouse
        craneInner.rotation.y = mouse.x * 0.18;                         // Yaw towards cursor
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // 10. Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="sticky top-0 left-0 w-full h-screen pointer-events-none z-20 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      <canvas
        ref={canvasRef}
        className={`w-full h-full block transition-opacity duration-700 pointer-events-none ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
