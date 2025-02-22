// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const QUERY_PAYMENT_ADDRESS = gql`
  query QueryPaymentAddress(
    $filter: PaymentAddressFilter
    $order: PaymentAddressOrder
    $first: Int
    $offset: Int
  ) {
    queryPaymentAddress(
      filter: $filter
      order: $order
      first: $first
      offset: $offset
    ) {
      network
      address
    }
  }
`;
