import { useLocation } from "react-router-dom"

function UniqueBook() {
    const location = useLocation();
    const {Book} = location.state
  return (
    <>
      <h1>{Book.Title}</h1>
      <h2>{Book.Author}</h2>
      <img src={Book.Cover}/>
      <h2>{Book.Editorial}</h2>
      <h2>{Book.Category}</h2>
      <h2>{Book.PublicationYear}</h2>
      <h2>{Book.ISBN}</h2>
    </>
  )
}

export default UniqueBook
