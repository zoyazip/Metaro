import MetaroMap from '../map/MetaroMap'
import './credentials.css'

const Credentials = () => {

    return (
        <section className='credentialsContainer'>
            <div className='credentials'>
                <div className='credentialsSide'>
                    <h3>SIA METĀRO</h3>
                    <div className='credentialsInnerContainer'>
                        <div className='credentialsAddress'>
                            <p>Cempu street 21A</p>
                            <p>Valmiera</p>
                            <p>LV-4201 Latvia</p>
                            <div className='credentialsA'>
                                <h4>tel.:</h4>
                                <a>+371 62202259</a>
                            </div>
                            <div className='credentialsA'>
                                <h4>e-mail:</h4>
                                <a>info@metaro.lv</a>
                            </div>
                        </div>
                        <div className='credentialsTime'>
                            <h4 className='credentialsTimeTitle'>
                                Working hours:
                            </h4>
                            <div className='credentialsTimeData'>
                                <h4>M. T. W. T.</h4>
                                <p>8:00 - 17:00</p>
                            </div>
                            <div className='credentialsTimeData'>
                                <h4>F</h4>
                                <p>8:00 - 14:30</p>
                            </div>
                        </div>
                        <div className='credentialsRequisites'>
                            <h4 className='credentialsRequisitesTitle'>
                                Bank account:
                            </h4>
                            <h4>A/S SEB BANKA</h4>
                            <div className='credentialsRequisitesData'>
                                <h4>Kods:</h4>
                                <p>UNLALV2X</p>
                            </div>
                            <div className='credentialsRequisitesDataKont'>
                                <h4>Account Nr.:</h4>
                                <p>LV57 UNLA 005 001 157 289 5</p>
                            </div>
                        </div>
                        <div className='credentialsPVN'>
                            <h4 className='credentialsPVNTitle'>
                                VAT registration number:
                            </h4>
                            <div className='credentialsPVNData'>
                                <p>LV44103027870</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <MetaroMap /> 
                    
                </div>
            </div>
        </section>
    )
}

export default Credentials