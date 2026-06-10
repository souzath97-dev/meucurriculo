import '../styles/Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Desenvolvedor Freelancer',
      company: 'Projetos Pessoais',
      period: '2024 - Atual',
      description: 'Desenvolvimento de projetos web utilizando React, JavaScript e tecnologias modernas. Criação de interfaces responsivas e otimizadas para experiência do usuário.'
    },
    {
      id: 2,
      title: 'Estudante de Programação',
      company: 'Autodidata / Bootcamp',
      period: '2023 - 2024',
      description: 'Aprendizado intensivo em programação, lógica computacional e desenvolvimento web. Prática constante em projetos e desafios de código.'
    },
    {
      id: 3,
      title: 'Entusiasta de Tecnologia',
      company: 'Comunidade Tech',
      period: '2023 - Presente',
      description: 'Participação em grupos de estudo, repositórios open-source e comunidades de desenvolvedores. Compartilhamento de conhecimento e aprendizado colaborativo.'
    }
  ]

  return (
    <section className="experience-section">
      <h2>Experiências</h2>
      <div className="experience-list">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-card">
            <h3>{exp.title}</h3>
            <p className="company"><strong>{exp.company}</strong></p>
            <p className="period">{exp.period}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
