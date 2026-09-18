import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

function updateProgress() {
  const bar = document.querySelector('.aufe-progress') as HTMLElement | null
  if (!bar) return
  const doc = document.documentElement
  const scrollTop = doc.scrollTop || document.body.scrollTop
  const height = doc.scrollHeight - doc.clientHeight
  const ratio = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0
  bar.style.width = `${ratio}%`
}

function ensureProgressBar() {
  if (document.querySelector('.aufe-progress')) return
  const el = document.createElement('div')
  el.className = 'aufe-progress'
  el.setAttribute('aria-hidden', 'true')
  document.body.appendChild(el)
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    onMounted(() => {
      ensureProgressBar()
      nextTick(updateProgress)
    })
    watch(
      () => route.path,
      () => nextTick(() => {
        ensureProgressBar()
        updateProgress()
        window.scrollTo(0, 0)
      })
    )
  }
}
