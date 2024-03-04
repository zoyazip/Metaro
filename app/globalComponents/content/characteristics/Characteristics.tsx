import Image from 'next/image'
import './characteristics.css'

const Characteristics = () => {
const characteristics = [
    {
        icon: './contract.svg',
        text: 'Contract manufacturer'
    },
    {
        icon: './years.svg',
        text: 'Years'
    },
    {
        icon: './employees.svg',
        text: 'Employees'
    },
    {
        icon: './turnover.svg',
        text: 'Turnover'
    },
    {
        icon: './induvidualParts.svg',
        text: 'Individual parts/annum'
    },
    {
        icon: './singlePeace.svg',
        text: 'Single-piece production'
    },
    {
        icon: './area.svg',
        text: 'Production area'
    },
    {
        icon: './exported.svg',
        text: 'Countries exported'
    },
]

    return (
        <section className='charecteristicsContainer' id='About'>
            {characteristics.map((item, index) => (
                <div id={'item-' + index} key={index} className='charecteristicsContainerItem'>
                    <div className='characteristicsIcon'>
                        <Image src={item.icon} alt='Characteristic Icon' width={100} height={100} />
                    </div>
                    <div className='characteristicsText'>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Characteristics