import React from 'react'
import {Link} from 'react-router-dom';

const Footer=()=>{
    return(
        <section className='footer'>
            <Link to='/team' className='aboutus'>About Us</Link>
        </section>
    )
}
export default Footer;