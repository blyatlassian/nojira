// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const AGGREGATE_PAYMENT_ADDRESS = gql`
  query AggregatePaymentAddress($filter: PaymentAddressFilter) {
    aggregatePaymentAddress(filter: $filter) {
      count
      networkMin
      networkMax
      addressMin
      addressMax
    }
  }
`;
