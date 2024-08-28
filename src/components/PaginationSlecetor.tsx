import { Pagination } from "flowbite-react"

const PaginatationSelector = ({currentPage,onPageChange}:{currentPage:number, onPageChange:(page:number)=>void}) => {
  return (
    <Pagination
            className=" text-lg"
            layout="navigation"
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
            showIcons
            previousLabel="Anterior"
            nextLabel="Siguiente"
          />
  )
}

export default PaginatationSelector