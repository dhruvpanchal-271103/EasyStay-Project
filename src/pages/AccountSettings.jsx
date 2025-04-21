import React, { useState, useEffect } from "react";
import { useHost } from "../context/HostContext";

function AccountSettings() {
  const { host, setHost } = useHost();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("hostRegistrationData");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        // Remove description if present
        delete parsed.description;
        setFormData(parsed);
        setHost(parsed);
      } catch (error) {
        console.error("Failed to parse hostRegistrationData:", error);
      }
    }
  }, [setHost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHost(formData);
    localStorage.setItem("hostRegistrationData", JSON.stringify(formData));
    alert("Account updated!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold mb-6">Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "firstName", label: "First Name" },
            { name: "lastName", label: "Last Name" },
            { name: "email", label: "Email" },
            { name: "phone", label: "Phone" },
            { name: "streetAddress", label: "Street Address" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "zipCode", label: "Zip Code" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-md font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountSettings;
