import { About } from "../pages/About"
import { Errorpage } from "../pages/Errorpage"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from "./Navbar"
import { UserProvider } from "../context/UserContext"
import { ProtectedRoute } from "../context/ProtectedRoute"


export const MainRouting = () => {
    return (
        <div>
            <BrowserRouter>
                <UserProvider>



                    <Navbar />
                    <Routes>

                        <Route path="/home" element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>

                        } />
                        <Route path="/about" element={
                            <ProtectedRoute>
                                <About />
                            </ProtectedRoute>} />
                        <Route path="/" element={<Login />} />


                        <Route path="*" element={<Errorpage />} />

                    </Routes>

                </UserProvider>
            </BrowserRouter>

        </div>
    )
}
