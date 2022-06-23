import "./index.css"
import adrenalina from"../../img/Adrenalina.png"
const Footer =() =>{
    return(
        <div className="footer">
            <div className="logo-img">
                <img src={adrenalina}/>
            </div>
            <div className="footer-menu">
                <span>
                     QUEM SOMOS
                </span>
                <span>
                    EQUIPE
                </span>
                <span>
                    PUBLICIDADE
                </span>
                <span>
                    FALE CONOSCO
                </span>
                <span>
                    CONDIÇÕES DE USO
                </span>
                <span>
                    POLÍTICA DE PRIVACIDADE
                </span>
            </div>
        </div>
    )
}

export default Footer