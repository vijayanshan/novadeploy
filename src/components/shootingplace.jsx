import React, { useState, useEffect } from "react";

const ShootingPlaces = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [places, setPlaces] = useState([]);

  // Predefined dataset (names + details only)
  const allPlaces = [
    { name: "Goa Beaches", state: "Goa", region: "West India", description: "Famous for beach scenes and vibrant nightlife." },
    { name: "Kashmir Valley", state: "Jammu & Kashmir", region: "North India", description: "Snowy mountains, lakes, and heavenly landscapes." },
    { name: "Ooty Hills", state: "Tamil Nadu", region: "South India", description: "Hill station with tea estates and greenery." },
    { name: "Jaipur Forts", state: "Rajasthan", region: "West India", description: "Royal palaces and desert charm." },
    { name: "Varanasi Ghats", state: "Uttar Pradesh", region: "North India", description: "Spiritual ghats along the Ganges River." },
    { name: "Kerala Backwaters", state: "Kerala", region: "South India", description: "Lush greenery, houseboats and lagoons." },
  ];

  // Fetch images dynamically from Unsplash API
  useEffect(() => {
    const fetchImages = async () => {
      const updatedPlaces = await Promise.all(
        allPlaces.map(async (place) => {
          try {
            const res = await fetch(
              `https://source.unsplash.com/600x400/?${encodeURIComponent(place.name)}`
            );
            return { ...place, image: res.url };
          } catch (error) {
            return { ...place, image: "https://via.placeholder.com/600x400?text=No+Image" };
          }
        })
      );
      setPlaces(updatedPlaces);
    };
    fetchImages();
  }, []);

  // Filter by search and region
  const filteredPlaces = places.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || p.region === region)
  );

  return (
    <div style={{ backgroundColor: "#111", minHeight: "100vh", padding: "20px", color: "white" }}>
      <h1 style={{ color: "limegreen", textAlign: "center" }}>🎬 Explore Shooting Places in India</h1>

      {/* Search + Filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "none", width: "250px" }}
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "none" }}
        >
          <option value="">All Regions</option>
          <option value="North India">North India</option>
          <option value="South India">South India</option>
          <option value="East India">East India</option>
          <option value="West India">West India</option>
        </select>
      </div>

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {filteredPlaces.map((place, i) => (
          <div key={i} style={{ background: "#222", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.6)" }}>
            <img src={place.image} alt={place.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h2 style={{ color: "gold" }}>{place.name}</h2>
              <p style={{ fontSize: "14px", color: "lightgray" }}>{place.state} · {place.region}</p>
              <p style={{ fontSize: "14px", color: "#ddd" }}>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShootingPlaces;
