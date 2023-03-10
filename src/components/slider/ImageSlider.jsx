import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import './slider.css';

import landing from './../../assets/images/landing.png';
import landing1 from './../../assets/images/landing1.png';
import landing2 from './../../assets/images/landing2.png';

const images = [landing, landing1, landing2];


const Slider = () => {
    return (
        <div className="slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={true}
                className="slider-item"
                >
                    {
                        images.map ((slide, index) => (

                            <SwiperSlide key={index}>
                                <img src={slide} alt="Slide" />
                            </SwiperSlide>
                        ))
                    }
                {/* <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
        </div>
      );
}

export default Slider;