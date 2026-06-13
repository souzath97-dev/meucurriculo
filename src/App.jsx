import Header from "./components/Header"
import Sobre from "./components/SobreMim";
import CardExperiencia from "./components/CardExperiencia"
import Formacao from "./components/Formacao.jsx";
import Cursos from "./components/Cursos";
import './styles/style.css'

function App() {

    const experiencias = [
        {
            id: 1,
            empresa: "Simão Construtora",
            cargo: "Jovem Aprendiz - Suporte e Elétrica Predial e Industrial",
            tempo: "2018",
            descricao: [
                {
                    id: 1,
                    texto: "Suporte a produção."
                },
                {
                    id: 2,
                    texto: "Curso prático e teórico no SENAI-Petrópolis."
                }
            ]
        },
        {
            id: 2,
            empresa: "Carangola Log",
            cargo: "Logística",
            tempo: "2019 - 2022",
            descricao: [
                {
                    id: 1,
                    texto: "Processo e controle de Produção."
                },
                {
                    id: 2,
                    texto: "Administração de logistica."
                }
            ]
        }
    ];

    const formacao = [
        {   
            id: 1,
            instituicao: "Universidade Estácio de Sá",
            curso: "Direito",
            tempo: "2019 - 2024"
        },
        {
            id: 2,
            instituicao: "FAETERJ - Petrópolis",
            curso: "Tecnologia da Informação",
            tempo: "2025 - 2027"
        },
        {
            id: 3,
            instituicao: "Serratec",
            curso: "Desenvolvedor FullStack",
            tempo: "Mar/2026 - Jul/2026"
        }
    ]

    const cursos = [
        {
            id:1,
            curso: "Mecanico de Motores Aeronáuticos - SENAI-Petrópolis",
            tempo: "2019 - 2020"
        }
    ]

    return (
        <div className="curriculo">
            <Header
                nome="Thiago Souza"
                email="souza.th97@gmail.com"
                dataNascimento="19/05/1997"
                endereco="Quitandinha, Petrópolis - RJ"
            />
            <h1>Sobre mim</h1>
            <Sobre />

            <h1>Experiência Profissional</h1>
            {experiencias.map((exp) => (
                <CardExperiencia key={exp.id}
                empresa={exp.empresa}
                cargo={exp.cargo}
                tempo={exp.tempo}
                descricao={exp.descricao}
                />
            ))}

            <h1>Histórico Académico</h1>
            {formacao.map((form)=>(
                <Formacao key={form.id}
                instituicao={form.instituicao}
                curso={form.curso}
                tempo={form.tempo}
                />
            ))}

            <h1>Cursos</h1>
            {cursos.map((curso)=>(
                <Cursos key={curso.id}
                curso={curso.curso}
                tempo={curso.tempo}
                />
            ))}
        </div>
    );
}

export default App;