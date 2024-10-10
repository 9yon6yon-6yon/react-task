/* eslint-disable react/prop-types */
const UserCard = ({ user, setSelectedUser }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center space-y-4">
      <div className="w-32 h-32">
        <img
          className="w-full h-full object-cover rounded-full"
          src={
            user?.image ||
            "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
          }
          alt={user?.name || "Default Avatar"}
        />
      </div>

      {/* User Info Section */}
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-lg font-bold">{user?.name || "Anonymous"}</h2>
        <span className="inline-flex items-baseline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="text-gray-600">{user?.nationality}</p>
        </span>

        <p className="text-gray-600">{user?.address}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <p className="font-bold w-full text-center">Skills:</p>
        {user?.skills && user?.skills.length > 0 ? (
          user?.skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 rounded px-2 py-1 text-sm">
              {skill}
            </span>
          ))
        ) : (
          <p>No skills listed</p>
        )}
      </div>
      <button onClick={()=> setSelectedUser(user)} className="px-6 py-2 text-orange-500 border-2 border-orange-600 rounded hover:bg-orange-500 hover:text-white transition">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;
