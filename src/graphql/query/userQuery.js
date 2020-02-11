import { gql } from 'apollo-boost';

const LOGIN = gql`
query authenticate($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      token
    }
  }`;

export default {
  LOGIN,
};
