import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { swiperSlides } from '../../data/data';

const HeroSwiper = () => {
   const [loaded, setLoaded] = useState<Record<string, boolean>>({});
   const [activeIndex, setActiveIndex] = useState<number>(0);

   return (
      <Swiper
         effect="fade"
         pagination={{ dynamicBullets: true, clickable: true }}
         autoplay={{ delay: 8000, disableOnInteraction: true, pauseOnMouseEnter: true }}
         speed={2400}
         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
         onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
         modules={[Pagination, EffectFade, Autoplay]}
         noSwiping
         noSwipingClass="no-swipe"
      >
         {swiperSlides.map((slide, idx) => (
            <SwiperSlide key={slide.src}>
               <div className="relative w-full h-full">
                  {/* Low resolution image (placeholder) */}
                  <img
                     src={slide.lowRes}
                     alt=""
                     className="absolute w-full h-full object-cover brightness-80 dark:brightness-[65%] duration-700 transition-[filter] select-none"
                  />
                  {/* High resolution image */}
                  <motion.img
                     src={slide.src}
                     alt=""
                     initial={{ opacity: 0, scale: 1 }}
                     animate={{
                        opacity: loaded[slide.src] ? 1 : 0,
                        scale: activeIndex === idx ? 1.035 : 1
                     }}
                     transition={{ opacity: { duration: 1 }, scale: { duration: 8 } }}
                     className="absolute w-full h-full object-cover brightness-75 dark:brightness-[60%] duration-700 transition-[filter] select-none"
                     onLoad={() => setLoaded((prev) => ({ ...prev, [slide.src]: true }))}
                  />
                  {/* Overlay text */}
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                     <AnimatePresence mode="wait">
                        {activeIndex === idx && (
                           <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -50 }}
                              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.625 }}
                              className="px-8"
                           >
                              <motion.h2
                                 initial={{ opacity: 0, scale: 0.8, rotateX: 450 }}
                                 animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.625 }}
                                 className="text-4xl md:text-6xl font-extrabold text-shadow-lg drop-shadow-md select-text no-swipe"
                              >
                                 {slide.heading}
                              </motion.h2>
                              {slide.subheading && (
                                 <motion.p
                                    initial={{ opacity: 0, y: 5, rotateX: 90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.75 }}
                                    className="text-lg md:text-2xl mt-4 text-shadow-lg drop-shadow-md select-text no-swipe"
                                 >
                                    {slide.subheading}
                                 </motion.p>
                              )}
                              {slide.buttonText && (
                                 <motion.button
                                    initial={{ opacity: 0, scale: 0.975 }}
                                    animate={{ opacity: 1, scale: 0.975 }}
                                    transition={{
                                       opacity: { duration: 1, ease: 'easeOut', delay: 0.9 }
                                    }}
                                    whileHover={{ scale: 1, transition: { duration: 0.2 } }}
                                    className="mt-6 px-7 py-4 bg-transparent border-2 border-white text-white text-2xl font-semibold rounded-full text-shadow-lg drop-shadow-md shadow-lg text-re cursor-pointer select-text no-swipe tracking-wide"
                                 >
                                    {slide.buttonText}
                                 </motion.button>
                              )}
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
export default HeroSwiper;
