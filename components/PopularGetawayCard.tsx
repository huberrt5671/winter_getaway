import { star } from '@/assets/icons'

const PopularProductCard = ({ imgURL, name, status }: any) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img
            src={imgURL.src} alt={name} className="w-[200px] h-[200px] rounded-xl shadow-lg"
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star.src} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slay-gray">{4.5}</p>
        </div>
            <h3 className="mt-2 text-2xl leading-normal text-[#B6CFEB] font-semibold font-palanquin">{name}</h3>
                <p className="mt-2 font-semibold text-[#2B5675] font-montserrat text-coral-red text-2xl leading-normal">{status}</p>
    </div>
  )
}

export default PopularProductCard