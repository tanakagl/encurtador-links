import { FiLink } from "react-icons/fi"
import './home.css'

export default function Home() {
    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" alt="Imagem da logo"></img>
                <h1>Encurtador de Links</h1>
                <span>Cole seu link e encurte ele 🔗👇</span>
            </div>
            <div className="input-area">
                <div className="icon">
                    <FiLink size={24} color="white"/>
                    <input placeholder="Cole seu link aqui"/>
                </div>
                <button>Gerar Link</button>
            </div>
        </div>

    )
}