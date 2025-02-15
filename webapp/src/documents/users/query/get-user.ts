// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($name: String!) {
    getUser(name: $name) {
      name
      github
      email
      telegram
      rate
      paymentAddresses {
        network
        address
      }
      actionHistory
      maintainedOrgs {
        name
        githubOrg
      }
      administeredOrgs {
        name
        githubOrg
      }
      authoredProblems {
        id
        title
        shortDescription
        detailedDescription
        status
        claimedAt
        requiredSkills
        created_at
        updated_at
      }
      claimed {
        id
        title
        shortDescription
        detailedDescription
        status
        claimedAt
        requiredSkills
        created_at
        updated_at
      }
      comments {
        id
        text
        created_at
        associatedStatus
      }
      paymentAddressesAggregate {
        count
        networkMin
        networkMax
        addressMin
        addressMax
      }
      maintainedOrgsAggregate {
        count
        nameMin
        nameMax
        githubOrgMin
        githubOrgMax
      }
      administeredOrgsAggregate {
        count
        nameMin
        nameMax
        githubOrgMin
        githubOrgMax
      }
      authoredProblemsAggregate {
        count
        titleMin
        titleMax
        shortDescriptionMin
        shortDescriptionMax
        detailedDescriptionMin
        detailedDescriptionMax
        claimedAtMin
        claimedAtMax
        created_atMin
        created_atMax
        updated_atMin
        updated_atMax
      }
      claimedAggregate {
        count
        titleMin
        titleMax
        shortDescriptionMin
        shortDescriptionMax
        detailedDescriptionMin
        detailedDescriptionMax
        claimedAtMin
        claimedAtMax
        created_atMin
        created_atMax
        updated_atMin
        updated_atMax
      }
      commentsAggregate {
        count
        textMin
        textMax
        created_atMin
        created_atMax
      }
    }
  }
`;
