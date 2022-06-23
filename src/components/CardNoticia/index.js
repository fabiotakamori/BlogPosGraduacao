import styled, {css} from "styled-components"
import Titulo from "../Title"

const Bloco = styled.div`
    margin: 1em auto;  	
    width: ${props => props.width};  
    border 5px solid #a0a0a0;
    border-radius: 10px 10px 0 0;
    margin-top:10px;
    margin-bottom:10px;	
`
const BlocoDesc = styled.div`
    text-align:center;
    font-weight:bold;
    font-size:20px;
`
const Image = styled.img`
    width:100%;
    height:auto;
    max-height:600px
`


const BlocoNoticia =({title, desc, image, size}) =>{
    return(
            <Bloco width={size}>
                 <Titulo>{title}</Titulo>
                <Image src={image}/>
                <BlocoDesc>{desc}</BlocoDesc>
            </Bloco>
    )
}

export default BlocoNoticia