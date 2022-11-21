import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Nome</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Assunto</label>
                <input type='text'></input>
                <label>Detalhes</label>
                <textarea rows='6' placeholder='Digite uma breve mensagem' />
                <button className='btn'>Enviar</button>
            </form>
        </div>
    )
}

export default Form