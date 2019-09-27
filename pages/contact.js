import Layout from '../components/Layout'
import styled from "styled-components";
import { withTranslation } from '../i18n';
import PropTypes from 'prop-types'

const contact = ({ t }) => {
    return (
        <Layout>

            <p>{t('contact-text')}</p>
            <Button href="mailto:my@email.com">{t('contact-button')}</Button>
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

contact.getInitialProps = async () => ({
    namespacesRequired: ['common', 'contact'],
})

contact.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('contact')(contact)

