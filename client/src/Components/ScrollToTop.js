import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        closeNav();
    }, [pathname]);

    const closeNav = () => {
        const navContainer = document.getElementsByClassName("navContainer")[0];
        if (navContainer.classList.contains("openNav")) navContainer.classList.remove("openNav");
    }

    return null;
}