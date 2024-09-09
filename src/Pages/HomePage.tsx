import ListMostPopularBooks from "../features/Books/screens/ListMostPopularBooks";

const HomePage = () => {
  return (
    <main className="w-full text-center text-2xl font-bold flex flex-col gap-5">
      <section>
        <h2 >Libros más populares</h2>
        <ListMostPopularBooks />
      </section>
      <section>
        <h2>Actividades Proximas</h2>
        
      </section>
      <section>
        <h2>Avisos</h2>
      
      </section>
      <section>
        <h2>Nuevos Ingresos</h2>
     
      </section>
    </main>
  );
};

export default HomePage;
