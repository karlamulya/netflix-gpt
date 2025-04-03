import React from 'react';
import { LOGO } from '../utils/Constants';

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-40' src={LOGO}
        alt='logo'></img>
    </div>
  )
}

export default Header