import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeSlice = createApi({
  reducerPath: "poke",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokemons-9g2q.onrender.com/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => "api/pokemons",
    }),
    addPokemon: builder.mutation({
      query: (data) => ({
        url: "api/pokemons/",
        method: "POST",
        body: data,
      }),
    }),
    getOnePoke: builder.query({
      query: (data) => ({
        url: `api/pokemons/${data}`,
      }),
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useAddPokemonMutation,
  useGetOnePokeQuery,
} = pokeSlice;
