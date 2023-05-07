export type allData = {
  superheroes: superheroType;
};

export type superheroType = {
  id: number;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  image_link: string;
};
