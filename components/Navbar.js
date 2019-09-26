import Link from 'next/link'
import styled from "styled-components";

const Navbar = () => {
    return (
        <nav>
            <Link href='/'><NavLink>Home</NavLink></Link>
            <Link href='/about'><NavLink>About</NavLink></Link>
            <Link href='/contact'><NavLink>Contact</NavLink></Link>
        </nav>
    )
}

const NavLink = styled.a`
margin-right:20px;
font-size: 1.5rem;
cursor: pointer;
color: #4c393c;

`

export default Navbar
