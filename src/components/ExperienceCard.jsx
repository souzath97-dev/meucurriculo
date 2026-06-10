import '../styles/ExperienceCard.css'

function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">
      <div className="card-header">
        <h3 className="job-title">{experience.title}</h3>
        <span className="period">{experience.period}</span>
      </div>
      <p className="company">{experience.company}</p>
      <p className="description">{experience.description}</p>
    </div>
  )
}

export default ExperienceCard
