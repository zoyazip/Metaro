import './services.css'

const Services = () => {
    const servicesData = [
        {
            title: 'Turning',
            data: [{
                name: 'CNC lathe + C-axis milling',
                desc: '(machining dimensions 650 mm, L = 4000 mm)'
            },
            {
                name: 'Lathe',
                desc: '(machining dimensions 1000 mm, L = 5000 mm)'
            }]
        },
         {
            title: 'Milling',
            data: [{
                name: 'CNC mill',
                desc: '( X - 1626 mm, Y - 1280 mm, Z - 800 mm, A- axis)'
            },
            {
                name: 'Horizonlat and vertical',
                desc: 'milling machines'
            }]
        },
        {
            title: 'Metal cutting and bending',
            data: [{
                name: 'CNC waterjet',
                desc: '1500 mm x 3000 mm (max thickness 100 mm)'
            },
            {
                name: 'CNC laser 3kW',
                desc: '1500 mm x 3000 mm'
            },
            {
                name: 'CNC press brake',
                desc: '3m, 110t'
            }]
        },
        {
            title: 'Welding',
            data: [{
                name: 'Steel, stainless steel and aluminum welding',
                desc: ''
            },
            {
                name: 'Welding TIG, MIG/MAG/MMA',
                desc: '(welding workshop 15 x 60 m), stainless steel welding according to EN 3834-2'
            }]
        },
        {
            title: 'Surface treatment',
            data: [{
                name: 'Shot blasting',
                desc: '(8 x 14 m)'
            },
            {
                name: 'Wet painting',
                desc: '(8 x 14 m)'
            }]
        },
        {
            title: 'Assembly',
            data: [{
                name: 'Workshop',
                desc: '(8 x 30 m)'
            }]
        }
    ]


    return (
        <section className='servicesContainer' id='Services'>
            <div className='services'>
                <div className='servicesHeader'>
                    <h2>Welding and plate works are performed by certified welders.
                        In addition to diverse professional skills, our expertise is strengthened by IWS certified supervisor.
                    </h2>
                </div>
                <div className='servicesList'>
                    {servicesData.map((service, serviceIndex) => (
                        <div key={serviceIndex} className='servicesListItem'>
                            <div className='servicesListItemTitle'>
                                <h2 id={'serviceTitle'}>{service.title}:</h2>
                            </div>
                            <div className='servicesListItemData'>
                                <ul>
                                    {service.data.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <h3>{item.name}</h3>
                                            <p>{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <a href='#' id='servicesBtn'>See Equipment List</a>
            </div>
        </section>
    )
}

export default Services