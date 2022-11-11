import React from 'react';
import treatement from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className=''>
            <div className="hero mx-auto mt-20 lg:w-1/2 ">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img src={treatement} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, On Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;