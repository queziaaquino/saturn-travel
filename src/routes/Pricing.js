import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PREÇOS' text='Escolha Sua Viagem.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing