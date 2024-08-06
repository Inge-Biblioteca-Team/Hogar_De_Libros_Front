import Card_Container_Friends_Menu from "../Components/Card_Container_Friends_Menu";
import Info_Friends from "../Components/Info_Friends";

// muestra el menu de los amiguitos de la biblioteca
function FriendsMenu() {
  return (
    <>
      <div className="mt-10">
        <Info_Friends />
        <Card_Container_Friends_Menu />
      </div>
    </>
  );
}

export default FriendsMenu;

//*Manera correcta de armar una pagina