import ReviewCard from "@/components/ReviewCard"
import { reviews } from "@/constants"


 
const CustomerReview = () => {
  return (
    <section className="max-contain">
        <h3 className="font-palanquin text-center text-[#B6CFEB] text-4xl font-bold">
            What Our 
            <span className="text-[#2B5675]"> Customers</span> Say?
            
     </h3>
        <p className="text-slate-gray text-lg leading-7 m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            {reviews.map((review): any => (
                <ReviewCard 
                    key={review.customerName}
                    imgURL={review.imgURL}
                    customerName={review.customerName}
                    rating={review.rating}
                    feedback={review.feedback}
                />
                
            ))}

        </div>
    </section>

  )
}

export default CustomerReview;