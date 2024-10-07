import Button from "@/components/Button"
import  ice  from "@/assets/images/ice1.jpg"

const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-w-[1440px] m-0 z-10 transition-all">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 sm:px-16 gap-4">
            <p className="text-xl font-montserrat text-[#B6CFEB]">
              Welcome to Ice
            </p>
            <h1 className="mt-10 font-palanquin text-8xl text-[#B6CFEB] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
              Our Classic 
              <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 text-[#2B5675]'>
              Winter 
            </span>
            <span className='text-[#2B5675] inline-block mt-3'>Getaway</span> Spot
            </h1>
            <p className="text-slate-gray text-lg font-montserrat leading-7">
            Discover where the magic of the season awaits! Whether you crave cozy retreats, thrilling snowy adventures, or charming holiday experiences
            </p>
            <Button label="Shop now" />
          
           
          
        </div>
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center mb-8'>
          <img
            src={ice.src}
            alt='ice colletion'
            width={510}
            height={610}
            className='object-contain relative z-10 rounded-xl shadow-xl'
            />
        </div>
    </section>

  )
}

export default Hero
