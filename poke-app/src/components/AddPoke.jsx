import { Slider, Spacer } from "@geist-ui/core";
import React, { useState } from "react";
import { useAddPokemonMutation } from "../app/pokeSlice";

const AddPoke = () => {
  const [addpoke, res] = useAddPokemonMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoke = {
      name: e.target.name.value,
      avatar: e.target.avatar.value,
      speed: 10,
      defence: 20,
      attack: 50,
    };

    addpoke(newPoke);
    console.log(res);
  };
  return (
    <div className="my-16">
      <div className="my-16 text-center">
        <h2 className="text-3xl font-bold py-4 text-yellow-400">Add Pokemon</h2>
      </div>
      <div className="my-16 ">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex items-center gap-20 px-28">
            <div className="inputs w-96">
              <label htmlFor="name" className="text-dark font-semibold">
                {" "}
                Name :{" "}
              </label>
              <input
                type="text"
                className="border-2 border-dark p-2 block rounded-lg my-3 w-96"
                name="name"
              />

              <label htmlFor="avatar" className="text-dark font-semibold">
                {" "}
                Picture :{" "}
              </label>
              <input
                type="url"
                className="border-2 border-dark p-2 block rounded-lg my-3 w-96"
                name="avatar"
              />
            </div>
            <div className="radios w-1/2 flex flex-col">
              <label htmlFor=""> Speed : </label>
              <Slider name="speed" type="success" initialValue={20} />
              <Spacer />
              <label htmlFor=""> Defence : </label>
              <Slider name="defence" type="success" initialValue={20} />
              <Spacer />
              <label htmlFor=""> Attack : </label>
              <Slider name="attack" type="success" initialValue={20} />
              <Spacer />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-400 text-dark font-bold "
            >
              Add Pokemon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPoke;
