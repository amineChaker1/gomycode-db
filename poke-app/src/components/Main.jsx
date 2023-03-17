import React from "react";
import { Link } from "react-router-dom";
import { useGetPokemonsQuery } from "../app/pokeSlice";
import pika from "../assets/pika.png";
const Main = () => {
  const { data } = useGetPokemonsQuery();
  console.log(data);
  return (
    <div className="my-16">
      <div className="my-16 text-center">
        <h2 className="text-3xl font-bold py-4 text-yellow-400">Pokemons</h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="grid grid-cols-4  text-center">
          {data?.map((pokemon) => (
            <div className="w-1/2 mx-auto mb-16">
              <div className="bg-primary py-3 border-2  border-dark rounded-lg ">
                <img
                  className="mx-auto w-28 h-28"
                  src={pokemon.avatar}
                  alt=""
                />
              </div>
              <Link to={`/${pokemon._id}`}>
                <p className="font-semibold mt-3"> {pokemon.name} </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
