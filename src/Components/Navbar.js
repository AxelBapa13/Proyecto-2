import React, { useState } from 'react';
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { ImMenu } from "react-icons/im";
import { AiOutlineCloseCircle } from "react-icons/ai"; 


const Navbar = () => {
      const[navBarOpen, setNavbarOpen] = useState(false);

    const links = [
            {
              id: 1,
              link: "Home",
            },
            
            {
              id: 2,
              link: "Catalogo",
            },

            {
              id: 3,
              link: "Carrito",
            },
            
            {
              id: 4,
              link: "Contacto",
            },

            
            {
              id: 5,
              link: "Blog",
            },

        
    ];

  return (
    <div className={!navBarOpen ? styles.navBar : styles.navOpen}>
      {!navBarOpen && <p className={styles.logo}>Muebles Montessori</p>}
      {!navBarOpen ? ( 
          <ImMenu onClick={() => setNavbarOpen(!navBarOpen)} size={25} />
          ) : (
          <AiOutlineCloseCircle onClick={() => setNavbarOpen(!navBarOpen)}
          color ="#f1f1f" 
          size={25} 
          />
        )} 

        {navBarOpen &&  (
          <ul>
            {links.map((x) => (
              <div>
                <Link
                  onClick={() => setNavbarOpen(false)}
                  to={x.link}
                  smooth
                  duration={500}
                  className={styles.navLink}
                  >

                    {x.link === "Home" ? "Inicio" : x.link}
                </Link>
                <div className={styles.border}></div>
              </div>
            ))}
          </ul>
    )}
    </div>
  );
};

export default Navbar;
