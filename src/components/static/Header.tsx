import styled from "styled-components"
import { useState } from "react"
import {FiMenu} from "react-icons/fi"
import GlobalButton from "../common/GlobalButton"
import Globalbutton from "../common/GlobalButton"

import {RiArrowDropDownLine,RiArrowDropUpLine} from "react-icons/ri"




const Header = () => {

  const [show,setShow]=useState(false)

  const Toggle=()=>{
  setShow(!show)
  }
  return (
    <div>
        <Container>
            <Wrapper>
           <Wrap>
    <Holder>
    <svg
                width="76"
                height="40"
                viewBox="0 0 76 65"
                fill="none" xmlns="http://www.w3.org/2000/svg"><path
                          d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>
                 <h1>Vercel</h1>  
    </Holder>
    <NavHolder>
    <Navs>Features</Navs>
                  <Navs>Docs</Navs>
                  <Navs>Templates</Navs>
                  <Navs>Integrations</Navs>
                  <Navs>Customers</Navs>
                  <Navs>Enterprise</Navs>
                  <Navs>Pricing</Navs>
    </NavHolder>
    </Wrap>
    <ButtonHolder>
         <Navs>Contact</Navs>
        <GlobalButton 
                      text="Login"
                      bcc="gray"
                      color="white" />
        <GlobalButton 
                      text="SignUp"
                      bcc="White"
                      color="black" />
                       
    </ButtonHolder>
    <Icon onClick={Toggle}>
   <FiMenu/>

    </Icon>
           {show?
           (
            <Card>
              <Hold>
              <Globalbutton text="Login" color="#a3a3a3" bcc="#313131" 
              margin="10px 0"
              />
              <Globalbutton text="Sign up" color="black" 
              bcc="white" margin="10px 0" />
                 <NavHolder style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "start"}}>
    <Navs style={{margin: "10px 0", borderBottom: " 1px solid silver"}}>Features</Navs>
                  <Navs style={{margin: "10px 0", borderBottom: " 1px solid silver"}}>Docs</Navs>
                  <Navs style={{margin: "10px 0", borderBottom: " 1px solid silver"}}>Templates</Navs>
                  <Navs style={{margin: "10px 0", borderBottom: " 1px solid silver"}}>Integrations</Navs>
                  <Navs style={{margin: "10px 0", borderBottom: " 1px solid silver"}}>Customers</Navs>
                  <Navs style={{margin: "10px 0", borderBottom: " 1px solid silver"}}>Enterprise</Navs>
                  <Navs style={{margin: "15px 0", borderBottom: " 1px solid silver"}}>Pricing</Navs>
    </NavHolder>
              
              

              </Hold>
                
              
              

           </Card>
           ):null
          }
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header

const Hold = styled.div`
width: 88%;
height: 100%;
display: flex;
flex-direction: column;

`
const Card = styled.div`
width: 100vw;
/* height: 300px; */
background: #141114;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
position: absolute;
top: 80px;
right: 0;
display: flex;
align-items: center;
justify-content: center;

`

const Icon = styled.div`
display:flex;
align-items:center;
color:#fff;
font-size:30px;
cursor: pointer;


@media screen and (max-width: 1194px) {
      display: flex;
}
display: none;
`

const ButtonHolder = styled.div`
display:flex;
align-items:center;

@media screen and (max-width:1194px) {
  display:none;
}
`

const Navs = styled.div`
color:gray;
margin-right:35px;
transition:all ease-in-out 350ms;
cursor: pointer;
width: 100%;

&:hover{
  color:#fff;
}
`

const NavHolder = styled.div`
display:flex;
align-items:center;
margin-left:20px;

@media screen and (max-width:1194px) {
  display:none;
  
}
`

const Holder = styled.div`
display:flex;
align-items:center;

h1{
color:#fff;
margin-right:15px;
font-size:20px;

}
`

const Wrap = styled.div`
display:flex;
align-items:center;
`

const Wrapper = styled.div`
width:95%;
height:100%;
display:flex;
align-items:center;
justify-content:space-between;
position:relative;
`

const Container = styled.div`
width:100%;
height:80px;
display:flex;
background-color:#000;
justify-content:center;

`