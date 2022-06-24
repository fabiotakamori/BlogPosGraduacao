//usando React Router
import styled, {css} from "styled-components"
import Titulo from "../components/Title"

/*Estilização de componente, bibilioteca(lib) que nos permite escrever codigo CSS dentro de JS*/
const Section = styled.div`
    margin: 0 50px;
`
const Paragrafo = styled.div`
    padding 10px 10px;
`

const Sobre = () =>{
    return(
        <div>
            <Titulo>Sobre Nós</Titulo>
            <Section>
                <Paragrafo>O ADRENALINE surgiu pela afinidade de seus fundadores, Fábio Feyh e Jacson Boeing, por dois segmentos: games e tecnologia. Em 1999, quando ambos começaram a cursar Design na mesma Universidade, em Florianópolis, surgiu a ideia de explorar uma carência do mercado regional, lançando em 2001 o projeto ADRENALINE, que consistia na abertura do primeiro Lan Gaming Center de Santa Catarina e, em paralelo, um site/fórum especializado em games e hardwares de computador para gamers.</Paragrafo>
                <Paragrafo>Com o sucesso da primeira loja e a constante procura por parte de jovens empreendedores em montar um negócio semelhante ao ADRENALINE, ambos decidiram expandir a marca ADRENALINE através do Sistema de Franchising, surgindo em 2002, a ADRENALINE FRANQUIAS, que em seu auge chegou a possuir 15 franquias.</Paragrafo> 
                <Paragrafo>No entanto, em 2007, devido à alta informalidade do setor e à falta de uma legislação especifica, ambos decidiram focar todos os esforços na unidade de negócios que à época se mostrava mais promissora, lançando em dezembro de 2008, uma nova versão do seu portal de conteúdo, muito mais abrangente e informativo, sempre presente nos grandes lançamentos da indústria - através da cobertura inloco de grandes feiras e eventos mundiais</Paragrafo>
            </Section>
            <Titulo>Sobre o Portal</Titulo>
            <Section>
                <Paragrafo>Um capítulo à parte na história da ADRENALINE, o portal www.adrenaline.com.br, sempre foi uma grande aposta de seus empreendedores e desde 2008 vem se destacando em seu segmento de atuação. Atualmente o ADRENALINE é um dos maiores portais a cobrir os segmentos de games e tecnologia no Brasil, com aproximadamente 110 mil visitas únicas por dia e mais de 350 mil pageviews diários.</Paragrafo>
            </Section>

        </div>
    )
}

export default Sobre