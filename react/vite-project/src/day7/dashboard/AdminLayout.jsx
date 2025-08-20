import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const AdminLayout = () => {
    return (
        <div>
            {/* Internal CSS */}
            <style>
                {`
                nav {
                    background-color: #333;
                    padding: 10px;
                    text-align: center;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin: 0 15px;
                    font-size: 16px;
                    transition: color 0.3s ease;
                }

                nav a:hover {
                    color: yellow;
                }

                main {
                    padding: 20px;
                    min-height: 70vh;
                    background-color: #f9f9f9;
                }

                h1 {
                    text-align: center;
                    background: #333;
                    color: white;
                    padding: 15px 0;
                    margin: 0;
                }
                `}
            </style>

            {/* Navbar */}
            <nav>
                <Link to="/admin">Home</Link>
                <Link to="product">Product</Link>
            </nav>

            {/* Page Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <h1>footer</h1>
        </div>
    )
}
