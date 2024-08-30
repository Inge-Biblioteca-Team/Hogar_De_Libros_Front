export type IMGsearh = {
  id: number;
  src: {
    small: string;
    large: string;
  };
  alt: string;
};

export type Covers = {
    key: string;
    title: string;
    cover_i?: number; 
  }