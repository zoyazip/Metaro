import Image from 'next/image'
import './contentHeader.css'

const ContentHeader = () => {
    return (
        <header className='contentHeader' id='Home'>
            <video autoPlay muted loop playsInline className='headerBgVideo'>
                <source src="./bg.mp4" type="video/mp4"/>
            </video>
            <div className='headerVideoOverlap'>
                <div className='headerPrimaryText'>
                    <h1>Welcome to METARO - Your Global Partner in Complex Steel Fabrications</h1>
                </div>
                <div className='headerSecondaryText'>
                    <p>Our customers develop and supply technologies for pulp and paper, material flow, waste refining and solid biomass handling, military, glass fiber industries.</p>
                </div>
                <div className='headerArrow'>
                    <Image src='./arrow.svg' alt='arrow' width={83} height={83}/>
                </div>
            </div>
        </header>
    )
}

export default ContentHeader