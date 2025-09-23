export const swiperSlides: {
   src: string;
   lowRes: string;
   heading: string;
   subheading?: string;
   buttonText?: string;
}[] = [
   {
      src: '/asd.jpg',
      lowRes: '/asd-small.jpg',
      heading: 'Welcome to Our Site',
      subheading: 'Discover the best content tailored for you.',
      buttonText: 'Get Started'
   },
   {
      src: '/asd2.jpg',
      lowRes: '/asd2-small.jpg',
      heading: 'Modern & Responsive',
      subheading: 'Built with React, Swiper, and Tailwind CSS.',
      buttonText: 'Learn More'
   },
   {
      src: '/asd3.jpg',
      lowRes: '/asd3-small.jpg',
      heading: 'Smooth Animations',
      subheading: 'Experience sleek transitions and effects.',
      buttonText: 'See Features'
   },
   {
      src: '/asd4.jpg',
      lowRes: '/asd4-small.jpg',
      heading: 'Pixelated Loading',
      subheading: 'Optimized UX with image placeholders.',
      buttonText: 'Explore'
   }
];

export const navLinks: { to: string; label: string }[] = [
   { to: '/', label: 'Home' },
   { to: '/coaches', label: 'Coaches' },
   { to: '/clients', label: 'Clients' },
   { to: '/drills', label: 'Drills' }
];
