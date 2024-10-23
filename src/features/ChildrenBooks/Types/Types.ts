

export interface OpenLibraryResponse {
    docs: OpenLibraryBook[];
  }
  
 export interface OpenLibraryBook {
    key: string;
    cover_i?: string; 
  }
  
 export interface GoogleBooksResponse {
    items: GoogleBook[];
  }
  
 export interface GoogleBook {
    id: string;
    volumeInfo: {
      imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
      };
    };
  }
  
 export interface CoverImage {
    id: string;
    imageLink: string | undefined;
  }
  