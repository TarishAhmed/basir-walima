<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, onUnmounted } from 'vue'

let renderer: THREE.WebGLRenderer
let animId: number
let resizeFn: () => void

onMounted(() => {
  const container = document.getElementById('three-bg')!

  /* ── Scene ───────────────────────────────────────────────── */
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a040a)
  scene.fog = new THREE.FogExp2(0x1a040a, 0.018)

  /* ── Camera ──────────────────────────────────────────────── */
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200)
  camera.position.z = 30

  /* ── Renderer ────────────────────────────────────────────── */
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(renderer.domElement)

  /* ── Petal texture (drawn on a canvas) ───────────────────── */
  const makeTexture = (): THREE.CanvasTexture => {
    const c = document.createElement('canvas')
    c.width = 64; c.height = 96
    const ctx = c.getContext('2d')!
    // Petal shape: pointed oval
    ctx.clearRect(0, 0, 64, 96)
    const grad = ctx.createRadialGradient(32, 64, 4, 32, 50, 44)
    grad.addColorStop(0, 'rgba(235,195,130,0.95)')
    grad.addColorStop(0.5, 'rgba(180,80,80,0.75)')
    grad.addColorStop(1, 'rgba(90,15,30,0.0)')
    ctx.fillStyle = grad
    ctx.beginPath()
    // Ellipse-ish petal
    ctx.moveTo(32, 4)
    ctx.bezierCurveTo(60, 20, 60, 70, 32, 92)
    ctx.bezierCurveTo(4, 70, 4, 20, 32, 4)
    ctx.closePath()
    ctx.fill()
    return new THREE.CanvasTexture(c)
  }
  const petalTex = makeTexture()

  /* ── Petals ──────────────────────────────────────────────── */
  type Petal = { mesh: THREE.Mesh; vy: number; vx: number; vrot: number; vroty: number }
  const petals: Petal[] = []
  const geom = new THREE.PlaneGeometry(1, 1.6)

  const count = 120
  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshBasicMaterial({
      map: petalTex,
      transparent: true,
      opacity: 0.18 + Math.random() * 0.28,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    const mesh = new THREE.Mesh(geom, mat)
    const spread = 50
    mesh.position.set(
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 30 - 5
    )
    const s = 0.4 + Math.random() * 1.2
    mesh.scale.set(s, s, s)
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    )
    scene.add(mesh)
    petals.push({
      mesh,
      vy: -(0.018 + Math.random() * 0.025),
      vx:  (Math.random() - 0.5) * 0.008,
      vrot: (Math.random() - 0.5) * 0.012,
      vroty: (Math.random() - 0.5) * 0.008,
    })
  }

  /* ── Ambient light ───────────────────────────────────────── */
  scene.add(new THREE.AmbientLight(0xffe0b0, 0.8))

  /* ── Animate ─────────────────────────────────────────────── */
  const animate = () => {
    animId = requestAnimationFrame(animate)
    const halfW = window.innerWidth / 2
    const halfH = window.innerHeight / 2
    // project screen extents to world at z=0 approx
    const frustumH = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z
    const frustumW = frustumH * camera.aspect

    for (const p of petals) {
      p.mesh.position.y += p.vy
      p.mesh.position.x += p.vx
      p.mesh.rotation.z += p.vrot
      p.mesh.rotation.y += p.vroty
      // Respawn at top when out of view
      if (p.mesh.position.y < -frustumH / 2 - 2) {
        p.mesh.position.y = frustumH / 2 + 2
        p.mesh.position.x = (Math.random() - 0.5) * frustumW
      }
    }
    renderer.render(scene, camera)
  }
  animate()

  /* ── Resize ──────────────────────────────────────────────── */
  resizeFn = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', resizeFn)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', resizeFn)
  renderer?.dispose()
  const container = document.getElementById('three-bg')
  if (container) container.innerHTML = ''
})
</script>

<template>
  <div id="three-bg" class="three-bg" />
</template>

<style scoped>
.three-bg {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.three-bg :deep(canvas) {
  display: block;
  width: 100% !important;
  height: 100% !important;
}
</style>

