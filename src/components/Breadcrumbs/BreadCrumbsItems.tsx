import { Breadcrumb } from "flowbite-react";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BreadCrumbsItems = ({ children }: { children: React.ReactNode }) => {
  const navi = useNavigate();
  return (
    <Breadcrumb className="custom-breadcrumb">
      <Breadcrumb.Item onClick={() => navi("/HogarDeLibros")} icon={IoIosHome}>
        Inicio
      </Breadcrumb.Item>
      {children}
    </Breadcrumb>
  );
};

const BreadLastItems = ({ text }: { text: string }) => {
  return <Breadcrumb.Item>{text} </Breadcrumb.Item>;
};

const BreadCrumbManage = ({ text }: { text: string }) => {
  const navi = useNavigate();
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item onClick={() => navi("/HogarDeLibros/Recursos")}>
        Recursos
      </Breadcrumb.Item>
      <BreadLastItems text={text} />
    </BreadCrumbsItems>
  );
};

const ColecctionCrumbs = ({ text }: { text: string }) => {
  const navi = useNavigate();
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item onClick={() => navi("/HogarDeLibros/Catalogo")}>
        Catalogo
      </Breadcrumb.Item>
      <Breadcrumb.Item>{text}</Breadcrumb.Item>
    </BreadCrumbsItems>
  );
};

const ChlildrenColecctionCrumbs = ({ text }: { text: string }) => {
  const navi = useNavigate();
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item onClick={() => navi("/HogarDeLibros/Catalogo")}>
        Catalogo
      </Breadcrumb.Item>
      <Breadcrumb.Item>Catalogo infantil</Breadcrumb.Item>
      <Breadcrumb.Item>{text}</Breadcrumb.Item>
    </BreadCrumbsItems>
  );
};

const ColabCrumbs = ({ text }: { text: string }) => {
  const navi = useNavigate();
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item onClick={() => navi("/HogarDeLibros/Colaboraciones")}>
        Colaboraciones
      </Breadcrumb.Item>
      <Breadcrumb.Item>{text}</Breadcrumb.Item>
    </BreadCrumbsItems>
  );
};

const FirendCrumbs = ({ text }: { text: string }) => {
  const navi = useNavigate();
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item onClick={() => navi("/HogarDeLibros/Amigos")}>
        Amigos de la biblioteca
      </Breadcrumb.Item>
      <Breadcrumb.Item>{text}</Breadcrumb.Item>
    </BreadCrumbsItems>
  );
};
const DonationsCrumbs = ({ text }: { text: string }) => {
  const navi = useNavigate();
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item onClick={() => navi("/HogarDeLibros/Donaciones")}>
        Donaciones
      </Breadcrumb.Item>
      <Breadcrumb.Item>{text}</Breadcrumb.Item>
    </BreadCrumbsItems>
  );
};

export {
  FirendCrumbs,
  ColabCrumbs,
  BreadCrumbsItems,
  BreadLastItems,
  BreadCrumbManage,
  ColecctionCrumbs,
  ChlildrenColecctionCrumbs,
  DonationsCrumbs,
};
