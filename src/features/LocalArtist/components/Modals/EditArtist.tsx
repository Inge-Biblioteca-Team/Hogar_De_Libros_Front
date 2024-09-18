import { Dispatch, SetStateAction } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { Artist, updateArtist } from '../../types/LocalArtist';
import { useForm } from 'react-hook-form';
import { editArtist } from '../../services/SvArtist';

const EditArtist = ({
  edit,
  setEdit,
  Artist,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  Artist: Artist;
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Name: Artist.Name,
      ArtisProfession: Artist.ArtisProfession, 
      MoreInfo: Artist.MoreInfo,              
      Cover: Artist.Cover,                    
      FBLink: Artist.FBLink,
      IGLink: Artist.IGLink,
      LILink: Artist.LILink,
    },
  });

  const onSubmit = async (data: updateArtist) => {
    try {
      await editArtist(Artist.ID, data); 
      alert('Artista editado con éxito');
      setEdit(false); 
    } catch (error) {
      console.error('Error updating artist:', error);
    }
  };

  return (
    <Modal show={edit} onClose={() => setEdit(false)}>
      <Modal.Header>
        <span>Artista: {Artist.Name}</span>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="mb-4">
            <legend className="text-lg font-semibold mb-2">Editar Información del Artista:</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <TextInput id="name" {...register('Name')} placeholder="Nombre" />
              </div>
              <div>
                <Label htmlFor="tipo">Profesión</Label>
                <TextInput id="tipo" {...register('ArtisProfession')} placeholder="Profesión del Artista" /> {/* Cambiado aquí */}
              </div>
              <div>
                <Label htmlFor="face">Facebook</Label>
                <TextInput id="face" {...register('FBLink')} placeholder="Facebook del Artista" />
              </div>
              <div>
                <Label htmlFor="insta">Instagram</Label>
                <TextInput id="insta" {...register('IGLink')} placeholder="Instagram del Artista" />
              </div>
              <div>
                <Label htmlFor="linkIn">LinkedIn</Label>
                <TextInput id="linkIn" {...register('LILink')} placeholder="LinkedIn del Artista" />
              </div>
              <div>
                <Label htmlFor="moreInfo">Más Información</Label>
                <TextInput id="moreInfo" {...register('MoreInfo')} placeholder="Más información" /> {/* Añadido campo MoreInfo */}
              </div>
              <div>
                <Label htmlFor="cover">Portada</Label>
                <TextInput id="cover" {...register('Cover')} placeholder="Nombre del archivo de la imagen" /> {/* Añadido campo Cover */}
              </div>
            </div>
          </fieldset>
        </form>
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center gap-9">
        <Button color="failure" onClick={() => setEdit(false)}>
          Cancelar
        </Button>
        <Button color="blue" onClick={handleSubmit(onSubmit)}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditArtist;
