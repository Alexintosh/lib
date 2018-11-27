// tslint:disable
export default [
  {
    constant: false,
    inputs: [],
    name: 'unpause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'TIMESTAMP_BUCKET_SIZE',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'paused',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'pause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'transactionRequestCore',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'BLOCKS_BUCKET_SIZE',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        name: '_transactionRequestCore',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'error',
        type: 'uint8'
      }
    ],
    name: 'ValidationError',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Pause',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Unpause',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipRenounced',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'target',
        type: 'address'
      },
      {
        indexed: false,
        name: 'clone',
        type: 'address'
      }
    ],
    name: 'CloneCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'request',
        type: 'address'
      },
      {
        indexed: true,
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        name: 'bucket',
        type: 'int256'
      },
      {
        indexed: false,
        name: 'params',
        type: 'uint256[12]'
      }
    ],
    name: 'RequestCreated',
    type: 'event'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_addressArgs',
        type: 'address[3]'
      },
      {
        name: '_uintArgs',
        type: 'uint256[12]'
      },
      {
        name: '_callData',
        type: 'bytes'
      }
    ],
    name: 'createRequest',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_addressArgs',
        type: 'address[3]'
      },
      {
        name: '_uintArgs',
        type: 'uint256[12]'
      },
      {
        name: '_callData',
        type: 'bytes'
      }
    ],
    name: 'createValidatedRequest',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_addressArgs',
        type: 'address[3]'
      },
      {
        name: '_uintArgs',
        type: 'uint256[12]'
      },
      {
        name: '_endowment',
        type: 'uint256'
      }
    ],
    name: 'validateRequestParams',
    outputs: [
      {
        name: '',
        type: 'bool[6]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_address',
        type: 'address'
      }
    ],
    name: 'isKnownRequest',
    outputs: [
      {
        name: 'isKnown',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'windowStart',
        type: 'uint256'
      },
      {
        name: 'unit',
        type: 'uint8'
      }
    ],
    name: 'getBucket',
    outputs: [
      {
        name: '',
        type: 'int256'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  }
];
