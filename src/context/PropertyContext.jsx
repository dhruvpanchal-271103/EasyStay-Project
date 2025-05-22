import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Beachside Villa",
      location: "Goa",
      price: 2500,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      description: "Relaxing beach villa with ocean views."
    },
    {
      id: 2,
      title: "Mountain Cabin",
      location: "Manali",
      price: 1800,
      image: "https://i.lmpm.com/img/lmpm-company-store-prod/64760d663a928/properties/02f9810b-827d-4b72-9abc-e4e269727dac/mountainsideretreat(74).jpg?w=2048&h=1152&q=60",
      description: "Cozy cabin in the heart of the mountains."
    },
    {
      id: 3,
      title: "Luxury Apartment",
      location: "Mumbai",
      price: 3200,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Modern luxury apartment in a central location."
    },
    {
      id: 4,
      title: "Countryside House",
      location: "Nashik",
      price: 1500,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      description: "Charming home surrounded by nature."
    },
    {
      id: 5,
      title: "Eco Lodge",
      location: "Kerala",
      price: 1900,
      image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Sustainable lodge amidst lush greenery."
    },
    {
      id: 6,
      title: "Lakeview Cottage",
      location: "Udaipur",
      price: 2700,
      image: "https://images.unsplash.com/photo-1725656676543-41aa2f614373?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Beautiful cottage with a serene lake view."
    },
    {
      id: 7,
      title: "Island Bungalow",
      location: "Andaman",
      price: 3500,
      image: "https://plus.unsplash.com/premium_photo-1687960116957-ab813e1e66e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D",
      description: "Private bungalow surrounded by crystal waters."
    },
    {
      id: 8,
      title: "Backwater Houseboat",
      location: "Alleppey",
      price: 3300,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      description: "Drift through the backwaters in comfort."
    },
    {
      id: 9,
      title: "Desert Retreat",
      location: "Jaisalmer",
      price: 2100,
      image: "https://images.unsplash.com/photo-1711721013728-fd885f061b2a?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Authentic desert stay with golden sand dunes."
    },
    {
      id: 10,
      title: "Hilltop Villa",
      location: "Ooty",
      price: 2800,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Panoramic hill views from a luxurious villa."
    },
    {
      id: 11,
      title: "Urban Studio",
      location: "Bangalore",
      price: 2200,
      image: "https://images.unsplash.com/photo-1644437906121-88bc7ce442a0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Trendy studio perfect for city explorers."
    },
    {
      id: 12,
      title: "Riverfront Cabin",
      location: "Rishikesh",
      price: 1900,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      description: "Peaceful cabin overlooking the Ganges."
    },
    {
      id: 13,
      title: "Colonial Mansion",
      location: "Pondicherry",
      price: 3000,
      image: "https://images.unsplash.com/photo-1632436751384-f098e295d362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sb25pYWwlMjBNYW5zaW9ufGVufDB8fDB8fHww",
      description: "Elegant colonial-style mansion near the beach."
    },
    {
      id: 14,
      title: "Treehouse Escape",
      location: "Wayanad",
      price: 2600,
      image: "https://media.istockphoto.com/id/1322708821/photo/a-tree-house-in-jilimili-resort-made-up-of-wooden-elements.webp?a=1&b=1&s=612x612&w=0&k=20&c=tzml3qRlBXslTyKeHgGRk5tZ9p7Qq614Em2tKaN2qxQ=",
      description: "Stay among treetops in a unique eco-stay."
    },
    {
      id: 15,
      title: "Snow Chalet",
      location: "Shimla",
      price: 2900,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      description: "A cozy chalet surrounded by snow-covered peaks."
    },
    {
      id: 16,
      title: "Luxury Farmstay",
      location: "Punjab",
      price: 2000,
      image: "https://plus.unsplash.com/premium_photo-1663099373746-703d6504d265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwZmFybXN0YXl8ZW58MHx8MHx8fDA%3D",
      description: "Relaxing stay in the heart of lush farmland."
    },
    {
      id: 17,
      title: "Jungle Hideout",
      location: "Jim Corbett",
      price: 2500,
      image: "https://images.unsplash.com/photo-1674306147096-d4c052b9816d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEp1bmdsZSUyMEhpZGVvdXQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Adventurous hideaway near the jungle."
    },
    {
      id: 18,
      title: "Seaside Studio",
      location: "Vizag",
      price: 2300,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      description: "Chic studio with direct beach access."
    },
    {
      id: 19,
      title: "Mountain Lodge",
      location: "Leh-Ladakh",
      price: 3200,
      image: "https://images.unsplash.com/photo-1584992018073-62514dea023f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1vdW50YWluJTIwTG9kZ2V8ZW58MHx8MHx8fDA%3D",
      description: "A serene lodge with breathtaking mountain views."
    },
    {
      id: 20,
      title: "Vineyard Cottage",
      location: "Napa Valley",
      price: 3500,
      image: "https://images.unsplash.com/photo-1730620021644-e7f31dd08c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFZpbmV5YXJkJTIwQ290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Cozy cottage amidst rolling vineyards."
    },
    {
      id: 21,
      title: "Island Retreat",
      location: "Maldives",
      price: 5000,
      image: "https://images.unsplash.com/photo-1594068217043-26028fb5b0c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SXNsYW5kJTIwUmV0cmVhdCUyMGhvdXNlfGVufDB8fDB8fHww",
      description: "Private island with white sandy beaches."
    },
    {
      id: 22,
      title: "Lakeside Chalet",
      location: "Kashmir",
      price: 2700,
      image: "https://images.unsplash.com/photo-1573083541369-e0beaacc4730?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFrZXNpZGUlMjBDaGFsZXQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Tranquil stay by the picturesque Dal Lake."
    },
    {
      id: 23,
      title: "Hilltop Cabin",
      location: "Darjeeling",
      price: 2500,
      image: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fEhpbGx0b3AlMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Cozy cabin with panoramic views of the Himalayas."
    },
    {
      id: 24,
      title: "Seafront Mansion",
      location: "Goa",
      price: 4200,
      image: "https://images.unsplash.com/photo-1719299224546-be36a6c71832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2VhZnJvbnQlMjBNYW5zaW9ufGVufDB8fDB8fHww",
      description: "Luxury mansion with stunning ocean views."
    },
    {
      id: 25,
      title: "Sunset Cottage",
      location: "Kanyakumari",
      price: 2000,
      image: "https://images.unsplash.com/photo-1693385476613-7b34a9c0c855?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFN1bnNldCUyMENvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
      description: "Charming cottage with breathtaking sunset views."
    },
    {
      id: 26,
      title: "Riverside Retreat",
      location: "Rishikesh",
      price: 2200,
      image: "https://plus.unsplash.com/premium_photo-1733760125038-06564d0a4568?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cml2ZXJzaWRlJTIwcmV0cmVhdCUyMGhvdXNlfGVufDB8fDB8fHww",
      description: "Serene retreat by the holy Ganges river."
    },
    {
      id: 27,
      title: "Luxury Beach House",
      location: "Andaman Islands",
      price: 4500,
      image: "https://images.unsplash.com/photo-1699086044671-36c006a319e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      description: "Exclusive beach house with crystal clear waters."
    },
    {
      id: 28,
      title: "Countryside Retreat",
      location: "Coorg",
      price: 2300,
      image: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdW50cnklMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Peaceful retreat surrounded by coffee plantations."
    },
    {
      id: 29,
      title: "Mountain View Villa",
      location: "Shimla",
      price: 3500,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww",
      description: "Luxurious villa with breathtaking views of the mountains."
    },
    {
      id: 30,
      title: "Urban Loft",
      location: "Mumbai",
      price: 5000,
      image: "https://plus.unsplash.com/premium_photo-1661963581928-86280bc2afdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJiYW4lMjBsb2Z0fGVufDB8fDB8fHww",
      description: "Modern loft in the heart of the city with a sleek design."
    }

  ]);


  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};
