import { useEffect, useState } from 'react';
import CategoryItem from 'components/organisms/CategoryItem';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      {
        id: 1,
        title: 'Largest Sales',
        image:
          'http://cdn.getir.com/cat/5697c78dc181490f00c99fea_f7ef7ccb-f3a4-4388-b787-232967c16320.jpeg',
      },
      {
        id: 2,
        title: 'Recent Transactions',
        image:
          'http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg',
      },
      {
        id: 3,
        title: 'For Sale',
        image:
          'http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg',
      },
    ]);
  }, []);

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <h3 className="font-semibold text-sm mb-2">Kategoriler</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12">
          {categories
            && categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
