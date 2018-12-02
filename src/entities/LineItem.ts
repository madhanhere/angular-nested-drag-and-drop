export interface LineItem {
  ID: number;
  ImageUrl: string;
  Description: string;
  Name: string;
}

export const pokemonSpecies: LineItem[] = [
  {
    ID: 1,
    ImageUrl: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png',
    Description: 'Pikachu are a species of Pokémon, fictional creatures' +
    'that appear in an assortment of video games, animated television shows and movies',
    Name: 'Picachu'
  },
  {
    ID: 2,
    ImageUrl: 'https://imgix.ranker.com/node_img/36/700363/original/' +
    'charizard-film-characters-photo-1?w=87&h=87&fit=crop&crop=faces&q=60&fm=jpg',
    Description: 'Charizard, known in Japan as Lizardon,' +
    'is a Pokémon species in Nintendo and Game Freaks Pokémon franchise',
    Name: 'Charizard'
  },
  {
    ID: 3,
    ImageUrl: 'https://imgix.ranker.com/user_node_img/3683/73641102/original/' +
    'pidgeot-u7?w=100&h=100&fit=crop&crop=faces&q=60&fm=jpg',
    Description: 'Pidgeotto claims a large area as its own territory.' +
    'This Pokémon flies around, patrolling its living space.',
    Name: 'Pidgeot'
  }
];

export const pokemonTrainers: LineItem [] = [
  {
    ID: 4,
    ImageUrl: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7b/Red_Pok%C3%A9monRB.png/revision/latest/' +
    'scale-to-width-down/180?cb=20080415202057&path-prefix=en',
    Description: 'Red becomes the champion of the Pokémon League after beating Blue, and nothing is heard' +
    ' about him until some time after.',
    Name: 'Red (Pokémon Trainer)'
  },
  {
    ID: 5,
    ImageUrl: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a8/Leaf.png/revision/latest/' +
    'scale-to-width-down/92?cb=20180711131056&path-prefix=en',
    Description: 'Leaf (リーフ, Leaf) is the female counterpart to Red and is the main playable' +
    ' character in Pokémon FireRed and LeafGreen..',
    Name: 'Leaf (リーフ, Leaf)'
  }, {
    ID: 6,
    ImageUrl: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0f/Ethan.png/revision/latest/' +
    'scale-to-width-down/111?cb=20111124133921&path-prefix=en',
    Description: 'Ethan (ヒビキ, Hibiki) is the main playable character in Pokémon Gold and Silver' +
    ' and is the male choice in Pokémon Crystal, Pokémon HeartGold and SoulSilver. ',
    Name: 'Leaf (リーフ, Leaf)'
  }
];
