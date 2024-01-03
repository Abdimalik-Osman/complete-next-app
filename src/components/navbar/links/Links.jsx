import React from 'react'
import  Link  from 'next/link';
import styles from './links.module.css'
import NavLink from '../navlink/Navlink';
const Links = () => {
    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        }
    ]
    const session = true;
    const isAdmin = true;
  return (
    <div className={styles.links}>
      {
        links.map((link, index) =>(
            <NavLink item={link} key={index}/>
        ) )
      }

{session ?
    (<>
        {isAdmin && <NavLink item={{path:'/admin', title:'Admin'}} /> }
        <button className={styles.logout}>Logout</button>
    </>)  :
    <NavLink item={{path:'/login', title:'Login'}} />

    }
    </div>
  )
}

export default Links
