import { useContext, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";

function Listings() {
  const { properties } = useContext(PropertyContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter properties based on search input (title or location)
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-12 p-8 mt-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-4xl font-bold text-blue-300">Places to Stay</h1>
        <input
          type="text"
          placeholder="Search places"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Listings;
