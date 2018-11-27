/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from 'web3/eth/contract';
import { TransactionObject, BlockType } from 'web3/eth/types';
import { Callback, EventLog } from 'web3/types';
import { EventEmitter } from 'events';
import { Provider } from 'web3/providers';

export class RequestFactory {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    validateRequestParams(
      _addressArgs: (string)[],
      _uintArgs: (number | string)[],
      _endowment: number | string
    ): TransactionObject<(boolean)[]>;

    isKnownRequest(_address: string): TransactionObject<boolean>;

    getBucket(windowStart: number | string, unit: number | string): TransactionObject<string>;

    unpause(): TransactionObject<void>;

    renounceOwnership(): TransactionObject<void>;

    pause(): TransactionObject<void>;

    transferOwnership(_newOwner: string): TransactionObject<void>;

    createRequest(
      _addressArgs: (string)[],
      _uintArgs: (number | string)[],
      _callData: (string | number[])[]
    ): TransactionObject<string>;

    createValidatedRequest(
      _addressArgs: (string)[],
      _uintArgs: (number | string)[],
      _callData: (string | number[])[]
    ): TransactionObject<string>;

    TIMESTAMP_BUCKET_SIZE(): TransactionObject<string>;
    paused(): TransactionObject<boolean>;
    owner(): TransactionObject<string>;
    transactionRequestCore(): TransactionObject<string>;
    BLOCKS_BUCKET_SIZE(): TransactionObject<string>;
  };
  deploy(options: { data: string; arguments: any[] }): TransactionObject<Contract>;
  events: {
    ValidationError(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    Pause(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    Unpause(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    OwnershipRenounced(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    OwnershipTransferred(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    CloneCreated(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    RequestCreated(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
  getPastEvents(
    event: string,
    options?: {
      filter?: object;
      fromBlock?: BlockType;
      toBlock?: BlockType;
      topics?: (null | string)[];
    },
    cb?: Callback<EventLog[]>
  ): Promise<EventLog[]>;
  setProvider(provider: Provider): void;
}
