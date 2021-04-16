import React from 'react'
import './BodyStyle.css'
import Estud from '../images/icons/ESTUD.PNG'

function educacao() {
    return (
        <>
            <div className="text-container">
                <div className="title-container">
                    EDUCAÇÃO
                </div>
                <div className="textBody">
                    <div className="techIcon">
                        <img src={Estud}/>
                    </div>
                    <ul>
                        <li><b>(2021-2025)</b> Graduação em Engenharia de Software, UnB - Universidade de Brasília.</li>
                        <li><b>(2017-2019)</b> Técnico em Informática para Internet, IFG - Instituto Federal de Goiás.</li>
                        <li><b>(2017-2019)</b> Ensino Médio, IFG - Instituto Federal de Goiás.</li>
                    </ul>
                </div>
            </div>           
        </>
    )
}

export default educacao
