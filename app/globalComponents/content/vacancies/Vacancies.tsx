import './vacancies.css'
import Image from 'next/image';

const Vacancies = () => {

    const vacancies = [
        {
            name: 'CNC mill operator',
            desc: 'Main production area',
            available: true,
            link: '#'
        },
        {
            name: 'CNC lathe operator',
            desc: 'Main production area',
            available: false,
            link: '#'
        },
        {
            name: 'Industrial painter',
            desc: 'Main production area',
            available: false,
            link: '#'
        },
        {
            name: 'Sheet processing operator',
            desc: 'Sheep processing department',
            available: false,
            link: '#'
        },
        {
            name: 'Engineer/ Technologist',
            desc: 'Sheep processing department',
            available: false,
            link: '#'
        },
        {
            name: 'Quality control',
            desc: 'Main production area',
            available: false,
            link: '#'
        }
    ]

    return (
        <section className='vacanciesContainer' id='Vacancies'>
            <h1>Vacancies</h1>
            <div className='vacancies'>
                <div className='vacanciesList'>
                   <ul>
                        {vacancies.map((vacancy, index) => (
                            <li 
                                key={index} 
                                id={ vacancy.available ? 'available' : 'notAvailable' }
                                className='vacancyItem'>
                                <div className='vacancyData'>
                                    <div className='vacancyName'>
                                        <h3>{vacancy.name}</h3>
                                    </div>
                                    <p>{vacancy.desc}</p>
                                </div>
                                <div className='vacancyArrow'>
                                    <Image src='/vacancyArrow.svg' width={40} height={40} alt='vacancyArrow'/>
                                </div>
                            </li>
                        ))}
                   </ul>
                </div>
            </div>
        </section>
    )
}

export default Vacancies