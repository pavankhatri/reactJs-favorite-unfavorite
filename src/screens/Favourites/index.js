import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsSlice from "../../redux/productsSlice";
import "./favourites.css";

const Product = ({ product, isFavorite, onFavoriteClick }) => {
  return (
    <div className="grid-item">
      <img src={product.image} alt={product.name} />
      <div className="name">{product.name}</div>
      <div className="price">{product.price}</div>
      <button
        className="favorite-button"
        onClick={() => onFavoriteClick(product.id)}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

const Favourite = () => {
  const productsData = useSelector((state) => state.products);
  const handleNavigateToFavorites = () => {
    navigate("/");
  };

  const [products, setProducts] = React.useState(productsData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  const handleToggleFavorite = (productId) => {
    dispatch(productsSlice.actions.toggleFavorite({ productId }));
  };

  return (
    <>
      <div className="grid-Favorites">
        <h1>Favorites</h1>
        <button onClick={handleNavigateToFavorites}>Go to Home Page</button>
      </div>
      <div className="grid-view">
        {products?.map((product) =>
          product.isFavorite ? (
            <Product
              key={product.id}
              product={product}
              isFavorite={product.isFavorite}
              onFavoriteClick={handleToggleFavorite}
            />
          ) : null
        )}
      </div>
    </>
  );
};

export default Favourite;
