import AgendaProf from "./agenda_componentes/agenda_prof";
import AgendaLab from "./agenda_componentes/agenda_lab";
import AgendaSemestre from "./agenda_componentes/agenda_sem";
const Agenda = (prop)=>{
    return(
        <>
            <div className="agenda">
                <div className="container-fluid col-md-12 col-sm-12 col-xs-12" style={{marginTop:"15px"}}>
                    <div className="tipo_user" style={{marginBottom:"10px"}}>
                        <button className={prop.agendaPage === 1?"btn btn-light form-control active":"btn btn-primary form-control"} type="button" onClick={()=>prop.setAgendaPage(1)}>POR PROF.</button>
                        <button className={prop.agendaPage === 2?"btn btn-light form-control active":"btn btn-primary form-control"}  type="button" onClick={()=>prop.setAgendaPage(2)}>POR SEM.</button>
                        <button className={prop.agendaPage === 3?"btn btn-light form-control active":"btn btn-primary form-control"}  type="button" onClick={()=>prop.setAgendaPage(3)}>POR LAB.</button>
                    </div>
                    <div className="agente_form">
                        <div className="card cadastro_forms">
                            <div className="card-body">
                                {prop.agendaPage === 1 && <AgendaProf agenda={prop.agendaProf} setAgenda={prop.setAgendaProf}/>}
                                {prop.agendaPage === 2 && <AgendaSemestre agenda={prop.agendaSem} setAgenda={prop.setAgendaSem}/>}
                                {prop.agendaPage === 3 && <AgendaLab agendaLab={prop.agendaLab} setAgendaLab={prop.setAgendaLab} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Agenda;