import cover from "../assets/images/hero.jpeg";

const HeroSection = () => {
  return (
    <section
      className="w-full h-[694px] bg-cover bg-no-repeat relative md:mx-auto mt-[-20px]"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-start text-left md:p-32 ">
        <div className="w-[557px] h-[208px]">
        <p className="text-background text-base">Movie production studio</p>
          <h1 className="text-5xl md:text-6xl text-background">
            Films made to
          </h1>
          <h1 className="text-5xl md:text-6xl text-primary">Perfection</h1>
          <p className="text-background text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="mt-8">
          <button className="w-[132px] h-[52px] bg-transparent border text-background text-lg">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
