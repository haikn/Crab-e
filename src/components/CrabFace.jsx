export default function CrabFace({ emotion = 'neutral', speaking = false, activity = null }) {
  return (
    <div className={`crab emotion-${emotion}${speaking ? ' speaking' : ''}${activity ? ` act-${activity}` : ''}`} role="img" aria-label={`Krabtec crab face, ${emotion}`}>
      <div className="claw claw-left" />
      <div className="claw claw-right" />
      <div className="crab-body">
        <div className="eyes">
          <div className="eye-stalk"><div className="eye"><div className="pupil" /></div></div>
          <div className="eye-stalk"><div className="eye"><div className="pupil" /></div></div>
        </div>
        <div className="mouth" />
      </div>
    </div>
  )
}
