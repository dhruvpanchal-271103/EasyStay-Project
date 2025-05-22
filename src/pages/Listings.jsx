import { useContext, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";

function Listings() {
  const { properties } = useContext(PropertyContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties?.filter((property) => {
    const title = property?.title?.toLowerCase() || "";
    const location = property?.location?.toLowerCase() || "";
    const lowerSearchTerm = searchTerm.toLowerCase();

    return (
      title.includes(lowerSearchTerm) || location.includes(lowerSearchTerm)
    );
  }) || [];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mx-12 p-8 mt-10">
      <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-300 whitespace-nowrap">
          Places to Stay
        </h1>

        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm w-48 md:w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Listings;
