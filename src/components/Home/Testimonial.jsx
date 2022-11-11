import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: person1,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non id pariatur ipsam eveniet. Cum unde deleniti porro labore adipisci alias!",
            location: 'California'
        },
        {
            _id: 2,
            name: 'Herry Potter',
            img: person2,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non id pariatur ipsam eveniet. Cum unde deleniti porro labore adipisci alias!",
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson luic',
            img: person3,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non id pariatur ipsam eveniet. Cum unde deleniti porro labore adipisci alias!",
            location: 'California'
        },
    ]


    return (
        <section className='my-16 lg:w-10/12 mx-auto'>
            <div className='flex justify-between'>
                <div className='my-6'>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure >
                    <img src={quote} alt="" className='lg:w-48 w-24' />
                </figure>
            </div>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonial;