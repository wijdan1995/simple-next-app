import Navbar from './Navbar'
import styled, { createGlobalStyle } from "styled-components";
import { i18n } from '../i18n';

const GlobalStyle = createGlobalStyle`
body{
    padding:0;
    margin:0;
    font-family: serif;
}
`;

const RTL = createGlobalStyle`
html{
  direction:rtl;
}`

const Layout = props => {
    return (
        <Container>
            {i18n.language === 'ar' ? <RTL /> : ''}
            <GlobalStyle />
            <Navbar />
            <Warpper>{props.children}</Warpper>

        </Container>
    )
}

export default Layout

const Warpper = styled.div`
padding:10%;
margin:5%;
text-align:center;
color:gray;
background-color: #fff;
`

const Container = styled.div`
height: 100vh;
background-color: #FDE4E4;
padding:5%;
`
