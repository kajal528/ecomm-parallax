import women from '../assets/womencategory.jpg'
import men  from '../assets/mencategory.jpg'

const Category = () => {
  return (
    <section className=' my-10 grid grid-cols-2 h-[600px] overflow-hidden max-w-[1280px] mx-auto'>
        <div className=' h-[600px] w-full overflow-hidden relative group/women'>
            <img src={women} alt="" height={'600'} width={'700'} className=' h-[600px] group-hover/women:scale-110 transition-all group-hover/women:blur-sm cursor-pointer object-cover object-top' />
            <button className='opacity-0 group-hover/women:opacity-100 absolute w-max top-1/2 left-1/2 -translate-x-1/2 text-white text-lg'>Shop for women</button>
        </div>
        <div className=' h-[600px] w-full overflow-hidden relative group/men'>
            <img src={men} alt="" height={'600'} width={'700'} className='  h-[600px] group-hover/men:scale-110 transition-all  group-hover/men:blur-sm cursor-pointer object-cover object-top' />
            <button className='opacity-0 group-hover/men:opacity-100 absolute w-max top-1/2 left-1/2 -translate-x-1/2 text-white text-lg'>Shop for men</button>
        </div>

    </section>
  )
}

export default Category