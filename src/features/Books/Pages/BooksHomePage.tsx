import ListFreeBoosks from "../screens/ListFreeBoosks";
import ListMostPopularBooks from "../screens/ListMostPopularBooks";
import ListNewRevenue from "../screens/ListNewRevenue";
import ListReserveBooks from "../screens/ListReserveBooks";

const BooksHomePage = () => {
  return (
    <main className="w-full text-center text-2xl font-bold flex flex-col gap-5">
      <section>
        <h2 >Libros más populares</h2>
        <ListMostPopularBooks />
      </section>
      <section>
        <h2>Libros De Regalo</h2>
        <ListFreeBoosks />
      </section>
      <section>
        <h2>Libros de reserva</h2>
        <ListReserveBooks/>
      </section>
      <section>
        <h2>Nuevos Ingresos</h2>
        <ListNewRevenue/>
      </section>
    </main>
  );
};

export default BooksHomePage;
