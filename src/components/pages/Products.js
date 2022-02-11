import { useState, useEffect } from 'react';
import ProductItem from 'components/organisms/ProductItem';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "Lay's Mevsim Yeşillikli",
        image:
          'https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg',
        alt: '96 g',
        price: 6.36,
      },
      {
        id: 2,
        title: 'Eti Canga',
        image:
          'https://cdn.getir.com/product/5f3538dc71a71226677fba17_tr_1624437105104.jpeg',
        alt: '45 g',
        price: 2.85,
      },
      {
        id: 3,
        title: 'Kuzeyden',
        image:
          'https://cdn.getir.com/product/5a7b20fd8e19da0004bb27f8_tr_1615375864268.jpeg',
        alt: '1.5 L',
        price: 2.95,
      },
    ]);
  }, []);

  return (
    <div>
      <h3 className="font-semibold text-sm mb-3">Favoriler</h3>
      <div className="overflow-hidden rounded-lg grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0.1">
        {products
          && products.map((product) => <ProductItem product={product} />)}
      </div>
    </div>
  );
}

export default Products;
