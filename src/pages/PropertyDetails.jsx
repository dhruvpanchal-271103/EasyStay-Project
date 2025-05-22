import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import BookingForm from "../components/BookingForm";

function PropertyDetails() {
  const { id } = useParams();
  const { properties } = useContext(PropertyContext);
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <div className="p-8 text-center text-lg font-medium">Property not found</div>;

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="w-full h-96 md:h-full">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover rounded-xl shadow-md "
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
            <p className="text-gray-500 text-lg">{property.location}</p>
            <p className="text-blue-500 text-2xl mt-4 font-semibold">
              ₹ {property.price} <span className="text-base text-gray-400">/night</span>
            </p>
            <p className="mt-6 text-green-400 leading-relaxed">{property.description}</p>
            <BookingForm price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
