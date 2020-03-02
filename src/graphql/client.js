import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
  uri: 'http://127.0.0.1:5000/graphql',
  request: async (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log(":::::::::::: ", graphQLErrors[0].message)
    }
    if (networkError) {
      console.log(":::::::::::: ", networkError)
    }
  },
});

export default client;
