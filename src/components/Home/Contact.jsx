import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div>
            <section className='mt-16 py-8 lg:w-10/12 mx-auto'
                style={{
                    background: `url(${appointment})`
                }}
            >
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row gap-12">


                        <form action="">
                            <h2 className='text-xl text-center text-primary font-bold'>Contact Us</h2>
                            <h2 className='text-3xl text-center text-white pb-10 font-bold'>Stay Connected With Us</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">What is your name?</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered text-slate-700 w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text text-white">What is your name?</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered text-slate-700 w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea className="textarea text-slate-700 textarea-bordered h-24" placeholder="Enter Message"></textarea>
                            </div>
                            <div className='text-center mt-8'>
                                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary  text-white">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;