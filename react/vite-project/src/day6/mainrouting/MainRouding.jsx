import { Navbar } from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Service } from '../pages/Service'
import { Contact } from '../pages/Contact'

export const MainRouding = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/contact' element={<Contact />} />


                </Routes>

            </BrowserRouter>

        </div>
    )
}
