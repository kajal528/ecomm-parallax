import casual from '../assets/occasions/casual.jpg'
import formal from '../assets/occasions/formal.jpg'
import sportswear from '../assets/occasions/sportswear.jpg'
import { ArrowRight } from '../Icons/Icons'

const Occasions = () => {
  return (
    <section className=' mt-10 '>
     <h1 className=' text-2xl font-semibold m-5'>Occasions</h1>
    <div className=' grid grid-cols-3  h-[500px] overflow-hidden'>
       <div className=' cursor-pointer relative h-[500px] group/casual'> <img src={casual} alt="" height={500} className=' object-cover group-hover/casual:blur-sm'/> 
       <div className=' absolute bottom-2 left-5 flex gap-2 items-center -translate-x-10 group-hover/casual:translate-x-5 transition-transform duration-200'> 
        <div className='  opacity-0 group-hover/casual:opacity-100 transition-opacity '>
         <ArrowRight
            size={6}
            color={"black"}
          />
          </div>
          <span className='text-white font-semibold text-lg '>Casual</span>
       </div>
       </div>
       <div className=' cursor-pointer relative h-[500px] group/formal'> <img src={formal} alt="" height={500} className=' object-cover group-hover/formal:blur-sm'/> 
       <div className=' absolute bottom-2 left-5 flex gap-2 items-center -translate-x-10 group-hover/formal:translate-x-5 transition-transform duration-200'> 
        <div className='  opacity-0 group-hover/formal:opacity-100 transition-opacity'>
         <ArrowRight
            size={6}
            color={"black"}
          />
          </div>
          <span className='text-white font-semibold text-lg '>Formal</span>
       </div>
       </div>
       <div className=' cursor-pointer relative h-[500px] group/sportswear'> <img src={sportswear} alt="" height={500} className=' object-cover group-hover/sportswear:blur-sm'/> 
       <div className=' absolute bottom-2 left-5 flex gap-2 items-center -translate-x-10 group-hover/sportswear:translate-x-5 transition-transform duration-200'> 
        <div className=' opacity-0 group-hover/sportswear:opacity-100 transition-opacity'>
         <ArrowRight
            size={6}
            color={"black"}
          />
          </div>
          <span className='text-white font-semibold text-lg '>Sportswear</span>
       </div>
       </div>
    </div>
    </section>
  )
}

export default Occasions