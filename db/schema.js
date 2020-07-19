const { gql } = require("apollo-server");
const typeDefs = gql`
  #TYPE'S
  type Character {
    id: ID
    name: String
    age: String
    image: String
    alive: Boolean
    movie: [Movie]
    species: [Species]
  }
  type Movie {
    name: String
    year: String
    CharacterMovieInput: [CharacterMovieInput]
  }
  type CharacterMovieInput {
    name: String
  }

  type Species{
    name: String!
    gender: String!
  }

# INPUTS
  input CharacterInput {
    #Character
    name: String!
    image: String!
    alive: String!
    movie: [inputMovie!]!
    species: [inputSpecies]!
  }
  input inputMovie {
    #input movie
    name: String
    year: String
    CharacterMovieInput: String
  }
  input inputSpecies {
    name: String
    gender: String
  }

# QUERYS
  type Query {
    #GET ALL CHARACTER
    getCharacter: [Character]
    #GET BY ID CHARACTER
    getCharacterId(id: ID!): Character
    #GET BY NAME CHARACTER
    getCharacterName(name: String): Character
    #GET BY STRING
    findCharacterString(texto: String!): [Character]
    #GET BY MOVIES
    #pending
    findByMovies(texto: String!): [Character] 
  }
# MUTATIONS
  type Mutation {
    newCharacter(input: CharacterInput): Character
    updateCharacter(id: ID!, input: CharacterInput): Character
    deleteCharacter(id: ID!): String
  }
`;
module.exports = typeDefs;

//CONSULTAS DE MUTATION
// mutation newCharacter($input: CharacterInput) {
  // newCharacter(input: $input) {
    // id
    // name
    // description
    // image
    // movie{
      // name
    // }
  // }
// }

// CONSULTA DE GET ALL CHARACTER
// query getCharacter{
//   getCharacter{
//     id
//     name
//     description
//     image
//   }
// }

// GET CHARACTER BY ID
// query getCharacterId($id: ID!){
//   getCharacterId(id: $id){
//     id
//     name
//     description
//     image
//   }
// }

// UPDATE CHARACTER
// mutation updateCharacter($id: ID!, $input: CharacterInput){
//   updateCharacter(id: $id, input: $input){
//     id
//     name
//     description
//     image
//   }
// }

// DELETE CHARACTER
// mutation deleteCharacter($id: ID!){
//   deleteCharacter(id: $id)
// }