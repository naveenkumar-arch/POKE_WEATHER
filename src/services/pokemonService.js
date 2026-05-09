const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

/**
 * Fetch Pokémon data by name.
 * Returns { name, id, image, types, abilities, height, weight, stats, cry }
 */
export async function fetchPokemon(name) {
  const res = await fetch(`${BASE_URL}/${name.toLowerCase()}`)
  if (!res.ok) throw new Error('POKEMON_FETCH_FAILED')

  const data = await res.json()

  return {
    name:      data.name,
    id:        data.id,
    image:     data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
    types:     data.types.map(t => t.type.name),
    abilities: data.abilities.map(a => a.ability.name),
    height:    data.height / 10,   // convert to metres
    weight:    data.weight / 10,   // convert to kg
    stats:     data.stats.map(s => ({ name: s.stat.name, value: s.base_stat })),
    cry:       data.cries?.latest || null,
  }
}
