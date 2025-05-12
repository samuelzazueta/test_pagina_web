import MainNotice from "../components/notificacion-principal";
import ArticleList from "../components/lista_articulos";
import InfoSection from "../components/informacion";
import ServicesSection from "../components/servicios";
import Contacto from "../components/contacto";


const Home = () => {
  return (
    <>
    <selector id="inicio">
      <MainNotice /> 
    </selector>
    <section id="noticias">
      <ArticleList />
    </section>
    <section id="sobre nosotros">
      <InfoSection /> 
    </section>
    <section id="servicios">
      <ServicesSection />
    </section>
    <section id="contacto">
      <Contacto />
    </section>
    </>
  );
};

export default Home;