import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function HostRegistration() {
  const navigate = useNavigate();

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
    if (location.pathname === "/host/edit") {
      const storedData = localStorage.getItem("hostRegistrationData");
      if (storedData) {
        try {
          setFormData(JSON.parse(storedData));
        } catch (err) {
          console.error("Failed to parse hostRegistrationData:", err);
        }
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("hostRegistrationData", JSON.stringify(formData));
    alert("Registration successful!");
    navigate("/host/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-black py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
          Host Registration on <span className="text-blue-400">EasyStay</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Share your space with travelers and earn extra income. Complete the form below to get started.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Email Id</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your phone"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Address</label>
                <input
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter city name"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">State</label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your state"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">Zip Code</label>
                <input
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter 6 digit zip code"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 transition transform hover:scale-105 duration-300 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Submit Registration
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link to="/host-dashboard-login" className="text-blue-400 hover:text-blue-600">
            Already a host? Login here.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HostRegistration;
