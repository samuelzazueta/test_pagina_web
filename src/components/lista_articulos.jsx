import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./articulo";
import SecondaryCard from "./secundario";
import ArticleModal from './modal';


import imgtornado from "../assets/img/tornado.jpg";
import imgpuente from "../assets/img/puente.jpg";
import imggranja from "../assets/img/granja.jpg";
import imgdrones from "../assets/img/drones.jpg";




const secondaryArticles = [
  { id: 'a', title: 'Se inicia el proyecto del puente intercontinental', summary: 'Se aprobó la conexión de continentes de Centro al Archipiélago del Yoran', imageUrl: imgpuente },
  { id: 'b', title: 'Nuevo proyecto agrario en Garza', summary: 'Pepe pica papas con un pico', imageUrl: imggranja },
  { id: 'c', title: 'Darkstar presenta drones de seguridad civil', summary: 'Una iniciativa tecnológica en marcha...', imageUrl: imgdrones },
  { id: 'd', title: '¿Qué hacer en un fenómeno o Anomalía Elemental?', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', imageUrl: imgtornado },
];


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/articles')
      .then((res) => setArticles(res.data))
      .catch((err) => console.error('Error al cargar artículos:', err));
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 3 < articles.length ? prev + 3 : 0));
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - 3 >= 0 ? prev - 3 : Math.max(articles.length - 3, 0)
    );
  };

  const visibleArticles = articles.slice(startIndex, startIndex + 3);


  return (
    <section className="py-10 px-6 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        <h1 className="text-3xl font-bold text-purple-800 col-span-1 lg:col-span-4 mb-6"> Ultimas Noticias</h1>

        <div className="lg:col-span-3 flex flex-col gap-6 relative">
          

          <div className="lg:col-span-3 flex flex-col gap-6">
            {visibleArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                summary={article.summary}
                imageUrl={article.imageUrl}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>
          <div className="flex justify-center items-center gap-6 my-4">
            {/* Flecha izquierda */}
            <button
              onClick={prevSlide}
              className="text-purple-700 font-bold text-2xl hover:scale-110 transition"
            >
              ←
            </button>

            {/* Indicadores de página */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(articles.length / 3) }, (_, i) => (
                <span
                  key={i}
                  className={`text-2xl transition ${
                    i === Math.floor(startIndex / 3)
                      ? "text-purple-800"
                      : "text-purple-400"
                  }`}
                >
                  ●
                </span>
              ))}
            </div>

            {/* Flecha derecha */}
            <button
              onClick={nextSlide}
              className="text-purple-700 font-bold text-2xl hover:scale-110 transition"
            >
              →
            </button>
          </div>

        </div> 
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold">Otras noticias</h2>
          {secondaryArticles.map((sec) => (
            <SecondaryCard
              key={sec.id}
              title={sec.title}
              summary={sec.summary}
              imageUrl={sec.imageUrl}
            />
          ))}
        </aside>
      </div>

      {/* Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      
    </section>
  );
};

export default ArticleList;

