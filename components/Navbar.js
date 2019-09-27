import Link from 'next/link'
import styled from "styled-components";

//i18n
import { i18n, withTranslation } from '../i18n';
const Navbar = ({ t }) => {
    return (
        <nav>
            <Link href='/'><NavLink>{t('home')}</NavLink></Link>
            <Link href='/about'><NavLink>{t('about')}</NavLink></Link>
            <Link href='/contact'><NavLink>{t('contact')}</NavLink></Link>
            <Button to={i18n.language}
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
            >
                {t('change-lang')}
            </Button>
        </nav>
    )
}

const NavLink = styled.a`
margin:0 20px ;
font-size: 1.5rem;
cursor: pointer;
color: #4c393c;
border:none;

`

const Button = styled.a`
background-color:pink;
text-decoration:none;
cursor:pointer;
color:#4c393c;
border-radius:5px;
padding:3px;
float:${props => props.to === 'ar' ? 'left' : 'right'};
`


export default withTranslation('common')(Navbar)
