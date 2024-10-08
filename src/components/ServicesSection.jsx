import Offers from "./Offers";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";


const ServicesSection = () => {
    // eslint-disable-next-line no-unused-vars
    const offers = [
        { image: image1 ,title: "Movies Director", description: "Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget." },
        { image: image2 ,title: "3D Movies", description: "Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget." },
        { image: image3 ,title: "Film Maker", description: "Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget." },
        { image: image4 ,title: "Studio Production", description: "Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget." },
        { image: image5 ,title: "Drama Movies", description: "Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget." },
        { image: image6 ,title: "Rolling Production", description: "Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget." },
        { image: image7 ,title: "Movie Production", description: "Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget." },
        { image: image8 ,title: "Actor Action", description: "Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget." },
      ];
  return (
    <section id="services" className="w-full max-w-[1199px] h-auto bg-background  mx-auto mt-[2691px]">
      <div className="text-center mb-8 pb-12 ">
        <h2 className="text-l font-bold text-text">Services</h2>
        <h3 className="text-5xl text-text">What We Offer</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-32">
        {offers.map((offer, index) => (
          <Offers
            key={index}
            imageSrc={offer.image}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
