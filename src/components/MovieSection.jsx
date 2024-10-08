import MovieCard from "./MovieCard";
import mv1 from "../assets/images/mv1.jpeg";
import mv2 from "../assets/images/mv2.jpeg";
import mv3 from "../assets/images/mv3.jpeg";
import mv4 from "../assets/images/mv4.jpeg";
const MovieSection = () => {
  const movieImages = [{ mv: mv1 }, { mv: mv2 }, { mv: mv3 }, { mv: mv4 }];
  return (
    <section
      id="movies"
      className="w-full h-auto bg-secondary"
    >
      <div className="mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between p-10">
          {/* Left Side */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-lg font-medium text-background">Our Movies</p>
            <h1 className="text-8xl md:text-6xl font-normal text-background">
              Movie Collection
            </h1>
          </div>
          <div>
            <button className="bg-none text-background border-2 border-white px-6 py-2  hover:bg-primary">
              See More Movies
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 xm:gap-2">
            {movieImages.slice(0, 4).map((image, index) => (
              <MovieCard key={index} movieImage={image.mv} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
