import { Link } from 'react-router-dom'
import './error.css'

export default function Error(){
    return(
        <div className='container-error'>
            <img src='notfound.png' alt='Página não foi encontrada!'></img>
            <h1>Página não foi encontrada</h1>
            <Link to={'/'}>
                Voltar para a home
            </Link>
        </div>
    )
}