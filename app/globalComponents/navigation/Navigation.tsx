"use client"

import Image from 'next/image'
import './navigation.css'
import { useEffect, useState } from 'react'

const Navigation = () => {

    const [burgerState, setBurgerState] = useState('burgerClosed')
    const [showMenu, setShowMenu] = useState(false);

    const toggleBurger = () => {
    if (burgerState === 'burgerClosed') {
        setBurgerState('burgerOpen');
        setShowMenu(true);
        document.body.classList.add('no-scroll');
    } else {
        setBurgerState('burgerClosed');
        setShowMenu(false);
        document.body.classList.remove('no-scroll');
    }
}

const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    var offset = 200 // The height of your fixed header or desired space
    const targetId = e.currentTarget.getAttribute("href")!.slice(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
        console.log(targetId)
    } else {
        console.error(`Element with id '${targetId}' not found.`)
    }

    setBurgerState('burgerClosed')
    setShowMenu(false)
    document.body.classList.remove('no-scroll')
}

    return (
        <nav className='navigationContainer'>
            <div className={`navigationInfo ${showMenu ? '' : 'hidden'}`}>
                <div className='navigationSocial'>
                    <ul>
                        <li><a href='#'><Image className='socialIcons' src='/facebook.svg' alt='Facebook' width={25} height={25}/></a></li>
                        <li><a href='#'><Image className='socialIcons' src='/instagram.svg' alt='Instagram' width={25} height={25}/></a></li>
                        <li><a href='#'><Image className='socialIcons' src='/linkedin.svg' alt='Linkedin' width={25} height={25}/></a></li>
                    </ul>
                </div>
                <div className='navigationContacts'>
                    <ul>
                        <li>
                            <a href='#'>
                                <Image src='/tel.svg' alt='Telephone' width={25} height={25}/>
                                <h4>+371 25 654 406</h4>
                            </a>
                        </li>
                         <li>
                            <a href='#'>
                                <Image src='/mail.svg' alt='Email' width={25} height={25}/>
                                <h4>info@metaro.lv</h4>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='navigationLanguages'>
                    <ul>
                        <li>
                            <a href='#'>
                                <Image className='lang' src='/eng.svg' alt='eng' width={25} height={25}/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <Image className='lang' src='/lv.svg' alt='lv' width={25} height={25}/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <Image className='lang' src='/fi.svg' alt='fi' width={25} height={25}/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <Image className='lang' src='/swe.svg' alt='swe' width={25} height={25}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='navigationBarContainer'>
                <div className='navigationBar'>
                    <div className='navigationLogo'>
                        <Image src='/metaro_logo.png' alt='Metaro Logo' width={100} height={90}/>
                    </div>
                    <div className={`navigationLinks ${showMenu ? '' : 'hidden'}`}>
                        <ul>
                            <li><a className='selected' href='#Home' onClick={handleNavigation}>Home</a></li>
                            <li><a href='#About' onClick={handleNavigation}>About</a></li>
                            <li><a href='#Certifications' onClick={handleNavigation}>Certifications</a></li>
                            <li><a href='#Services' onClick={handleNavigation}>Services</a></li>
                            <li><a href='#Gallery' onClick={handleNavigation}>Gallery</a></li>
                            <li><a href='#Vacancies' onClick={handleNavigation}>Vacancies</a></li>
                        </ul>
                        <div className={`navigationContactBTN`}>
                        <a href='#Contacts' onClick={handleNavigation} >Contact Us</a>
                    </div>
                    </div>
                    
                    <div className='burgerMenu'>
                        <Image src={burgerState === 'burgerClosed' ? '/burgerClosed.svg' : '/burgerOpen.svg'} alt='Burger Menu Icon' width={50} height={50} onClick={toggleBurger}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;