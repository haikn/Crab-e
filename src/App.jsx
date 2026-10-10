import { useCallback, useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import CrabFace from './components/CrabFace.jsx'
import CaseCard from './components/CaseCard.jsx'
import CaseActive from './components/CaseActive.jsx'
import useSpeech from './hooks/useSpeech.js'
import { CASES } from './cases.js'

const GREETING = 'Hey, I am Krabtec. Scan the QR code to talk to me.'

export default function App() {
  const [mode, setMode] = useState('intro') // intro | qr | case_select | case_active
  const [emotion, setEmotion] = useState('neutral')
  const [subtitle, setSubtitle] = useState('')
  const [started, setStarted] = useState(false)
  const [activity, setActivity] = useState(null)
  const [activeCase, setActiveCase] = useState(null)
  const { speak, cancel, speaking } = useSpeech()

  const start = useCallback(() => {
    setStarted(true)
    setEmotion('happy')
    setSubtitle(GREETING)
    speak(GREETING, () => {
      setMode('qr')
      setEmotion('neutral')
    })
  }, [speak])

  // Browsers may block speech without a user gesture, so try automatically
  // and also offer a start button.
  useEffect(() => {
    const t = setTimeout(start, 500)
    return () => clearTimeout(t)
  }, [start])

  const home = () => {
    cancel()
    setActiveCase(null)
    setMode(started ? 'qr' : 'intro')
    setEmotion('neutral')
  }

  const pick = (item) => {
    setActiveCase(item)
    setMode('case_active')
    setEmotion('thinking')
    setSubtitle(`${item.title}: ${item.description}`)
    speak(`${item.title}. ${item.description}`)
  }

  const ran = () => {
    setEmotion('surprised')
    setTimeout(() => setEmotion('happy'), 800)
    speak('Done! Here is what I think.')
  }

  const followUp = (f) => {
    setActivity(null)
    requestAnimationFrame(() => setActivity(f.id))
    setSubtitle(f.say)
    speak(f.say)
    setTimeout(() => setActivity(null), 3000)
  }

  const joinUrl = window.location.href

  return (
    <main className="app">
      {mode !== 'intro' && <button className="btn home" onClick={home}>⌂ Home</button>}
      <CrabFace emotion={emotion} speaking={speaking} activity={activity} />
      {activity === 'glitter' && (
        <div className="glitter-screen" aria-hidden="true">
          {Array.from({ length: 40 }, (_, i) => (
            <span key={i} style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, animationDelay: `${(i % 8) * 0.15}s` }}>✦</span>
          ))}
        </div>
      )}
      <p className="subtitle" aria-live="polite">{subtitle}</p>

      {mode === 'intro' && (
        <button className="btn" onClick={start} disabled={speaking}>
          {started ? 'Talking…' : '🦀 Wake Krabtec'}
        </button>
      )}

      {mode === 'qr' && (
        <section className="panel">
          <div className="qr"><QRCode value={joinUrl} size={180} /></div>
          <p>Waiting for someone to connect…</p>
          <button className="btn" onClick={() => { setMode('case_select'); setSubtitle('What should we do?'); speak('What should we do?') }}>
            Choose a case
          </button>
        </section>
      )}

      {mode === 'case_select' && (
        <section className="cards">
          {CASES.map((c) => <CaseCard key={c.id} item={c} onSelect={pick} />)}
        </section>
      )}

      {mode === 'case_active' && activeCase && (
        <>
          <CaseActive item={activeCase} onRun={ran} onFollowUp={followUp} />
          <button className="btn secondary" onClick={() => { setMode('case_select'); setEmotion('neutral') }}>← All cases</button>
        </>
      )}
    </main>
  )
}
