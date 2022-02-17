import React, { useState, useEffect } from "react";
import CardItem from 'components/organisms/CardItem';
import {Client, CardQuery} from '../utils'

function Cards() {
  const [nftFiles, setNftFiles] = useState([]);

  async function getData() {
    await Client.query({ query: CardQuery }).then((result) => {
      result ? setNftFiles(result.data.getNftFiles) : setNftFiles([]);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {nftFiles && nftFiles.length > 0 &&
       nftFiles.map((nft) => <CardItem name={nft.name} cid={nft.cid} description={nft.description} />)} 
    </div>
  );
}

export default Cards;
