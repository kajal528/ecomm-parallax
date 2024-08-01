import HeroImage from '../assets/hero.jpg';
import { Constant } from '../constants';

const Hero = () => {
  return (
    <div className=' relative'>
        <img src={HeroImage} alt="hero" height={'100vh'} width={'100%'} className=' object-cover h-screen w-full'/>
        <p className=' absolute right-2 top-1/2  text-white font-bold text-[44px] -translate-y-1/2'><div className=' animate-textreveal overflow-hidden -translate-y-1/2 '>{Constant.heroText1}</div>
         <div className=' animate-textreveal overflow-hidden -translate-y-1/2'>{Constant.heroText2}</div>  
         <div className='animate-textreveal  overflow-hidden -translate-y-1/2 '>{Constant.heroText3}</div>
         </p>
    </div>
  )
}

export default Hero