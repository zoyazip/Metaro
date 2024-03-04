import Image from 'next/image'
import './pageContent.css'
import ContentHeader from './header/ContentHeader'
import Characteristics from './characteristics/Characteristics'
import Turnkey from './turnkey/Turnkey'
import Certificates from './certificates/Certificates'
import Capabilities from './capabilities/Capabilities'
import Services from './services/Services'
import Gallery from './gallery/Gallery'
import Vacancies from './vacancies/Vacancies'
import Contacts from './contacts/Contacts'
import Credentials from './credentials/Credentials'
import Funds from './funds/Funds'
import Footer from './footer/Footer'

const PageContent = () => {

    return (
        <div className='pageContentContainer'>
            <div className='pageContent'>
                <ContentHeader />
                <div className='pageContentInnerContainer'>
                    <Characteristics />
                </div>
                <Turnkey />
                <Certificates />
                <Capabilities />
                <Services />
                <Gallery />
                <Vacancies />
                <Contacts />
                <Credentials />
                <Funds />
                <Footer />
            </div>
        </div>
    )
}

export default PageContent