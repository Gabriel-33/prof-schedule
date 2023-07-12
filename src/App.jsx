import { useEffect, useState } from 'react'
import Menu from "./components/menu"
import Footer  from './components/footer'
import {AgentesMemoized} from './components/agentes'
import Agenda from './components/agenda'
import axios from 'axios';
function App() {
  const [page, setPage] = useState(1)
  const[agentePage,setAgentePage] = useState(1);
  const[agendaPage,setAgendaPage] = useState(1);
  const [agendaProf,setAgendaProf] = useState([]);
  const [agendaSem,setAgendaSem] = useState([]);
  const [agendaLab,setAgendaLab] = useState([]);
  useEffect(()=>{
    const token_valor = localStorage.getItem('token_valor');
    console.log(token_valor)
    if(agendaProf.length === 0){
      axios.get('http://localhost:8080/professor/listar_professores',{
        headers: {
          'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
        }
      })
      .then(response => {
        setAgendaProf(response.data);
      }).catch(error => {
          console.error(error);
      });
    }
    if(agendaSem.length === 0){
      axios.get('http://localhost:8080/curso/listar_curso',{
        headers: {
          'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
        }
      })
      .then(response => {
        setAgendaSem(response.data);
      }).catch(error => {
        console.error(error);
      });
    }
    if(agendaLab.length === 0){
      axios.get('http://localhost:8080/local/listar_local',{
        headers: {
          'authorization': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.3wR8NppWaGIWsvOWQEbo9BtrGKY5FJZ_PSfFcnEKD5g'
        }
      })
      .then(response => {
        setAgendaLab(response.data);
      }).catch(error => {
        console.error(error);
      });
    }
  },[agendaProf,agendaSem,agendaLab]);
  return (
    <>
      <Menu page={page} setPage={setPage}/>
        <div className="conteudo">
          {page === 1 && <AgentesMemoized agentePage={agentePage} setAgentePage={setAgentePage} className="agentes" />}
          {page === 2 && <Agenda className="agenda" 
          agendaPage={agendaPage} setAgendaPage={setAgendaPage} 
          agendaProf={agendaProf} setAgendaProf={setAgendaProf}
          agendaSem={agendaSem} setAgendaSem={setAgendaSem}
          agendaLab={agendaLab} setAgendaLab={setAgendaLab}
          />}
        </div>
      <Footer/>
    </>
  )
}

export default App
