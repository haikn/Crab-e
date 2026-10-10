export const CASES = [
  {
    id: 'idea',
    title: 'Idea Snap',
    emoji: '💡',
    description: 'Give me a business idea and I will sum it up.',
    placeholder: 'e.g. A phone charger shaped like a crab',
    run: (input) =>
      `Concept: "${input}". A fun, focused product with a clear audience. Next step: test it with 5 real users this week.`,
  },
  {
    id: 'market',
    title: 'Market Snap',
    emoji: '📈',
    description: 'Ask about a market and get quick insight bullets.',
    placeholder: 'e.g. Sustainable packaging',
    run: (input) =>
      `• ${input} is trending upward.\n• Competitors are moving toward subscriptions.\n• Customers value simplicity and speed.`,
  },
  {
    id: 'strategy',
    title: 'Strategy Snap',
    emoji: '🧭',
    description: 'Pick a goal and I will propose strategy options.',
    placeholder: 'growth, awareness or conversion',
    run: (input) =>
      `Goal: ${input}\n1. Bold: launch a viral campaign.\n2. Balanced: partner with a known brand.\n3. Safe: optimise your existing channels.`,
  },
]

export const FOLLOW_UPS = [
  { id: 'reshape', question: 'Do you want me to reshape it?', say: 'Let me reshape it!' },
  { id: 'glitter', question: 'Do you want some glitter on it?', say: 'Sparkle time!' },
  { id: 'snap', question: 'Do you want me to snap ideas from competitors to make yours stand out?', say: 'Snap snap! Grabbing ideas from competitors.' },
  { id: 'rebuild', question: 'Do you want me to break down and rebuild your idea?', say: 'Breaking it down, then rebuilding it!' },
]
