import Section3 from '@/component/Section3/section3';
import Hero from '../component/Hero/Hero'
import Section2 from '../component/Section2/Section2';
import Review from '@/component/Review/Review';
import Banner from '@/component/Banner/Banner';


export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Section2 />
      <Section3 />
      <Review />
      <Banner />
    </div>
  );
}
