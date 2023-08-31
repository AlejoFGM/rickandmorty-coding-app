export interface CardProps {
  data: CharacterType;
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  created: string;
  episode: string[];
  image: string;
  location: any;
  origin: any;
  url: string;
  gender: string;
}
