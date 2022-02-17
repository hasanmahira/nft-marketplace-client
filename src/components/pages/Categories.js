import { useEffect, useState } from 'react';
import CategoryItem from 'components/organisms/CategoryItem';

export default function Categories({parentToChild}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      {
        id: 1,
        title: 'Game',
        image:
          'https://img.freepik.com/free-vector/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.jpg?t=st=1645054346~exp=1645054946~hmac=f2d76370d96cf303345edfaeccd0b8cc0f8fe8f0294ea564829882d2d7180b03&w=826',
      },
      {
        id: 2,
        title: 'Tech',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9wLwWPy84xpfZuRhFD4o2I4nDIIv8u6YPA&usqp=CAU',
      },
      {
        id: 3,
        title: 'Movie',
        image:
          'https://img.freepik.com/free-psd/clapperboard-mockup-floating_1332-9222.jpg?w=1380',
      },
    ]);
  }, []);

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <h3 className="font-semibold text-sm mb-2">Categories</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12">
          {categories
            && categories.map((category) => (
              <CategoryItem key={category.id} category={category} childToChild={(event) => parentToChild(event)}/>
            ))}
        </div>
      </div>
    </div>
  );
}
