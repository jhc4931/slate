import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://movieql-osezlvyqsg.now.sh/"
});

export default client;