import '../styles/SkillCategory.css'

function SkillCategory({ skillGroup }) {
  return (
    <div className="skill-category">
      <h3 className="category-title">{skillGroup.category}</h3>
      <ul className="skills-list">
        {skillGroup.skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCategory
