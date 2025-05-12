const SecondaryCard = ({ title, summary, imageUrl }) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm transition hover:shadow-lg hover:scale-105">
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-600">{summary}</p>
      </div>
    </div>
  );
};

export default SecondaryCard;
