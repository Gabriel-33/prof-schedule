import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from "./components/menu"
import Footer  from './components/footer'
import Agentes from './components/agentes'
import Agenda from './components/agenda'
function App() {
  const [page, setPage] = useState(1)
  const[agentePage,setAgentePage] = useState(1);
  const[agendaPage,setAgendaPage] = useState(1);
  useEffect(()=>{
  },[page])
  return (
    <>
      <Menu page={page} setPage={setPage}/>
        <div className="conteudo">
          {page === 1 && <Agentes agentePage={agentePage} setAgentePage={setAgentePage} className="agentes" />}
          {page === 2 && <Agenda className="agenda" agendaPage={agendaPage} setAgendaPage={setAgendaPage}/>}
        </div>
      <Footer/>
    </>
  )
}

export default App
