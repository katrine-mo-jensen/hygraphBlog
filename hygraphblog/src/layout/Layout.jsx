import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { Navigation } from "../components/navigation/Navigation"
import { Outlet } from 'react-router-dom'

export const Layout = () => {

    return(
        <main>
            
            <Navigation/>
            <Outlet/>
            <Footer/>
        </main>
    )
}