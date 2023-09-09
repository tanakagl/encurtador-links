import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://youtube.com/@matheobonucia1436?si=2Y4tOkv9iBM8RStR'>
                <BsYoutube color='white' size={24}/>
            </a>
            <a className='social' href='https://instagram.com/matheobonucia_'>
                <BsInstagram color='white' size={24}/>
            </a>
            <Link className='menu-item' to={'/meuslinks'}>
            Meus Links
            </Link>
        </div>
    )
}