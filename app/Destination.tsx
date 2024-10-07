import DestinationCard from "@/components/DestinationCard"
import { services } from "@/constants"

const Destination = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 p-20">
          
        {services.map((service) => (
            <DestinationCard key={service.label}
            {...service} />
            
        ))}
        
    </section>
  )
}

export default Destination
