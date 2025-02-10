import { useLocation } from "react-router-dom";
import { Header, Footer } from "../component";

function Layout({children}) {
    const location = useLocation();

    const noLayoutRoutes = ["/login"];

    const hideLayout = noLayoutRoutes.includes(location.pathname);
    return (
        <>
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
}

export default Layout;
