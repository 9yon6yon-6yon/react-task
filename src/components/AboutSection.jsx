
const AboutSection = () => {
  return (
    <section className="w-full max-w-[1200px] h-[814px] bg-background flex-shrink-0 mx-auto mt-[120px] mb-[954px] px-[120px] py-[120px] md:py-[60px] md:px-[60px]">
      
      {/* ABOUT US Title */}
      <h1 className="text-4xl font-bold text-text mb-4">
        ABOUT US
      </h1>

      {/* Filming Experience */}
      <h2 className="text-2xl md:text-3xl text-secondary mb-2">
        Filming Experience Just Got Better
      </h2>

      {/* Button */}
      <button className="w-[136px] h-[51px] bg-primary text-text rounded-lg mt-2 mb-6">
        Discover More
      </button>

      {/* 23 Years of Experience */}
      <div className="text-lg font-bold text-text mb-4">
        23 YEARS of EXPERIENCE
      </div>

      {/* Vision, Mission, Motto */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-text">
          OUR VISION
        </h3>
        <h3 className="text-xl font-semibold text-text">
          OUR MISSION
        </h3>
        <h3 className="text-xl font-semibold text-text">
          OUR MOTTO
        </h3>
      </div>

      {/* Paragraph Text */}
      <p className="text-secondary mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        Malesuada tempus et habitant nascetur porta nec. Fusce consequat risus per sollicitudin hendrerit suscipit convallis sociosqu.
      </p>

      {/* Quote */}
      <blockquote className="mt-6 italic text-text">
        “We don’t make movies to make money, we make money to make more movies.”
      </blockquote>
    </section>
  );
};

export default AboutSection;
