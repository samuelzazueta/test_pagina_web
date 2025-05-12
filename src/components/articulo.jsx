const ArticleCard = ({ title, summary, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative bg-cover bg-center rounded-lg p-5 shadow hover:scale-105 transition text-white min-h-[185px]"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-0"></div>
      <div className="relative z-10">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-slate-200">{summary}</p>
      </div>
    </div>
  );
};



export default ArticleCard;
