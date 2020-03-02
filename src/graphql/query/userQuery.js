import { gql } from 'apollo-boost';

const LOGIN_QUERY = gql`
query ($email: String!, $password: String!) {
  authentication(email: $email, password: $password) {
    user{
      username
    }
    Authorization
  }
  }`;

export {
  LOGIN_QUERY,
};
