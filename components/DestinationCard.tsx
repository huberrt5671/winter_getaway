const DestinationCard = ({ imgURL, label, subtext }: any) => {
    return (
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
          <div className="w-11 h-11 flex justify-center items-center bg-[#2B5675] rounded-full">
              <img src={imgURL.src} alt={label} width={24} height={24} />
          </div>
          <h3 className="mt-5 font-palanquin text-3xl text-[#B6CFEB] leading-normal font-bold">{label}</h3>
          <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
  
      </div>
    )
  }
  
  export default DestinationCard