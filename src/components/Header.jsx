import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <img src="/profile.jpg" alt="Thiago Souza" className="profile-image" />
          <h1 className="name">Thiago Souza</h1>
        </div>
        <div className="header-info">
          <h2 className="title">Desenvolvedor Full Stack | Estudante de React</h2>
          <p className="bio">
            Currículo desenvolvido em React para apresentar minhas habilidades, formação, experiências profissionais e projetos.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
