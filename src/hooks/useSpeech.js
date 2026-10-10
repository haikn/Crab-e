import { useCallback, useEffect, useRef, useState } from 'react'

// Speaks lines with the Web Speech API. Falls back to a timed subtitle when unavailable.
export default function useSpeech() {
  const [speaking, setSpeaking] = useState(false)
  const timer = useRef(null)

  const cancel = useCallback(() => {
    clearTimeout(timer.current)
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [])

  const speak = useCallback((text, onDone) => {
    let finished = false
    const done = () => {
      if (finished) return
      finished = true
      clearTimeout(timer.current)
      setSpeaking(false)
      onDone?.()
    }
    setSpeaking(true)
    const fallbackMs = Math.max(2500, text.length * 70)
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(text)
      u.lang = 'en-US'
      u.pitch = 1.4
      u.onend = done
      u.onerror = done
      window.speechSynthesis.speak(u)
      // safety net if the browser never fires events (e.g. autoplay blocked)
      timer.current = setTimeout(done, fallbackMs + 4000)
    } else {
      timer.current = setTimeout(done, fallbackMs)
    }
  }, [])

  useEffect(() => cancel, [cancel])

  return { speak, cancel, speaking }
}
