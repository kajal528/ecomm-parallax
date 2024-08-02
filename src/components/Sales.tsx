import video from '../assets/video/4008366-uhd_2160_4096_25fps.mp4'
import black from '../assets/black.jpg'
import blackdress from '../assets/blackdress.jpg'
import bluemaxidress from '../assets/bluemaxidress.jpg'
import longsleevedress from '../assets/longsleevedress.jpg'
import offwhitedress from '../assets/offwhitedress.jpg'
import womendress from '../assets/womendress.jpg'


const Sales = () => {
  return (
    <section className=' max-w-[1280px] mx-auto'>
    <div className=' my-10 grid grid-cols-2 space-x-5'>
        <div>
            <img src={black} alt="" className=' h-[700px] w-[600px] object-cover'/>
        </div>
        <div >
        <h1 className=' text-3xl'>Summer Sales</h1>
        <p className=' my-5 max-w-72 text-sm'><span>Refresh your wardrobe with our summer dresses at up to 50% off!</span> <br/> Shop now for stylish and comfortable options. Limited time only!</p>
        <video src={video} autoPlay loop height={'200px'} className=' h-[400px] w-[500px] object-cover'></video>
        <p className=' my-5 max-w-72 text-sm'><span> From casual daywear to elegant evening looks, our high-quality fabrics and trendy designs will elevate your wardrobe.</span></p>

        <a href="#" className=' p-2 border-b-[1px] border-black'>Explore Our Collection</a>
        </div>
    </div>
    <div className=' my-20 grid grid-cols-2'>
        <div>
            <img src={womendress} alt="" width={'400px'} height={'500px'} className=' h-[500px] w-[400px] object-cover mx-auto'/>
        </div>
        <div className=' grid grid-cols-2 max-w-[420px] gap-4 mx-auto'>
            <div className=' relative group '>
               <div className=' opacity-100 group-hover:-translate-y-[55px] transition-transform'> <img src={offwhitedress} alt="" width={'200px'} height={'250px'} className=' h-[250px] w-[200px] object-cover mx-auto ' /></div>
                <div className=' absolute bottom-0 opacity-0 group-hover:opacity-100  '>
                    <h4 className=' truncate max-w-36'>Midi dress with short sleeves.</h4>
                    <div className=' text-[12px]'><span>154.20 EUR</span>&nbsp;<span>{`(-40%)`}</span>&nbsp;<span className=' line-through'>257.00 EUR</span></div>
                </div>
            </div>
            <div className=' relative group '>
               <div className=' opacity-100 group-hover:-translate-y-[55px] transition-transform'> <img src={longsleevedress} alt="" width={'200px'} height={'250px'} className=' h-[250px] w-[200px] object-cover mx-auto ' /></div>
                <div className=' absolute bottom-0 opacity-0 group-hover:opacity-100  '>
                    <h4 className=' truncate max-w-36'>Long Sleeve Beige Dress</h4>
                    <div className=' text-[12px]'><span>154.20 EUR</span>&nbsp;<span>{`(-40%)`}</span>&nbsp;<span className=' line-through'>257.00 EUR</span></div>
                </div>
            </div>
            <div className=' relative group '>
               <div className=' opacity-100 '> <img src={bluemaxidress} alt="" width={'200px'} height={'250px'} className=' h-[250px] w-[200px] object-cover mx-auto ' /></div>
                <div className=' absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[55px] transition-transform ease-out'>
                    <h4 className=' truncate max-w-36'>Maxi Dress</h4>
                    <div className=' text-[12px]'><span>154.20 EUR</span>&nbsp;<span>{`(-40%)`}</span>&nbsp;<span className=' line-through'>257.00 EUR</span></div>
                </div>
            </div>
            <div className=' relative group '>
               <div className=' opacity-100 '> <img src={blackdress} alt="" width={'200px'} height={'250px'} className=' h-[250px] w-[200px] object-cover mx-auto ' /></div>
                <div className=' absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[55px] transition-transform ease-out'>
                    <h4 className=' truncate max-w-36'>Long Black Summer Dress with Pink Flower Pattern</h4>
                    <div className=' text-[12px]'><span>154.20 EUR</span>&nbsp;<span>{`(-40%)`}</span>&nbsp;<span className=' line-through'>257.00 EUR</span></div>
                </div>
            </div>

        </div>

    </div>
    </section>
  )
}

export default Sales