import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("recommended");
  const [filterVisible, setFilterVisible] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "newer") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortOption === "price-high-to-low") {
      return b.price - a.price;
    } else if (sortOption === "price-low-to-high") {
      return a.price - b.price;
    } else if (sortOption === "popular") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <div className="products-container">
      <div>
        <h1 className="products-heading">Products List</h1>
      </div>

      <div>
        <button
          className="filter-toggle-button"
          onClick={() => setFilterVisible(!filterVisible)}
        >
          {filterVisible ? "Hide Filters" : "Show Filters"}
        </button>

        {filterVisible && (
          <div className="filters-container">
            <select
              className="filter-dropdown"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">All Categories</option>
              <option value="men's clothing">Men</option>
              <option value="women">Women</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelry</option>
            </select>
          </div>
        )}
      </div>
      <div>

      
      <select
        className="sort-dropdown"
        onChange={(e) => setSortOption(e.target.value)}
        value={sortOption}
      >
        <option value="recommended">Recommended</option>
        <option value="newer">Newer First</option>
        <option value="price-high-to-low">Price: High to Low</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="popular">Popular (Highest Rated)</option>
      </select>
      </div>
      {loading ? (
        <p className="loading-message">Loading products...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="products-list">
          {sortedProducts.map((product) => (
            <li key={product.id} className="product-item">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2 className="product-name">{product.title}</h2>
              <p className="product-price">Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsList;
