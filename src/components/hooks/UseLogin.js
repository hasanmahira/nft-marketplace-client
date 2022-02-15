import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useLazyQuery
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://127.0.0.1:3000/graphql",
  cache: new InMemoryCache(),
});

const login = gql`
  {
    login($email: String!, $password: String!)
  }
`;

function Login() {
  console.log('Hello');
  const [loadGreeting, { called, loading, data }] = useLazyQuery(
    login,
    { variables: { email: "mates@gmail.com", password: "123" } }
  );
  console.log('data', data);

  if (called && loading) return <p>Loading ...</p>
  if (!called) {
    return <button onClick={() => loadGreeting()}>Load greeting</button>
  }
  return <h1>Hello {data.login}!</h1>;
}
