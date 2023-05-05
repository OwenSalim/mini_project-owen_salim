import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://wealthy-caiman-77.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret":
      "PiS4CjY9W2EY9pjaRoIZ0YpiL6CUmlIXB0jucW61ygLj2JsipDPyBpz3K9J7Rqzl",
  },
});
