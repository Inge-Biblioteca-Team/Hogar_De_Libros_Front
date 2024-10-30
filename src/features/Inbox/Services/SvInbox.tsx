import api from "../../../Services/AxiosConfig";
import { Nota } from "../Types/InboxTypes";


// get las notas leídas
const getReadNotes = async () => {
  try {
    const response = await api.get('notes/read');
    return response.data;
  } catch (error) {
    console.error('Error fetching read notes:', error);
    throw error;
  }
};

// get las notas en la papelera
const getTrashNotes = async () => {
  try {
    const response = await api.get('notes/trash');
    return response.data;
  } catch (error) {
    console.error('Error fetching trash notes:', error);
    throw error;
  }
};
// get las notas pendientes
const getPendingNotes = async () => {
  try {
    const response = await api.get('notes/pending');
    return response.data;
  } catch (error) {
    console.error('Error fetching pending notes:', error);
    throw error;
  }
};

const getAllNotes = async () => {
  try {
    const [readNotes, trashNotes, pendingNotes] = await Promise.all([
      api.get('notes/read'),
      api.get('notes/trash'),
      api.get('notes/pending')
    ]);

    return {
      readNotes: readNotes.data,
      trashNotes: trashNotes.data,
      pendingNotes: pendingNotes.data
    };
  } catch (error) {
    console.error('Error fetching all notes:', error);
    throw error;
  }
};

//marcar leidos
const markAsRead = async (id_Note: number) => {
    try {
      const response = await api.patch(`notes/${id_Note}/read`);
      return response.data; 
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  };

  const moveMultipleToRead = async (id_Note: number[]) => {
    try {
      const response = await api.patch('notes/read/multiple', {
        ids: id_Note, 
      });
      return response.data; 
    } catch (error) {
      console.error('Error moving multiple notifications to read:', error);
      throw error;
    }
  };
  //mover a papeleria
  const moveToTrash = async (id_Note: number) => {
    try {
      const response = await api.patch(`notes/${id_Note}/trash`);
      return response.data; 
    } catch (error) {
      console.error('Error moving notification to trash:', error);
      throw error;
    }
  };

  //Mandar a papelera varios
  const moveMultipleToTrash = async (id_Note: number[]) => {
    try {
      const response = await api.patch('notes/trash/multiple', {
        ids: id_Note, 
      });
      return response.data; 
    } catch (error) {
      console.error('Error moving multiple notifications to trash:', error);
      throw error;
    }
  };

  //Eliminacion notas de papeleria
  const deleteFromTrash = async (id_Note: number) => {
    try {
      const response = await api.delete(`notes/${id_Note}/trash`);
      return response.data; 
    } catch (error) {
      console.error('Error deleting notification from trash:', error);
      throw error;
    }
  };

  //Eliminar notas multiples de papeleria
  const deleteMultipleFromTrash = async (id_Note: number[]) => {
    try {
      const response = await api.delete('notes/trash/multiple', {
        data: { ids: id_Note },
      });
      return response.data; 
    } catch (error) {
      console.error('Error deleting multiple notifications from trash:', error);
      throw error;
    }
  };

  //Recuperar una nota de pepeleria
  const recoverFromTrash = async (id_Note: number) => {
    try {
      const response = await api.patch(`notes/${id_Note}/recover`);
      return response.data;
    } catch (error) {
      console.error('Error recovering notification from trash:', error);
      throw error;
    }
  };

  //recuperar varias notasde papeleria
  const recoverMultipleFromTrash = async (id_Note: number[]) => {
    try {
      const response = await api.patch('notes/trash/recover/multiple', {
        ids: id_Note,
      });
      return response.data; 
    } catch (error) {
      console.error('Error recovering multiple notifications from trash:', error);
      throw error;
    }
  };

  //crear  notas
  const createNote = async (createNote: Nota) => {
    try {
      const response = await api.post('notes', createNote);
      return response.data; 
    } catch (error) {
      console.error('Error creating note:', error);
      throw error;
    }
  };

export{
    getPendingNotes,
    getReadNotes,
    getTrashNotes,
    markAsRead,
    moveToTrash,
    moveMultipleToTrash,
    deleteFromTrash,
    deleteMultipleFromTrash,
    recoverFromTrash,
    recoverMultipleFromTrash,
    createNote,
    getAllNotes,
    moveMultipleToRead
}