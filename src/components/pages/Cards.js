import React, { useState, useEffect } from "react";
import CardItem from 'components/organisms/CardItem';
import UseNftFiles from '../hooks/UseNftFiles'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useLazyQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://127.0.0.1:3000/graphql",
  cache: new InMemoryCache(),
});

const query = gql`
  query {
    getNftFiles {
      category
      cid
      createdAt
      creator
      description
      isAuction
      name
      onSale
      price
      updatedAt
    }
  }
`;

function Cards() {
  const [nftFiles, setNftFiles] = useState([]);

  async function getData() {
    await client.query({ query: query }).then((result) => {
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
