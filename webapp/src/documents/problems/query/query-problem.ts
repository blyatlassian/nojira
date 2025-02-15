// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const QUERY_PROBLEM = gql`
  query QueryProblem(
    $filter: ProblemFilter
    $order: ProblemOrder
    $first: Int
    $offset: Int
  ) {
    queryProblem(
      filter: $filter
      order: $order
      first: $first
      offset: $offset
    ) {
      id
      creator {
        name
        github
        email
        telegram
        rate
        actionHistory
      }
      causedBy {
        id
        url
        description
        costUSD
        created_at
        updated_at
      }
      claimedBy {
        name
        github
        email
        telegram
        rate
        actionHistory
      }
      title
      shortDescription
      detailedDescription
      orgs {
        name
        githubOrg
      }
      status
      claimedAt
      repository {
        http
        git
      }
      requiredSkills
      maintainers {
        name
        github
        email
        telegram
        rate
        actionHistory
      }
      created_at
      updated_at
      comments {
        id
        text
        created_at
        associatedStatus
      }
      solutions {
        id
        url
        description
        costUSD
        created_at
        updated_at
      }
      parentsAggregate {
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
      childrenAggregate {
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
      orgsAggregate {
        count
        nameMin
        nameMax
        githubOrgMin
        githubOrgMax
      }
      repositoryAggregate {
        count
        httpMin
        httpMax
        gitMin
        gitMax
      }
      maintainersAggregate {
        count
        nameMin
        nameMax
        githubMin
        githubMax
        emailMin
        emailMax
        telegramMin
        telegramMax
        rateMin
        rateMax
        rateSum
        rateAvg
      }
      commentsAggregate {
        count
        textMin
        textMax
        created_atMin
        created_atMax
      }
      solutionsAggregate {
        count
        urlMin
        urlMax
        descriptionMin
        descriptionMax
        costUSDMin
        costUSDMax
        costUSDSum
        costUSDAvg
        created_atMin
        created_atMax
        updated_atMin
        updated_atMax
      }
    }
  }
`;
