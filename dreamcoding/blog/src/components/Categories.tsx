interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <article className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`hover:text-sky-500 transition-all ${
              category === selected ? 'text-sky-600' : ''
            }`}
          >
            <button type="button" onClick={() => onClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
