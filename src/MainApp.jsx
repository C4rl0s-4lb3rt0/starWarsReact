import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import { FavoritePage } from './FavoritePage'
import { StarWars } from './StarWars'

export const MainApp = () => {
    return (
        <>
            <Routes>




                <Route path="/" element={<StarWars /> }  />
                <Route path="/favorite" element={<FavoritePage /> }  />


                <Route path="/*" element={ <Navigate to="/"  />} />
            </Routes>
        </>
    )
}
