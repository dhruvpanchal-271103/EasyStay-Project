import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function HostDashboard() {
  const navigate = useNavigate();
  const properties = JSON.parse(localStorage.getItem("properties")) || [];

  const handleDelete = (indexToDelete) => {
    const updatedProperties = properties.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
    window.location.reload(); 
  };

  const handleEdit = (indexToEdit) => {
    navigate(`/host/edit-property/${indexToEdit}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleShowImages = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">Host Dashboard</h1>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Return to Home
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-white mb-3">Add Property</h2>
            <p className="text-gray-400 mb-4">List your property to make it available for guests.</p>
            <Link to="/host/add-property" className="text-blue-500 font-semibold hover:underline">
              Add Property →
            </Link>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-white mb-3">Account Settings</h2>
            <p className="text-gray-400 mb-4">Update your personal or host profile details.</p>
            <Link to="/host/settings" className="text-blue-500 font-semibold hover:underline">
              Go to Settings →
            </Link>
          </div>
        </div>

        {properties.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-white mb-6">Your Properties</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
                >
                  <div className="p-6">
                    {property.imageUrls?.length === 1 ? (
                      <img
                        src={property.imageUrls[0]}
                        alt={`Property ${index + 1}`}
                        className="w-full h-48 object-cover mb-4 rounded-md"
                      />
                    ) : (
                      <button
                        onClick={() => handleShowImages(property.imageUrls)}
                        className="text-blue-500 font-semibold hover:underline mb-4"
                      >
                        Show Property Images
                      </button>
                    )}

                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {property.propertyType || "Untitled Property"}
                    </h3>
                    <p className="text-gray-400 mb-2">{property.location}</p>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                      {property.description}
                    </p>
                    <div className="text-blue-400 font-semibold text-lg mb-4">
                      ₹ {property.price} / night
                    </div>
                    <div className="flex justify-between gap-3">
                      <button
                        onClick={() => handleEdit(index)}
                        className="flex-1 bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 text-sm"
              >
                ✕
              </button>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {selectedImages.map((imageUrl, idx) => (
                  <img
                    key={idx}
                    src={imageUrl}
                    alt={`Property Image ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HostDashboard;
