/* eslint-disable react/prop-types */
const VisionCard = ({ title, description }) => {
  return (
    <div>
      {/* top bar */}
      <div className="w-full h-1 bg-text mb-4"></div>
      {/* contents */}
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 font-normal text-gray-600">{description}</p>
    </div>
  );
};
export default VisionCard;
