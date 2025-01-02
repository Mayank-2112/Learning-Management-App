import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <p>&copy; Instructify. All Rights Reserved.</p>
        <div className='footwer__links'>
            {['About', 'Contact', 'Licencing', 'Privacy Policy'].map((link, index) => (
                <Link key={link} href={`/${link.toLowerCase().replace(' ', '-')}`}
                className='footer__link'>
                    {link}
                </Link>
            ))}
        </div>
    </div> 
  )
}

export default Footer