import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import AppOption from './AppOption';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selectedDate }) => {
    // const [appointmentOptions, setappointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            // const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setappointmentOptions(data))
    // }, [])

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
                    refetch={refetch}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppoinments;