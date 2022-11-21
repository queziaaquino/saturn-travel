import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Básico -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Dias -</p>
                    <p>- Imersão Completa -</p>
                    <p>- All Inclusive-</p>
                    <p>- Alojamento Privado -</p>
                    <Link to='/contact' className='btn'>Agendar</Link>
                </div>
                <div className='card'>
                    <h3>- Suite -</h3>
                    <span className='bar'></span>
                    <p className='btc'>2 BTC</p>
                    <p>- 5 Dias -</p>
                    <p>- Experiência Premium -</p>
                    <p>- All Inclusive -</p>
                    <p>- Alojamento Privado -</p>
                    <Link to='/contact' className='btn'>Agendar</Link>
                </div>
                <div className='card'>
                    <h3>- Executivo -</h3>
                    <span className='bar'></span>
                    <p className='btc'>3 BTC</p>
                    <p>- 7 Dias -</p>
                    <p>- Vista Exclusiva -</p>
                    <p>- All Inclusive -</p>
                    <p>- Alojamento Privado -</p>
                    <Link to='/contact' className='btn'>Agendar</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing