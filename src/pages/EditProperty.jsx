import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function EditProperty() {
  const navigate = useNavigate();
  const { index } = useParams();
  const [propertyData, setPropertyData] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    imageUrls: [],
    propertyType: "",
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    const properties = JSON.parse(localStorage.getItem("properties")) || [];
    const selectedProperty = properties[parseInt(index)];
    if (selectedProperty) {
      setPropertyData(selectedProperty);
      setImagePreviews(selectedProperty.imageUrls); 
    } else {
      alert("Property not found");
      navigate("/host/dashboard");
    }
  }, [index, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file)); 
    setImagePreviews((prev) => [...prev, ...newPreviews]);

    const newImageUrls = files.map((file) => URL.createObjectURL(file)); 
    setPropertyData((prev) => ({
      ...prev,
      imageUrls: [...prev.imageUrls, ...newImageUrls],
    }));
  };

  const handleRemoveImage = (index) => {
    const newPreviews = imagePreviews.filter((_, i) => i !== index); 
    const newImageUrls = propertyData.imageUrls.filter((_, i) => i !== index); 
    setImagePreviews(newPreviews);
    setPropertyData((prev) => ({
      ...prev,
      imageUrls: newImageUrls,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const properties = JSON.parse(localStorage.getItem("properties")) || [];
    properties[parseInt(index)] = propertyData;
    localStorage.setItem("properties", JSON.stringify(properties));
    alert("Property updated successfully!");
    navigate("/host/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Edit Property</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Property Type</label>
            <select
              name="propertyType"
              value={propertyData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="flat">Flat</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={propertyData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              rows="3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={propertyData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price per Night</label>
            <input
              type="number"
              name="price"
              value={propertyData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="rounded-md w-full h-32 object-cover transition duration-300 transform group-hover:scale-105"
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

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProperty;
