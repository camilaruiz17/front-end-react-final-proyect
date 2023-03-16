import React from 'react';
import emailjs from '@emailjs/browser';
import '../sender/Sender.css';

export const Sender = () => {

    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_19vqrs9','template_phlgxgh',event.target,'WrHmfsnC8q7_pqnIC')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
    <div className='p-4'>
        <h1 className='title-form h2 text-left rounded-4 px-4'>VACACIONES</h1>
        <form className='form-mail d-flex flex-column align-items-center w-100 rounded-4 p-4' onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type="text" name='user_name' />
            <label>Email</label>
            <input type="email" name='user_email' />
            <label>Mensaje</label>
            <textarea name="user_message" cols="25" rows="10" className='mb-4' />
            <button><img src="/public/botonEnviar.png" alt="botón enviar"></img></button>
        </form>
    </div>
    )
}
