import { gql } from "@apollo/client";

export const getRandomPerson = gql`
  query getRandomPerson {
    randomPerson {
      name {
        first
        last
      }
      profile {
        username
        email
        avatar
      }
      address {
        streetAddress
        city
        zipCode
        state
        country
      }
    }
  }
`;
