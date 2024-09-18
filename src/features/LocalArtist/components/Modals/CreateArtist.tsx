import { useState } from 'react';
import { Modal, Button, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { createLocalArtist } from '../../services/SvArtist';
import { createArtist } from '../../types/LocalArtist';

const CreateArtist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<createArtist>();


  const onSubmit = async (data: createArtist) => {
    try {
      await createLocalArtist(data);
      alert('Artista añadido con éxito');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error al añadir el artista:', error);
      alert('Hubo un error al añadir el artista');
    }
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Añadir nuevo Artista</Button>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Añadir nuevo Artista</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Label htmlFor="Name" value="Nombre" />
              <TextInput
                id="Name"
                type="text"
                {...register('Name', { required: true })}
                placeholder="Escribe el nombre del Artista"
              />
              {errors.Name && <span className="text-red-500">Este campo es requerido</span>}
            </div>

            <div className="mb-4">
              <Label htmlFor="ArtisProfession" value="Profesión del Artista" />
              <TextInput
                id="ArtisProfession"
                type="text"
                {...register('ArtisProfession', { required: true })}
                placeholder="Escribe la Profesión del Artista"
              />
              {errors.ArtisProfession && <span className="text-red-500">Este campo es requerido</span>}
            </div>

            <div className="mb-4">
              <Label htmlFor="MoreInfo" value="Más Información" />
              <TextInput
                id="MoreInfo"
                type="text"
                {...register('MoreInfo')}
                placeholder="Más información sobre el artista"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="FBLink" value="Facebook Link" />
              <TextInput
                id="FBLink"
                type="url"
                {...register('FBLink')}
                placeholder="https://facebook.com"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="IGLink" value="Instagram Link" />
              <TextInput
                id="IGLink"
                type="url"
                {...register('IGLink')}
                placeholder="https://instagram.com"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="LILink" value="LinkedIn Link" />
              <TextInput
                id="LILink"
                type="url"
                {...register('LILink')}
                placeholder="https://linkedin.com"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="Cover" value="URL de la Imagen del Artista" />
              <TextInput
                id="Cover"
                type="url"
                {...register('Cover', { required: true })}
                placeholder="https://imagen.com/cover.jpg" // El usuario ingresa la URL de la imagen
              />
              {errors.Cover && <span className="text-red-500">Este campo es requerido</span>}
            </div>

            <Modal.Footer>
              <Button type="submit">Crear</Button>
              <Button color="gray" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateArtist;
