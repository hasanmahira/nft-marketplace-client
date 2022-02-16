import { useState, useEffect } from "react";

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

export default function UseNftFiles() {
  console.log("Hello");
  // const { called, loading, data } = useQuery(query);

  // console.log("data", data);

  // if (called && loading) return <p>Loading ...</p>;

  // const [nftFiles, setNftFiles] = useState([]);

  client.query({ query: query }).then((result) => {
    // setNftFiles(result.data.getNftFiles);
    return result.data.getNftFiles;
  });

  // async function getData() {
  //   await client.query({ query: query }).then((result) => {
  //     setNftFiles(result.data.getNftFiles);
  //     // return result.data.getNftFiles;
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // useEffect(() => {
  //   nftFiles && nftFiles.length > 1 ? returnValue() : [];
  // }, [nftFiles]);

  // function returnValue() {
  //   console.log("nftFiles", nftFiles);
  //   return nftFiles;
  // }
  // if (!called) {
  //   return <button onClick={() => loadGreeting()}>Load greeting</button>;
  // }
  // return <h1>Hello {data}!</h1>;
}
