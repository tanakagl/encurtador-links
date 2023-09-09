import { FiLink } from "react-icons/fi"
import './home.css'
import Menu from '../../components/Menu'
import { useState } from 'react'
import LinkItem from "../../components/LinkItem"
import api from '../../services/api'

export default function Home() {

    const [link, setLink] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })
            
            setData(response.data)
            setShowModal(true)
            setLink('')

        } catch {
            alert('Algo deu errado!')
            setLink('')
        }
    }

    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" alt="Imagem da logo"></img>
                <h1>Encurtador de Links</h1>
                <span>Cole seu link e encurte ele 🔗👇</span>
            </div>
            <div className="input-area">
                <div className="icon">
                    <FiLink size={24} color="white" />
                    <input placeholder="Cole seu link aqui"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>Gerar Link</button>
            </div>
            <Menu />

            {showModal && (
                <LinkItem 
                closeModal = { () => setShowModal(false)}
                content = {data}
                />
            )}

        </div>

    )
}