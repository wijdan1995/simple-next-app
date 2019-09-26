import Layout from '../components/Layout'
import { withTranslation } from '../i18n';

const about = ({ t }) => {
    return (
        <Layout>
            <p>{t('about-text')}</p>
        </Layout>
    )
}

export default withTranslation('common')(about)
