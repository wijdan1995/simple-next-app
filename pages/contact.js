import Layout from '../components/Layout'
import styled from "styled-components";

const contact = () => {
    return (
        <Layout>

            <p>
                You can contact me anytime if you have any questions
        </p>
            <Button href="mailto:my@email.com">Contact me!</Button>
        </Layout>
    )
}

const Button = styled.a`
background-color:pink;
text-decoration:none;
cursor:pointer;
color:#4c393c;
border-radius:5px;
padding:5px;

`

export default contact

