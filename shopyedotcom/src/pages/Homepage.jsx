import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const Homepage = () => {
     const product = useSelector((state) => state.products)
      console.log(product);
  return (
    <div>
      {" "}
      <div>
        <div className="grid gap-5 max-w-screen-xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product.map(({ id, title, price, rating, image }) => (
            <Product
              key={id}
              productId={id}
              title={title}
              price={price}
              rating={rating.rate}
              imageUrl={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
