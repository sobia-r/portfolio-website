/*rafc command for boiler plate using extension ES7+React/redux...*/
import React,{useState} from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";
/*usestate bcox we need to keep tract of hamburger menu open or not*/

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    /*symantic HTML tag: is basically 
    a tag which behave like a <div> but
     has a special name which tells the 
     browser what its function is like 
     we are using <nav> in this example*/

     
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a> 
        <div className={styles.menu}>
            <img
            className={styles.menuBtn} 
            src={
                menuOpen
                  ? getImageUrl("nav/closeIcon.png")
                  : getImageUrl("nav/menuIcon.png")
              }
              alt='menu-button'
              onClick={()=>setMenuOpen(!menuOpen)} 
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)} /*tilda sign `` used for string interpolation*/ > 
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Project</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul> 
        </div>
    </nav> /*link to take us back to homepage*/
  );
};

export default Navbar

  