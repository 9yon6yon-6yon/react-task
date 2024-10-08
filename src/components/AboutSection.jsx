import VisionCard from "./VisionCard";
import aboutImage from "../assets/images/cameraMan.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="flex justify-center items-center w-full h-auto py-16 bg-gray-100">
      {/* Box div */}
      <div className="w-full max-w-[1200px] p-9 bg-white shadow-md border-2 border-gray-900">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Image div */}
          <div className="relative w-full md:w-[527px] h-[470px] flex-shrink-0">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[-10px] left-8 w-[450px] h-[70px] bg-white shadow-md flex rounded-md items-center justify-center text-center">
              <h2 className="text-2xl font-normal text-gray-900">
                23 YEARS of EXPERIENCE
              </h2>
            </div>
          </div>
          <div className="w-full md:w-[478px] h-auto flex-shrink-0 pt-0 pl-8">
            <h2 className="text-s font-normal text-gray-800 mb-2">ABOUT US</h2>
            <div className="text-center md:text-left ">
              <h1 className="text-6xl font-normal text-gray-900 mt-4">
                Filming Experience
              </h1>
              <h1 className="text-6xl font-normal text-gray-900 -mt-2">
                Just Got Better
              </h1>
              <p className="text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="mt-4 px-6 py-2 bg-background text-text border-2 border-gray-600">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <VisionCard
            title="OUR VISION"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <VisionCard
            title="OUR MISSION"
            description="Malesuada tempus et habitant nascetur porta nec. Fusce consequat risus per sollicitudin hendrerit suscipit convallis sociosqu.
"
          />
          <VisionCard
            title="OUR MOTTO"
            description="“We don’t make movies to make money, we make money to make more movies.”"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
