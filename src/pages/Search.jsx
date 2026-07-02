import React, { useContext, useState } from "react";
import { productContext } from "../stores/ProductContex";
import { useNavigate } from "react-router-dom";

const Search = () => {

  const navigate = useNavigate();

  const { products } = useContext(productContext);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">

      <div className="search-header">
    <button className="back-btn" onClick={() => navigate(-1)}>
        <i className="ri-arrow-left-line"></i>
        Back
    </button>

    <h1>Search Products</h1>
</div>

      <div className="search-top">
        {/* <h1>Search Products</h1> */}

        <input
          type="text"
          placeholder="Search shoes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="search-results">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((item) => (

            <div className="search-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>${item.price}</p>

            </div>

          ))

        ) : (

          <h2>No products found.</h2>

        )}

      </div>

    </div>
  );
};

export default Search;