import Section3 from '@/component/Section3/section3';
import Hero from '../component/Hero/Hero'
import Section2 from '../component/Section2/Section2';
import Review from '@/component/Review/Review';
import Banner from '@/component/Banners/Banner';
import Progress from '@/component/ProgressBar/Progress';
import BusinessPro from '@/component/Section3/BusinessPro';
import PromotionBanner from '@/component/Banners/PromotionBanner';
import Hero2 from '@/component/Hero/Hero2';
import Hero3 from '@/component/Hero/Hero3';


export default function Home() {
  return (
    <div className=''>
      <Hero3 />
      {/* <Hero2 /> */}
      {/* <Hero /> */}
      <Section3 />
      <Section2 />
      <BusinessPro />
      <PromotionBanner />
      <Review />
      <Banner />
      {/* <Progress /> */}
    </div>
  );
}
