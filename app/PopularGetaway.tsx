import PopularGetawayCard from "@/components/PopularGetawayCard"
import { products } from "@/constants"

const PopularGetaway = () => {
  return (
    <section id="products" className="max-container max-w-[1440px] max-sm:mt-12 p-20">
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold text-[#B6CFEB]">Our 
            <span className="text-[#2B5675]"> Popular</span> Products</h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value</p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((product) => (
                <PopularGetawayCard key={product.name} {...product} />
            ))} 

        </div>
    </section>
  )
}

export default PopularGetaway