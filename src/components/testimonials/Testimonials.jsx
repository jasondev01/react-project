import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Sample One',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam eaque iusto, quam error exercitationem et aliquam voluptatem reiciendis sit repellat quibusdam adipisci inventore perferendis. Eaque porro veniam enim iste?',
  },
  {
    avatar: AVTR2,
    name: 'Sample Two',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam eaque iusto, quam error exercitationem.',
  },
  {
    avatar: AVTR3,
    name: 'Sample Three',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam eaque iusto, quam error exercitationem et aliquam voluptatem reiciendis si!',
  },
  {
    avatar: AVTR4,
    name: 'Sample Four',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam eaque iusto, quam error exercitationem et aliquam voluptatem reiciendis sit repellat quibusdam adipisci inventore perferendis.',
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}} 
        >
        {
          data.map(
            ({avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client_name'>{name}</h5>
                  <small className='client_review'>
                    {review}
                  </small>
              </SwiperSlide>
              )
            }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
