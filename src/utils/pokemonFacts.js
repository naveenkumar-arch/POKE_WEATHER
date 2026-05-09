// Random Pokémon facts shown on each search
export const POKEMON_FACTS = [
  "Pikachu's cheeks store electricity — they glow when it's about to unleash a thunderbolt!",
  "Charizard's flame burns so hot it can melt boulders and glaciers.",
  "Gengar is said to be the shadow of a Clefable that wandered into another dimension.",
  "Squirtle's shell is not just for protection — it also helps it swim at high speeds.",
  "Dragonite can fly around the entire globe in just 16 hours.",
  "Glaceon can freeze the moisture in the air to create diamond-dust snowfall.",
  "Psyduck suffers from constant headaches that unlock powerful psychic abilities.",
  "Eevee has an unstable genetic code, giving it the most evolution possibilities.",
  "Pokémon can sense weather changes before humans can detect them.",
  "Some Pokémon migrate with the seasons, just like real-world animals.",
]

export function getRandomFact() {
  return POKEMON_FACTS[Math.floor(Math.random() * POKEMON_FACTS.length)]
}
