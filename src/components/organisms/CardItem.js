import React from "react";

function CardItem({name, cid, description}) {
  cid = `https://ipfs.io/ipfs/${cid}`;
  return (
    <div className="bg-white flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10">
      <img src={cid} className="w-36 h-36 mb-4" />
      <h3 className="text-lg font-semibold text-purple-700">{name}</h3>
      <p className="text-sm text-gray-600 px-5">{description}</p>
    </div>
  );
}

export default CardItem;
