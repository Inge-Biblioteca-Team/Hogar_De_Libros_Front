import { Breadcrumb, Table } from "flowbite-react";
import {  useState } from 'react';
import { Computer } from '../types/Computer';
import { PiTrash, PiPencilDuotone, PiEyeLight  } from "react-icons/pi";
import {HomeComputerRouter, ManagerRouter } from "../components/Redirections";
import BtnNewComputer from "../components/BtnNewComputer";
import PaginatationSelector from "../../../components/PaginationSlecetor";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import {GetComputerPaginated } from "../Services/SvComputer";
import { useQuery } from "react-query";
import AdminAdvancedSearchComp from "../components/AdminAvdvaceSearchComp";
import BtnAdminAdSearchCm from "../components/BtnAdSerchCm";
import InpSerchComp from "../components/InpSerchComp";

const ManagerComputer = () => {
    const [currentPage, setCurrentPage] = useState<number>
    (()=>{
        const savedPage = sessionStorage.getItem("currentPage");
        return savedPage? Number(savedPage):1;
      })
      const [currentLimit, setCurrentLimit] = useState<number>(5);
      const [advance, setAdvance] = useState<boolean>(false);

    const onPageChange = (page: number) => {
      setCurrentPage(page);
      sessionStorage.setItem("currentPage", page.toString());
    }
    const viewAdvanceSerchComp = ()=> setAdvance(!advance)

    const {data:computers} = useQuery<Computer[], Error>(
      ["Computer", currentPage, currentLimit], ()=>
        GetComputerPaginated(currentLimit,currentPage),{
          keepPreviousData: true,
          staleTime: 60000,
        }
    )


    return (
        <>    
         
        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
        <HomeComputerRouter/>
        <ManagerRouter/>
        </Breadcrumb>
        
        <div className="overflow-x-auto p-10">
        <div className="flex overflow-x-auto sm:justify-between p-5">
          <div>
          <AdminAdvancedSearchComp see={advance}/>
          <BtnAdminAdSearchCm  click={viewAdvanceSerchComp} icon={advance} />
          <InpSerchComp/>
          </div>
          <BtnNewComputer/>
        </div> 
        <Table hoverable className="felx items-center justify-center">
          <Table.Head>
            <Table.HeadCell>Número de identificación</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell>Marca</Table.HeadCell>
            <Table.HeadCell>Codigo</Table.HeadCell>
            <Table.HeadCell>Condición</Table.HeadCell>
          
          </Table.Head>
          <Table.Body className="divide-y">
            {computers?.map((computers) => (
              <Table.Row key={computers.Id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {computers.MachineNumber}
                </Table.Cell>
                <Table.Cell>{computers.Status}</Table.Cell>
                <Table.Cell>{computers.EquipamentBrand}</Table.Cell>
                <Table.Cell>{computers.EquipamentSerial}</Table.Cell>
                <Table.Cell>{computers.ConditionRating}</Table.Cell>
                <Table.Cell className="flex items-center justify-between p-4">
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" >
                  <PiEyeLight />
                  </a>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" >
                  <PiPencilDuotone />
                  </a>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" >
                  <PiTrash />
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <div className="flex overflow-x-auto sm:justify-between">
        <div>
              <span className=" pl-5">
                Mostrar{" "}
                <span>
                  <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                </span>{" "}
                Equipos por pagina
              </span>
            </div>
        <PaginatationSelector
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
        </div>
      </div>
        </>
    );
};

export default ManagerComputer;