import { Outlet } from "react-router"
import { Footer } from "../../shared"
 
export const Layout = () => {
    return (
        <div>
            <div>Шапка</div>
           
          
            <Outlet />
            <Footer/>
        </div>
    )
}