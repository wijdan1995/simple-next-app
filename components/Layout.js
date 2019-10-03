import Navbar from './Navbar'
import styled, { createGlobalStyle } from "styled-components";
import { i18n, withTranslation } from '../i18n';
import PropTypes from 'prop-types'

const GlobalStyle = createGlobalStyle`
body{
    padding:0;
    margin:0;
    font-family: serif;
    background-color: #FDE4E4;
}
`


const Layout = props => {
    const { t } = props
    const lng = i18n.language
    return (
        <Container lng={lng} >
            <GlobalStyle />
            {/* pass the lng and t to the nav to use it there again */}
            <Navbar lng={lng} t={t} />
            <Warpper>{props.children}</Warpper>
        </Container>
    )
}

Layout.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Layout)

const Warpper = styled.div`
padding:5%;
margin: 5%;
text-align:center;
color:gray;
border-radius:5px;
background-color: #fff;
`


const Container = styled.div`
height: 100vh;
padding:3%;
direction: ${props => props.lng === 'ar' ? "rtl" : "initial"}
`
