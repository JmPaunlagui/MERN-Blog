import React from 'react'

import Header from '../parts/Header'
import Footer from '../parts/Footer'

import Slider from '../parts/Slider'
import FreshStories from '../parts/FreshStories'
import TrendingPost from '../parts/TrendingPost'

const Home = () => {
    return<>
        <Header/>
            <Slider/>
            <TrendingPost/>
            <FreshStories/>
        <Footer/>
    </>
}

export default Home;