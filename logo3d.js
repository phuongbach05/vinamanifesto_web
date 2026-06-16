import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const mount = document.getElementById('brandLogo3d');
const canvas = document.getElementById('brandLogoCanvas');
const svg = document.getElementById('riverMap');
const mapWrap = document.querySelector('.map-wrap');
const LOGO_BOX = { x: 560, y: 230, width: 480, height: 420 };

if (mount && canvas && svg && mapWrap) {
  syncLogoPosition();

  initLogo3d().catch((error) => {
    console.warn('Could not load 3D logo:', error);
    mount.classList.add('is-fallback');
    positionLogo();
  });
}

async function initLogo3d() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.01, 100);
  camera.position.set(0, 0, 6.8);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
  keyLight.position.set(3, 4, 5);
  const rimLight = new THREE.DirectionalLight(0x9fd4ff, 2.2);
  rimLight.position.set(-4, -2, 4);
  const warmLight = new THREE.PointLight(0xffd34d, 2.0, 12);
  warmLight.position.set(0, 2.2, 3);
  scene.add(ambient, keyLight, rimLight, warmLight);

  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync('logo.glb');
  const logo = gltf.scene;
  scene.add(logo);

  normalizeLogo(logo);
  resize();
  renderer.render(scene, camera);
  mount.classList.add('is-loaded');

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(mount);
  window.addEventListener('resize', resize, { passive: true });

  function animate() {
    positionLogo();
    logo.rotation.y += 0.008;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();

  function resize() {
    positionLogo();
    const rect = mount.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function syncLogoPosition() {
  positionLogo();
  requestAnimationFrame(syncLogoPosition);
}

function positionLogo() {
  const svgRect = svg.getBoundingClientRect();
  const wrapRect = mapWrap.getBoundingClientRect();
  const viewBox = svg.viewBox.baseVal;
  const scale = Math.min(svgRect.width / viewBox.width, svgRect.height / viewBox.height);
  const renderedWidth = viewBox.width * scale;
  const renderedHeight = viewBox.height * scale;
  const offsetX = (svgRect.width - renderedWidth) / 2;
  const offsetY = (svgRect.height - renderedHeight) / 2;

  mount.style.left = `${svgRect.left - wrapRect.left + offsetX + (LOGO_BOX.x - viewBox.x) * scale}px`;
  mount.style.top = `${svgRect.top - wrapRect.top + offsetY + (LOGO_BOX.y - viewBox.y) * scale}px`;
  mount.style.width = `${LOGO_BOX.width * scale}px`;
  mount.style.height = `${LOGO_BOX.height * scale}px`;
}

function normalizeLogo(model) {
  const box = new THREE.Box3().setFromObject(model);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  model.position.sub(center);

  const minAxis = Math.min(size.x, size.y, size.z);
  if (minAxis === size.y) {
    model.rotation.x = -Math.PI / 2;
  } else if (minAxis === size.x) {
    model.rotation.y = Math.PI / 2;
  }

  const maxAxis = Math.max(size.x, size.y, size.z) || 1;
  const scale = 3 / maxAxis;
  model.scale.setScalar(scale);

  model.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false;
      child.receiveShadow = false;
      child.material = new THREE.MeshPhysicalMaterial({
        color: 0xd9dde5,
        metalness: 1.0,
        roughness: 0.08,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        reflectivity: 1.0,
        envMapIntensity: 2.4,
        side: THREE.DoubleSide
      });
    } else if (child.isLine || child.isLineSegments) {
      child.material = new THREE.LineBasicMaterial({
        color: 0xf4f7ff,
        linewidth: 2
      });
    } else if (child.isPoints) {
      child.material = new THREE.PointsMaterial({
        color: 0xf4f7ff,
        size: 0.025
      });
    }
  });
}
