import { Navbar } from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Service } from '../pages/Service'
import { Contact } from '../pages/Contact'
import Footer from './Footer'
import { Layout } from './Layout'
import { AdminHome } from '../dashboard/AdminHome'
import { Productabout } from '../dashboard/Productabout'
import { AdminLayout } from '../dashboard/AdminLayout'

export const MainRouding = () => {
    return (
        <div>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/contact' element={<Contact />} />

                    </Route>

                    <Route path='/admin' element={<AdminLayout/>} >
                        <Route index element={<AdminHome />} />
                        <Route path='product' element={<Productabout />} />
                    </Route>


                </Routes> 

                {/* <Footer /> */}

            </BrowserRouter>

        </div>
    )
}
