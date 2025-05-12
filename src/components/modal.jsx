const ArticleModal = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white max-w-2xl w-full rounded-lg overflow-hidden shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>

        <div className="max-h-[80vh] overflow-y-auto p-6">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-60 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <p className="text-sm text-gray-500 mb-4">Por {article.author}</p>
          <p className="text-gray-700 whitespace-pre-line">
            {article.description}
          </p>
          <br></br>
          <a href="https://www.ejemplo.com">Haz clic aquí para más información...</a>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
