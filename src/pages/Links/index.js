import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getLinksSaved, deleteLink } from '../../services/storeLinks'
import { useState, useEffect } from 'react'
import LinkItem from '../../components/LinkItem'


export default function Links(){
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
//Caso lista esteja vazia
  const [emptyList, setEmptyList] = useState(false);
  
  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSaved('@encurtaLink')

      if(result.length === 0){
        setEmptyList(true);
      }
      setMyLinks(result);
    }

    getLinks();

  }, [])

  function handleOpenLink(link){
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id);

    if (result.length === 0){
      setEmptyList(true);
    }
    setMyLinks(result)
  }


    return(
      <div className='container-links'>

        <div className='links-header'>
          <Link to={'/'}>
          <FiArrowLeft size={38} color='white'/>
          </Link>
          <h1>Meus Links</h1>
        </div>

        {emptyList && (
          <div className='links-item'>
            <h2 className='empty-text'>Sua lista está vazia! 😞</h2>
          </div>
        )}

        {myLinks.map( link => (
          <div key={link.id} className='links-item'>
          <button className='link' onClick={( )=> handleOpenLink(link)}>
            <FiLink size={18} color='white'/>
           {link.long_url}
          </button>
          <button className='trash' onClick={ () => handleDelete(link.id)}>
            <FiTrash size={24} color='red'/>
          </button>
        </div>
        ))}

        {showModal && (
          <LinkItem
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )}

      </div>
    )
  }