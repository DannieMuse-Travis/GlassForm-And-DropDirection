
import React from 'react'
import styled from 'styled-components'


interface iButton{
  text: string;
  bcc:string;
  color: string;
  margin?:string
 
}

const Globalbutton:React.FC<iButton> = ({
text,color,bcc, margin
}) => {
  return (
    <Button bcc={bcc} color={color} margin={margin} >
      {text}
    </Button>
  )
}

export default Globalbutton

const Button = styled.button<{bcc:string;color:string; margin?:string }>`
background-color:${({bcc})=>bcc};
padding: 10px 15px;
color:${({ color }) => color};
border-radius: 7px;
border: 1px solid lightgray;
margin-right: 20px;
margin: ${({margin})=> margin};

@media screen and (max-width: 768px) {
        display: none;
    }
`