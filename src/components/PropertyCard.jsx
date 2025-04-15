import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Make the image clickable */}
      <Link to={`/property/${property.id}`}>
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-115" />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.title}</h2>
        <p>{property.location}</p>
        <p className="text-blue-400">₹ {property.price}/night</p>
        <Link to={`/property/${property.id}`} className="mt-2 inline-block text-blue-500 hover:underline">View Details</Link>
      </div>
    </div>
  );
}

export default PropertyCard;
