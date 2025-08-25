import { Navbar } from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Service } from '../pages/Service'
import { Contact } from '../pages/Contact'
import { Login } from './Login'
import { Parent } from '../Parent'
import { ProtectedRoute } from '../ProtectedRoute'

export const MainRouding = () => {
    return (
        <div>
            <BrowserRouter>
                <Parent>

                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Login />} />

                        <Route path='/home' element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>} />
                        <Route path='/about' element={
                            <ProtectedRoute>
                                <About />
                            </ProtectedRoute>} />
                        <Route path='/service' element={
                            <ProtectedRoute>
                                <Service />
                            </ProtectedRoute>
                        } />
                        <Route path='/contact' element={
                            <ProtectedRoute>
                                <Contact />
                            </ProtectedRoute>

                        } />


                    </Routes>

                </Parent>

            </BrowserRouter>

        </div>
    )
}
