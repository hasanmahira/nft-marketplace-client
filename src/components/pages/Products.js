import { useState, useEffect } from "react";
import ProductItem from "components/organisms/ProductItem";
import { Client, ProductCategoryQuery } from "../utils";

function Products({ category }) {
  const [products, setProducts] = useState([]);

  Client.query({
    query: ProductCategoryQuery,
    variables: { category: category },
  }).then((result) => {
    result ? setProducts(result.data.getNftFilesByCategory) : setProducts([]);
  });

  return (
    <div>
      <div className="overflow-hidden rounded-lg grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0.1">
        {products &&
          products.map((product) => <ProductItem product={product} />)}
      </div>
    </div>
  );
}

export default Products;
