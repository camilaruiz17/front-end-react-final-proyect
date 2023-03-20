import React from 'react';
import emailjs from '@emailjs/browser';
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import './SenderAbsences.css';
import SelectDate from '../selectDate/SelectDate';

export default function SenderAbsences () {
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_19vqrs9','template_phlgxgh',event.target,'WrHmfsnC8q7_pqnIC')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
    <div className='p-4'>
        <h1 className='title-form-blue h2 text-left rounded-4 px-5 py-2'>AUSENCIAS</h1>
        <form className='form-mail-blue d-flex flex-column align-items-center w-100 rounded-4 p-4' onSubmit={sendEmail}>
            <label>Días</label>
            <SelectDate />
            <input type="text" name='user_name' />
            <label>Email</label>
            <input type="email" name='user_email' />
            <label>Mensaje</label>
            <textarea name="user_message" cols="27" rows="10" className='mb-4' />
            <div className="mb-4">
                <button className='btn btn-link'><img src="/deleteGreen.png" alt="botón borrar"></img></button>
                <button className='btn btn-link'><img src="/sendGreen.png" alt="botón enviar"></img></button>
            </div>
            <UploadWidget />
        </form>
    </div>
    )
};
