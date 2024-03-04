import Image from 'next/image'
import './capabilities.css'

const Capabilities = () => {

    const capabilities = [
        {
            image: './SolidWorksLogo.svg',
            text: 'Solidworks is extensively used by our technical personel'
        },
        {
            image: './CamWorksLogo.svg',
            text: 'SolidCam software is used on a daily basis for machined parts with complex geometry.'
        },
        {
            image: './MonitorLogo.svg',
            text: 'ERP Monitor for production management'
        }
    ]

    return (
        <section className='capabilitiesContainer'>
            <h1>Capabilities</h1>
            <div className='capabilities'>
                {
                    capabilities.map((item, index) => (
                        <div className='capability' id={`cap-item-${index}`} key={index}>
                            <div className='capabilityImage'>
                                <Image src={item.image} alt={item.text} width={365} height={76} />
                            </div>
                            <div className='capabilityText'>
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Capabilities