import { useNavigate } from "react-router-dom";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      alert("Please register or login to continue.");
      navigate("/register");
    } else {
      navigate(`/property/${property.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    >
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-115"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.title}</h2>
        <p>{property.location}</p>
        <p className="text-blue-400">₹ {property.price}/night</p>
        <span className="mt-2 inline-block text-blue-500 hover:underline">
          View Details
        </span>
      </div>
    </div>
  );
}

export default PropertyCard;
