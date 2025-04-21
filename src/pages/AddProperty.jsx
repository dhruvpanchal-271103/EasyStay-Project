import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa"; // Using react-icons for a trash icon

function AddProperty() {
  const navigate = useNavigate();

  const [propertyData, setPropertyData] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    imageUrls: [],
    propertyType: "",
  });

  const [imagePreviews, setImagePreviews] = useState([]); // Array to store image previews

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
  
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
  
        setImagePreviews((prev) => [...prev, base64]);
        setPropertyData((prev) => ({
          ...prev,
          imageUrls: [...prev.imageUrls, base64],
        }));
      };
      reader.readAsDataURL(file);
    });
  };
  
  const handleRemoveImage = (index) => {
    const newPreviews = imagePreviews.filter((_, i) => i !== index); // Remove the preview at the given index
    const newImageUrls = propertyData.imageUrls.filter((_, i) => i !== index); // Remove the URL at the same index
    setImagePreviews(newPreviews);
    setPropertyData((prev) => ({
      ...prev,
      imageUrls: newImageUrls,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Data Submitted:", propertyData);
    const existingProperties = JSON.parse(localStorage.getItem("properties")) || [];
    existingProperties.push(propertyData);
    localStorage.setItem("properties", JSON.stringify(existingProperties));
    // alert("Your property has been added!");
    navigate("/host/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-center md:text-left">Add Your Property for Rent</h2>
          <button
            onClick={() => navigate("/host/dashboard")}
            className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 text-white font-medium py-2 px-4 rounded-md"
          >
            Go to Dashboard
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Property Type</label>
            <select
              name="propertyType"
              value={propertyData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="flat">Flat</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={propertyData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="About your property"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={propertyData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the location of the property"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Price per Night</label>
            <input
              type="number"
              name="price"
              value={propertyData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="In Rupees"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload Property Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md cursor-pointer"
            />

            {imagePreviews.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-300 mb-2">Image Previews</h3>
                <div className="flex overflow-x-auto space-x-4 pb-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="rounded-md w-32 h-32 object-cover transition duration-300 transform hover:scale-105"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full text-sm transition-opacity duration-300"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 py-3 px-6 rounded-md font-semibold"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;
