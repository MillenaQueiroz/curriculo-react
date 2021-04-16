import React from 'react'
import './BodyStyle.css'
import Tech from '../images/icons/tech.PNG'
function Skills() {
    return (
        <>
            <div className="text-container">
                <div className="title-container">
                    SKILLS
                </div>
                <div className="textBody">
                    <div className="techIcon">
                        <img src={Tech}/>
                    </div>
                    <ul>
                        <li><b>Gerais: </b>Lógica de Programação, Inglês (básico), Figma e pacote office. </li>
                        <li><b>Front-end: </b>React, HTML e CSS.</li>
                        <li><b>Linguagem de Programação: </b> JavaScript, C e Python.</li>
                        <li><b>Sistemas Operacionais: </b>Windows, Linux e MacOS.</li>
                        <li><b>Sistemas de Controle de Versão: </b>Git.</li>
                    </ul>
                </div>
            </div>     
        </>
    )
}

export default Skills
