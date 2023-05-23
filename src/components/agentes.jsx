import { useState } from "react";
import Professor from "./agentes_componentes/professor";
import Curso from "./agentes_componentes/curso";
import Local from "./agentes_componentes/local";
const Agentes = (prop)=>{
    return(
        <>
            <div className="container mb-5 col-md-5" style={{marginTop:"30px",height:"100%"}}>
                <div className="tipo_user">
                    <button className={prop.agentePage === 1?"btn btn-light form-control active":"btn btn-primary form-control"} type="button" onClick={()=>prop.setAgentePage(1)}>PROFESSOR</button>
                    <button className={prop.agentePage === 2?"btn btn-light form-control active":"btn btn-primary form-control"}  type="button" onClick={()=>prop.setAgentePage(2)}>CURSO</button>
                    <button className={prop.agentePage === 3?"btn btn-light form-control active":"btn btn-primary form-control"}  type="button" onClick={()=>prop.setAgentePage(3)}>LOCAL</button>
                </div>
                <div className="agente_form">
                    <div className="card cadastro_forms">
                        <div className="card-body">
                            {prop.agentePage === 1 && <Professor/>}
                            {prop.agentePage === 2 && <Curso/>}
                            {prop.agentePage === 3 && <Local/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Agentes;