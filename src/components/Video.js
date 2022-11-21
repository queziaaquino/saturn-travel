import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Saturn Travel.</h1>
                <p>Primeira Agência de Viagens Espaciais do Mundo</p>
                <div>
                    <Link to='/training' className='btn'>Treinamento</Link>
                    <Link to='/contact' className='btn btn-light'>Lançamento</Link>
                </div>
            </div>
        </div>
    )
}

export default Video