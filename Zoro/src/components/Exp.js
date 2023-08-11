import React from 'react'
import { useState } from 'react'

const Exp = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className='text-white'>
        <button onClick={toggleMenu}>Toggle Menu</button>
        {isOpen && (
          <div className="popup-menu ">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  

export default Exp