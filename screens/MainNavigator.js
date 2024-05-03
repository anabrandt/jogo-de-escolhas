import { useEffect, useState } from "react";
import AuthNavigator from "./AuthNavigator";
import NoAuthNavigator from "./NotAuthNavigator";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const MainNavigator = () => {
    const [isAuth, setIsAuth] = useState(false);

    // Adicionar o listener do firebase auth aqui

    return (
            isAuth ?
            <AuthNavigator /> :
            <NoAuthNavigator />
    )
}

export default MainNavigator;