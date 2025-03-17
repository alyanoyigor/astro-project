interface ArticleProps {
  title: string;
  description: string;
  withDelete?: boolean;
  handleDelete?: () => void;
}

export default function Article({
  title,
  description,
  withDelete,
  handleDelete,
}: ArticleProps) {
  return (
    <div className="relative p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {withDelete && (
        <button
          onClick={handleDelete}
          className="absolute right-0 top-0 p-2 cursor-pointer"
        >
          <svg
            fill="#000000"
            height="16px"
            width="16px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <g>
              <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
}
