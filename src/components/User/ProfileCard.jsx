const ProfileCard = ({
  user,
  newUser,
  message,
  setEditing,
  editing,
  handleEdit,
  handleInputChange,
  deleteUser,
}) => {
  if (!user) return null;

  return (
    <div className="container mx-auto bg-slate-300 p-10 rounded-xl">
      <div className="flex flex-wrap">
        <div className="w-full  px-2 lg:w-1/3 md:w-2/5">
          <div className="card-user bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="content p-4">
              <div className="author text-center">
                <div className="absolute border-white w-32 h-32">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={
                      user?.image ||
                      "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                    alt={user?.name || "Default Avatar"}
                  />
                </div>
                <h4 className="title text-lg mt-4">
                  {user?.name || "Anonymous"}
                  <br />
                  <a href="#" className="text-gray-600 text-sm ml-4">
                    <small>{user?._id}</small>
                  </a>
                </h4>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <p className="font-bold w-full text-center">Skills:</p>
              {user?.skills && user?.skills.length > 0 ? (
                user?.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 rounded px-2 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p>No skills listed</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 md:w-3/5">
          <div className="card bg-white shadow-lg rounded-lg">
            <div className="header px-4 py-2">
              <h4 className="title text-lg">Edit Profile</h4>
            </div>
            <div className="content p-4">
              {message && <p className="text-green-500 mb-4">{message}</p>}

              <form>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      placeholder="Email"
                      value={user?.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      user name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      value={user?.name || "Anonymous"}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/3  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nationality
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3"
                      value={user?.nationality}
                      onChange={handleInputChange}
                      disabled
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      value={user?.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      value={user?.website}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Gender
                    </label>
                    <input
                      type="text"
                      name="gender"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      value={user?.gender}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Educational Qualification
                </label>
                <hr />
                <div className="flex flex-wrap -mx-3 mb-6 py-2">
                  <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Degree
                    </label>
                    <input
                      type="text"
                      name="edicationalQualifications.degree"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      value={user?.educationalQualifications?.degree}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      University
                    </label>
                    <input
                      type="text"
                      name="edicationalQualifications.university"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      value={user?.educationalQualifications?.university}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Session
                    </label>
                    <input
                      type="text"
                      name="edicationalQualifications.session"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      value={user?.educationalQualifications?.session}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      CGPA
                    </label>
                    <input
                      type="text"
                      name="edicationalQualifications.cgpa"
                      className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                      value={user?.educationalQualifications?.cgpa}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      if (editing) {
                        handleEdit(newUser);
                      } else {
                        setEditing(true); 
                      }
                    }}
                    type="button"
                    className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                  >
                    {editing ? "Update Profile" : "Edit"}
                  </button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    type="submit"
                    className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  m-2 rounded"
                  >
                    Delete Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
