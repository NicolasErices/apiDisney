const CharacterSchema = require("../model/Characters");
// resolver
const resolvers = {
  Query: {
    // function find all character
    getCharacter: async () => {
      try {
        const character = await CharacterSchema.find({});
        return character;
      } catch (error) {
        console.log(error);
      }
    },
    // function find by ID
    getCharacterId: async (_, { id }) => {
      const characteriD = await CharacterSchema.findById(id);
      console.log(characteriD);
      if (!characteriD) {
        throw new error("character no finded");
      }
      return characteriD;
    },
    // function find by name
    getCharacterName: async (_, { name }) => {
      let nameCharacter = name.toLowerCase();
      let characterName = await CharacterSchema.findOne({
        name: nameCharacter,
      });
      if (!characterName) {
        throw new Error("character no finded");
      }
      console.log(characterName)
      return characterName;
    },
    // function find by caracter string
    findCharacterString: async (_, { texto }) => {
      const characterString = await CharacterSchema.find({ name: new RegExp(texto, 'i')});
      console.log(characterString)
      return characterString;
    },
  },
  Mutation: {
    // INSERT NEW CHARACTER
    newCharacter: async (_, { input }) => {
      if (input.name !== input.name) {
        return "the character already exists ... " + input.name;
      } else {
        console.log("characcter no existe");
        const character = new CharacterSchema(input);
        character.save();
        return character;
      }
    },
    // UPDATE NEW CHARACTER
    updateCharacter: async (_, { id, input }) => {
      let characcterUpdateId = await CharacterSchema.findById(id);
      if (!characcterUpdateId) {
        throw new Error("character not found");
      }
      characcterUpdateId = await CharacterSchema.findOneAndUpdate(
        { _id: id },
        input,
        { new: true }
      );
      return characcterUpdateId;
    },
    // DELETE NEW CHARACTER
    deleteCharacter: async (_, { id }) => {
      let characterDeleteId = await CharacterSchema.findById(id);
      if (!characterDeleteId) {
        throw new Error("character not found");
      }
      await CharacterSchema.findOneAndDelete({ _id: id });
      return "Character deleted";
    },
  },
};
module.exports = resolvers;
