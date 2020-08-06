import React from "react"
import Menu from "../menu/index"
import Footer from "../Footer"
import styled from "styled-components"

const Main = styled.main`
background-color:var(--black);
color:var(--white);
padding-top:50px;
padding-left:5%x;
padding-right:5%;
flex:1;
`;

function PageDefault(props){
    return(
        <>
           <Menu />
               <Main>
            {props.children}
               </Main>
            <Footer />

        </>

    );

}
export default PageDefault;