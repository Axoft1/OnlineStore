import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom"
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
// import { SHOP_ROUTE } from "../utils/const";
// import { Navigate } from "react-router-dom";




const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user);
    // const isAuth = false
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={ <Element/>} />
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={ <Element/>} />
            )}
            
                {/* <Navigate  to ={SHOP_ROUTE}/>  */}


            {/* НАТИ НЕШЕНИЕ ПРОБЛЕМЫ ЗМЕНИТЬ  Redirect на Navigate */}
        </Routes>
    )
}

export default AppRouter;