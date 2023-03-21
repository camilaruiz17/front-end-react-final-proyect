import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import emailjs from '@emailjs/browser';
import UploadWidget from '../../components/uploadWidget/UploadWidget';
import './SenderAbsences.css';

export default function SenderAbsences () {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const sendEmail = (event) => {
        event.preventDefault();   
        emailjs.sendForm('service_19vqrs9','absences',event.target,'WrHmfsnC8q7_pqnIC')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
    <div className="width p-4">
        <h1 className="title-form-blue h2 text-left rounded-4 px-5 py-2">AUSENCIAS</h1>
        <form className="form-mail-blue rounded-4 px-5 py-4" onSubmit={sendEmail}>
            <div className="row">
                <div className="col mb-4">
                    <label>Inicio</label>
                    <DatePicker
                        name="startDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        locale={es}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecciona una fecha"
                        className="mb-2"
                    />
                    <DatePicker
                        name="startTime"
                        selected={startTime}
                        onChange={(date) => setStartTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        locale={es}
                        timeIntervals={15}
                        timeCaption="Hora"
                        dateFormat="HH:mm"
                        placeholderText="Selecciona una hora"
                    />
                </div>
                <div className="col mb-4">
                    <label>Fin</label>
                    <DatePicker
                        name="endDate"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        locale={es}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecciona una fecha"
                        className="mb-2"
                    />
                    <DatePicker
                        name="endTime"
                        selected={endTime}
                        onChange={(date) => setEndTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        locale={es}
                        timeIntervals={15}
                        timeCaption="Hora"
                        dateFormat="HH:mm"
                        placeholderText="Selecciona una hora"
                    />
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-link"><img src="/deleteGreen.png" alt="botón borrar"></img></button>
                <button className="btn btn-link"><img src="/sendGreen.png" alt="botón enviar"></img></button>
            </div>
            <UploadWidget />
        </form>
    </div>
    )
};