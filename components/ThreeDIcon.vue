<template>
  <div ref="canvasContainer" class="w-full h-full"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  scene.background = null  // Transparent background

  const camera = new THREE.PerspectiveCamera(
    75,
    canvasContainer.value.clientWidth / canvasContainer.value.clientHeight,
    0.1,
    1000
  )

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  const radius = 5

  // Group for horizontal rotation (Y-axis)
  const horizontalGroup = new THREE.Group()
  // Group for vertical rotation (X-axis)
  const verticalGroup = new THREE.Group()

  const icons = [
    { path: '/icons/html.png', group: horizontalGroup },
    { path: '/icons/css.png', group: verticalGroup },
    { path: '/icons/vue.png', group: horizontalGroup },
    { path: '/icons/laravel.png', group: verticalGroup },
  ]

  const loadIconTexture = (path) => {
    const loader = new THREE.TextureLoader()
    return loader.load(path)
  }

  icons.forEach((iconData, index) => {
    const angle = (index / 2) * Math.PI  // Adjusted for two icons per group
    const texture = loadIconTexture(iconData.path)

    const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
    const sprite = new THREE.Sprite(material)

    if (iconData.group === horizontalGroup) {
      // Horizontal rotation (around Y-axis)
      sprite.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)
    } else {
      // Vertical rotation (around X-axis)
      sprite.position.set(0, Math.cos(angle) * radius, Math.sin(angle) * radius)
    }

    sprite.scale.set(3, 3, 3)
    iconData.group.add(sprite)
  })

  // Add both groups to the scene
  scene.add(horizontalGroup)
  scene.add(verticalGroup)

  camera.position.z = 10

  const animate = () => {
    requestAnimationFrame(animate)
    
    // Rotate groups in different axes
    horizontalGroup.rotation.y += 0.01  // Horizontal icons rotate around Y-axis
    verticalGroup.rotation.x += 0.01    // Vertical icons rotate around X-axis

    renderer.render(scene, camera)
  }

  animate()

  // Resize handler to fit container size
  window.addEventListener('resize', () => {
    const width = canvasContainer.value.clientWidth
    const height = canvasContainer.value.clientHeight

    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  })
})
</script>

<style scoped>
div {
  background: transparent;
}
</style>