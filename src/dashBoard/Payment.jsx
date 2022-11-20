import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;
    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className='text-xl'> Please pay <strong>${price}</strong> for your appoinment on <strong>{appointmentDate}</strong> at <strong>{slot}</strong></p>

        </div>
    );
};

export default Payment;