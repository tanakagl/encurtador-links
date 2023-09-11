import './menu.css'
import { BsYoutube, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://github.com/tanakagl' target='_blank'>
                <BsGithub color='white' size={24}/>
            </a>
            <a className='social' href='https://www.linkedin.com/in/matheorb' target='_blank'>
                <BsLinkedin color='white' size={24}/>
            </a>
            <Link className='menu-item' to={'/meuslinks'}>
            Meus Links
            </Link>
        </div>
    )
}