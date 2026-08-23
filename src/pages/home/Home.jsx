import React from 'react'
import Hero from '../../components/hero/Hero'
import BrandsBanner from '../../components/brandsBanner/BrandsBanner'
import NewArrivals from '../../components/newArrivals/NewArrivals'
import TopSelling from '../../components/topSelling/TopSelling'
import BrowseByStyle from '../../components/browseByStyle/BrowseByStyle'
import Testimonials from '../../components/testimonials/Testimonials'

const Home = () => {
    return (
        <>
            <Hero />
            <BrandsBanner />
            <NewArrivals />
            <TopSelling />
            <BrowseByStyle />
            <Testimonials />
        </>
    )
}

export default Home
