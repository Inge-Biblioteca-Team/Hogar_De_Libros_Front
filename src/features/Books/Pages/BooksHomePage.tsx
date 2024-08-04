import ListFreeBoosks from "../screens/ListFreeBoosks";
import ListMostPopularBooks from "../screens/ListMostPopularBooks";
import ListNewRevenue from "../screens/ListNewRevenue";

const BooksHomePage = () => {
  return (
    <main className="w-full">
      <section>
        <h2>Libros mas populares</h2>
        <ListMostPopularBooks />
      </section>
      <section>
        <h2>Libros De Regalo</h2>
        <ListFreeBoosks />
      </section>
      <section>
        <h2>Libros de reserva</h2>
        <ListNewRevenue />
      </section>
      <section>
        <h2>Nuevos Ingresos</h2>
        <ListNewRevenue />
      </section>
    </main>
  );
};

export default BooksHomePage;
