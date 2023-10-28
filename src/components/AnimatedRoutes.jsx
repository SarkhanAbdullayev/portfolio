import React from 'react'
import Home from '../pages/Home'
import Inner from '../pages/Inner'
import { useLocation, Routes, Route } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {

    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/inner' element={<Inner />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes