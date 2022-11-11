import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';


const MakeAppoinment = () => {
    return (
        <section className='mt-16 lg:w-10/12 mx-auto'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img src={doctor} className="lg:w-1/2 hidden md:block -mt-32 rounded-lg shadow-2xl" alt='treatment' />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appoinment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an appoinment Today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Appoinment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;