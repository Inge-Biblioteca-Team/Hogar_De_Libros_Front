import { Breadcrumb } from "flowbite-react";
import React from "react";
import { IoIosHome } from "react-icons/io";

const BreadCrumbsItems = ({ children }: { children: React.ReactNode }) => {
  return (
    <Breadcrumb className="custom-breadcrumb">
      <Breadcrumb.Item href="/HogarDeLibros" icon={IoIosHome}>
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
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item href="/HogarDeLibros/Recursos">Recursos</Breadcrumb.Item>
      <BreadLastItems text={text} />
    </BreadCrumbsItems>
  );
};

const ColecctionCrumbs = ({ text }: { text: string }) => {
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item href="/Catalogo">Catalogo</Breadcrumb.Item>
      <Breadcrumb.Item>{text}</Breadcrumb.Item>
    </BreadCrumbsItems>
  );
};

const ChlildrenColecctionCrumbs = ({ text }: { text: string }) => {
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item href="/Catalogo">Catalogo</Breadcrumb.Item>
      <Breadcrumb.Item>Catalogo infantil</Breadcrumb.Item>
      <Breadcrumb.Item>{text}</Breadcrumb.Item>
    </BreadCrumbsItems>
  );
};

const ColabCrumbs = ({ text }: { text: string }) => {
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item href="/Colaboraciones">Colaboraciones</Breadcrumb.Item>
      <Breadcrumb.Item>{text}</Breadcrumb.Item>
    </BreadCrumbsItems>
  );
};

const FirendCrumbs = ({ text }: { text: string }) => {
  return (
    <BreadCrumbsItems>
      <Breadcrumb.Item href="/amigos">Amigos de la biblioteca</Breadcrumb.Item>
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
};
