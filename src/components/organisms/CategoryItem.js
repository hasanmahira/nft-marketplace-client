function CategoryItem({ category, childToChild }) {
  // function handleClick(id){ localStorage.setItem("categoryId", id);}
  return (
    <button onClick={() => childToChild(category.id)} className="flex group justify-center items-center rounded transition-colors hover:bg-purple-50 flex-col p-4">
      <img src={category.image} className="w-12 h-12 rounded-lg border border-gray-200 object-cover" />
      <span className="font-semibold transition-colors group-hover:text-purple-700 whitespace-nowrap block mt-2 text-sm">{category.title}</span>
    </button>
  );
}

export default CategoryItem;
