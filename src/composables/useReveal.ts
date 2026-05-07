import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useReveal(threshold = 0.15): { elRef: Ref<HTMLElement | null>; revealed: Ref<boolean> } {
  const elRef = ref<HTMLElement | null>(null)
  const revealed = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elRef.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          revealed.value = true
          observer?.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(elRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { elRef, revealed }
}
