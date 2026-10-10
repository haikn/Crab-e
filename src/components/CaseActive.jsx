import { useState } from 'react'
import { FOLLOW_UPS } from '../cases.js'

export default function CaseActive({ item, onRun, onFollowUp }) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setOutput(item.run(input.trim()))
    onRun()
  }

  if (item.legs) {
    return (
      <section className="panel">
        <h2>{item.emoji} {item.title}</h2>
        <div className="followups">
          {item.legs.map((l) => (
            <button key={l.id} type="button" className="btn secondary" onClick={() => { setOutput(`${l.name}: ${l.info}`); onRun() }}>{l.name}</button>
          ))}
        </div>
        {output && <pre className="output">{output}</pre>}
      </section>
    )
  }

  return (
    <form className="panel" onSubmit={submit}>
      <h2>{item.emoji} {item.title}</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={item.placeholder} aria-label={item.title} />
      <button type="submit" className="btn">Ask Krabtec</button>
      {output && <pre className="output">{output}</pre>}
      {output && (
        <div className="followups">
          {FOLLOW_UPS.map((f) => (
            <button key={f.id} type="button" className="btn secondary" onClick={() => onFollowUp(f)}>{f.question}</button>
          ))}
        </div>
      )}
    </form>
  )
}
