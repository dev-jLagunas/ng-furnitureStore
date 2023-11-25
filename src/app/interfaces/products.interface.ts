export interface Furniture {
  id: string;
  fields: {
    company: string;
    colors: string[];
    featured: boolean;
    price: number;
    name: string;
    image: {
      id: string;
      width: number;
      height: number;
      url: string;
      filename: string;
      size: number;
      type: string;
    }[];
  };
}

export interface SingleFurniture {
  id: string;
  fields: {
    company: string;
    colors: string[];
    featured: boolean;
    price: number;
    name: string;
    description: string;
    image: {
      id: string;
      url: string;
    }[];
  };
}
