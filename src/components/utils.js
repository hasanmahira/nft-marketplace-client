import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const Client = new ApolloClient({
  uri: "https://nftmp-east.herokuapp.com:3000/graphql",
  cache: new InMemoryCache(),
});

export const CardQuery = gql`
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

export const ProductQuery = gql`
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

export const ProductCategoryQuery = gql`
  query getNftFilesByCategory($category: Int!){
    getNftFilesByCategory(category: $category) {
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

export const LoginQuery = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const RegisterQuery = gql`
mutation register(
  $email: String!
  $password: String!
  $name: String!
  $surname: String!
  $userName: String!
  $bdate: String!
  $createdAt: String!
  $updatedAt: String!
) {
  register(
    email: $email
    passwordDigest: $password
    name: $name
    surname: $surname
    userName: $userName
    bdate: $bdate
    createdAt: $createdAt
    updatedAt: $updatedAt
  ) {
    email
  }
}
`;

export const CreateNftMut = gql`
mutation createNft(
  $creator: String!
  $price: Float!
  $name: String!
  $description: String!
  $category: Int!
  $onSale: Boolean!
  $isAuction: Boolean!
  $cid: String!
  $createdAt: String!
  $updatedAt: String!
) {
  createNft(
    creator: $creator
    name: $name
    price: $price
    description: $description
    category: $category
    onSale: $onSale
    isAuction: $isAuction
    cid: $cid
    createdAt: $createdAt
    updatedAt: $updatedAt
  )
}
`;