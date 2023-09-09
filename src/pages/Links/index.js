import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Links(){
  
    return(
      <div className='container-links'>

        <div className='links-header'>
          <Link to={'/'}>
          <FiArrowLeft size={38} color='white'/>
          </Link>
          <h1>Meus Links</h1>
        </div>

        <div className='links-item'>
          <button className='link'>
            <FiLink size={18} color='white'/>
            https://www.teste.com.br
          </button>
          <button className='trash'>
            <FiTrash size={24} color='red'/>
          </button>
        </div>

      </div>
    )
  }