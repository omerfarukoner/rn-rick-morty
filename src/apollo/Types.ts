export interface Character {
  id: string;
  name: string;
  image: string;
  location: Location;
}

export interface Characters {
  results: Character[];
  info: Info;
}

export interface CharactersQueryType {
  characters: Characters;
}

export interface CharacterQueryType {
  character: Character;
}

interface Info {
  next: number;
  count: number;
  pages: number;
}

interface Location {
  name: string;
}
