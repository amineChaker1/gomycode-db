import React from "react";
import { useParams } from "react-router-dom";
import { useGetOnePokeQuery } from "../app/pokeSlice";

import pika from "../assets/pika.png";
const PokeDetails = () => {
  const { id } = useParams();
  const { data } = useGetOnePokeQuery(id);
  console.log(data);
  return (
    <div className="py-10">
      <div className="bg-primary border-2 border-secondary rounded-3xl p-5 mx-64 text-center flex justify-center">
        <div>
          <img className="w-64" src={data?.avatar} alt="" />
        </div>
      </div>
      <div className="text-center text-5xl mt-5 font-semibold">
        {" "}
        {data?.name}{" "}
      </div>
    </div>
  );
};

export default PokeDetails;
