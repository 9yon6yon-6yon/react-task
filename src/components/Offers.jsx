/* eslint-disable react/prop-types */
const Offers = ({ imageSrc, title, description }) => {

    
    return (
      <div className="w-[260px] h-[260px] box-border p-4 border-2 border-gray-900 bg-white shadow-md flex flex-col items-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-16 h-16 object-cover mb-4"
        />
        <h3 className="text-2xl text-text pt-4">{title}</h3>
        <p className="text-sm text-text text-center mt-2">{description}</p>
      </div>
    );
  };
export default Offers;
