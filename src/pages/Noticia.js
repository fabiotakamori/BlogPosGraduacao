//usando React Router
import BlocoNoticia from "../components/CardNoticia"
import thelast from "../img/remake.jpg";
import spider from "../img/spider.jpg";
import rtx from "../img/rtx.jpg";
import styled, {css} from "styled-components"
import Titulo
 from "../components/Title";
const Section = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const Noticia = () =>{
    return(
        <div>
            <Titulo>Hardware</Titulo>
            <Section>
                <BlocoNoticia title="The Last of us" desc=" The Last of Us Remake teve seu primeiro trailer vazado através do site oficial da Sony, o PlayStation Direct, nesta quinta-feira (9)." image={rtx} size="70%"/>
            </Section>
            <Titulo>Novidades</Titulo>
            <Section>
                <BlocoNoticia title="The Last of us" desc=" The Last of Us Remake teve seu primeiro trailer vazado através do site oficial da Sony, o PlayStation Direct, nesta quinta-feira (9)." image={thelast} size="35%"/>
                <BlocoNoticia title="Spiderman" desc=" The Last of Us Remake teve seu primeiro trailer vazado através do site oficial da Sony, o PlayStation Direct, nesta quinta-feira (9)." image={spider} size="35%"/>
            </Section>
        </div>

    )
}

export default Noticia