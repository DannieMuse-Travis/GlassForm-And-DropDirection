import React from 'react'
import styled from 'styled-components'


interface cardProps {
    title: string;
    cardIcon: any;
    cardText: string;
}

const HouseButton:React.FC<cardProps> = ({title, cardIcon, cardText}) => {
  return (
    <div>
        <Container>
            
            <Card1>
              <Top>
                  <Icons>
                    {cardIcon}
                  </Icons>
                <Title>
                    {title}
                </Title>
              </Top>
               <Button>
               <Text>
                    {cardText}
                </Text>
               </Button>
              </Card1>
            
        </Container>
    </div>
  )
}

export default HouseButton
const Icons = styled.div`
 justify-content:center;
align-items:center;
 display:flex;
 color:white;
margin-right:5px;
 ` 
const Title = styled.div`
 font-weight:500;
 font-size:15px;
 
 `
const  Top = styled.div`
display:flex;


`
const Button = styled.div`
 margin-top:5px; 
 font-weight: 200;
 font-size: 10px;
 `
const Text = styled.div``
const Card1 = styled.div`
display:flex;
flex-direction:column;

`

const Container = styled.div`
background-color:transparent ;
background: rgba( 000, 000, 000, 0.05 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 6.5px );
-webkit-backdrop-filter: blur( 6.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
 padding:8px 15px;
 border-radius:5px;
 display:flex;
 justify-content:flex-start;
 align-items:start;
margin:5px;

color:white;
&:hover{
    cursor: pointer;
border:1px solid silver;

}
 `
