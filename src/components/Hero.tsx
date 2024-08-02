import HeroImage from '../assets/hero.jpg';
import { Constant } from '../constants';

const Hero = () => {
  return (
    <section className=' relative max-w-[1280px] mx-auto'>
        <img src={HeroImage} alt="hero" height={'100vh'} width={'100%'} className=' object-cover h-screen w-full'/>
         <p className='  px-5 absolute top-1/2 left-1/2  text-white font-bold text-[36px] -translate-y-1/2'>
         <div className=' animate-textreveal overflow-hidden -translate-y-1/2 '>{Constant.heroText1}</div>
         <div className=' animate-textreveal overflow-hidden -translate-y-1/2'>{Constant.heroText2}</div>  
         <div className=' animate-textreveal  overflow-hidden -translate-y-1/2 py-5 underline cursor-pointer'>{Constant.heroText3}</div>
         </p>
    </section>
  )
}

export default Hero