import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Links from './pages/Links'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/meuslinks' element={<Links/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;