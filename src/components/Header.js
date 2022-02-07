import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import icon from '../assets/images/icon.png';
const Header=()=>{
   
    return (
        <>
        <ul class="sidenav">
          <li><img className="icon" src={icon} height={30} width={50} alt="icon"></img></li>
          <li><p className="title">Easy-Peasy Translator</p></li>
          <li><Link to='/getcomponent' className='a'>Converted</Link></li>
          {/* <li><Link to='/service' className='a'>Services</Link></li> */}
          <li><Link to='/componentlist' className='a'>Component List</Link></li>
          <li><a href="https://html-validate.org/rules/index.html">Validation Rules</a></li>
          <li><Link to='/' className='a'>Home</Link></li>
        </ul>
      </>
    );
}
export default Header;