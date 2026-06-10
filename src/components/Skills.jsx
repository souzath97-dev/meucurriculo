import '../styles/Skills.css'

function Skills() {
  const skills = [
    'Aprendizado rápido',
    'Resolução de problemas',
    'Curiosidade e busca constante por conhecimento',
    'Facilidade para aprender novos sistemas',
    'Organização de informações e processos',
    'Raciocínio lógico',
    'Persistência para entender problemas',
    'Uso de IA como apoio ao aprendizado e produtividade',
    'Boa adaptação a ferramentas digitais'
  ]

  return (
    <section className="skills-section">
      <h2>Competências e Aprendizado</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
