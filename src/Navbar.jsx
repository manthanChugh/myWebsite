import { Children } from 'react'
import logo from "C:/Manthan/Coding/React Projects/react-project/src/images/LogoC.png"
import './Navbar.css'
import { Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Navbar(){
    return (
        <header>
        <nav className="nav">    
        <CustomLink to = '/' className = "siteTitle"> <img src = {logo} width={30}/> </CustomLink>
            
            <ul className='navList'>
                <CustomLink to = "/Experimental" id = "link2" className = "mid"> Experimental </CustomLink>   
                <CustomLink to = "/Tutoring" id = "link3" className = "mid"> Tutoring </CustomLink>
                <CustomLink to = "/Programming" id = "link4" className = "mid"> Projects </CustomLink>
                <CustomLink to = "/Resume" id = "link5" className = "mid"> Résumé</CustomLink>
            </ul>
            <button> <CustomLink to = "/Contact">Contact </CustomLink></button>
        </nav>
        </header>
        )
}
function CustomLink ({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true })

    return(
        <li className={isActive? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}