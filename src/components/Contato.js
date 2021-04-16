import React from 'react'
import linkedin from '../images/icons/linkedin.PNG'
import gmail from '../images/icons/email.PNG'
import whatsapp from '../images/icons/whatsapp.PNG'
import insta from '../images/icons/insta.PNG'
import github from '../images/icons/github.PNG'

function Contato() {
    return (
        <>
            <div className="text-container">
                <div className="title-container">
                    CONTATOS
                </div>
                <div className="social-container">
                    <a href="https://www.linkedin.com/in/millena-queiroz-/"><img src={linkedin} className="social-icon"/></a>
                    <a href="mailto:millena.queiroz08@gmail.com?subject=Ola%20millena"><img src={gmail} className="social-icon"/></a>
                    <a href="https://www.whatsapp.com/?lang=pt_br"><img src={whatsapp} className="social-icon"/></a>
                    <a href="https://www.instagram.com/1000lenaq/"><img src={insta} className="social-icon"/></a>
                    <a href="https://www.github.com/MillenaQueiroz"><img src={github} className="social-icon"/></a>
                </div>
            </div>
        </>
    )
}

export default Contato
