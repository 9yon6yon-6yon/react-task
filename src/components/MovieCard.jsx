/* eslint-disable react/prop-types */
const MovieCard = ({ movieImage }) => {
    return (
      <div className="w-[260px] h-[350px] flex-shrink-0 p-3 bg-none border-2 border-white-900">
        <img
          src={movieImage}
          alt="Movie Poster"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };
  
  export default MovieCard;
  