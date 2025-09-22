import { Outlet } from "react-router-dom"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PublicLayout

// Navbar
// Contenuto -> Home -> Login -> Register
// Footer

// <nav></nav>
// <main>
    // <Components>
// </main>
// <footer></footer>