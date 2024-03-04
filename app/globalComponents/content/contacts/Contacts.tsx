import './contacts.css'

const Contacts = () => {
    const contacts = [
        {
            title: 'Inquiries',
            tel: '+371 25 654 406',
            email: 'arturs@metaro.lv'
        },
        {
            title: 'Finances',
            tel: '+371 29 226 788',
            email: 'janis@metaro.lv'
        },
        {
            title: 'Production',
            tel: '+371 20 295 649',
            email: 'girts@metaro.lv'
        },
        {
            title: 'Sheet processing',
            tel: '+371 27 042 009',
            email: 'ralfs@metaro.lv'
        },
    ]


    return (
        <section className='contactsContainer' id='Contacts'>
            <div className='contacts'>
                <div className='contactsHeader'>
                    <h1>Contacts</h1>
                </div>
                <div className='contactsList'>
                    <ul>
                         {contacts.map((contact, index) => (
                            <li key={index}>
                                <div className='contactTitle'>
                                    <h3>{contact.title}</h3>
                                </div>
                                <div className='contactData'>
                                    <div className='contactDetails'>
                                        <h5>tel.:</h5>
                                        <a href={`tel:${contact.tel}`}>{contact.tel}</a>
                                    </div>
                                    <div className='contactDetails'>
                                        <h5>e-mail:</h5>
                                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contacts