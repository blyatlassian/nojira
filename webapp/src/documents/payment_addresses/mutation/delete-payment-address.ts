// THIS FILE IS AUTOGENERATED. DO NOT EDIT.
import { gql } from '@apollo/client';

export const DELETE_PAYMENT_ADDRESS = gql`
  mutation DeletePaymentAddress($filter: PaymentAddressFilter!) {
    deletePaymentAddress(filter: $filter) {
      paymentAddress {
        network
        address
      }
      msg
      numUids
    }
  }
`;
