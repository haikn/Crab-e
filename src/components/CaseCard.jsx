export default function CaseCard({ item, onSelect }) {
  return (
    <button className="card" onClick={() => onSelect(item)}>
      <span className="card-emoji">{item.emoji}</span>
      <strong>{item.title}</strong>
      <span>{item.description}</span>
    </button>
  )
}
