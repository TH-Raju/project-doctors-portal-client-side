import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppOption from './AppOption';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selectedDate }) => {
    const [appointmentOptions, setappointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setappointmentOptions(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Availabe Appoinment on {format(selectedDate, 'PP')}</p>
            <div className='my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppoinments;