import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti praesentium cum temporibus similique id expedita repellat alias sit laborum! Nisi!',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti praesentium cum temporibus similique id expedita repellat alias sit laborum! Nisi!',
            img: cavity
        },
        {
            id: 1,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti praesentium cum temporibus similique id expedita repellat alias sit laborum! Nisi!',
            img: whitening
        }
    ]
    return (
        <div className='mt-16  lg:w-10/12 mx-auto'>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-primary uppercase'>Our Services</h2>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;