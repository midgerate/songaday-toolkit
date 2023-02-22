export const ROUTES = [
  {
    path: '/create-image',
    name: 'Create Image',
    description: 'Create a new image and metadata from attributes',
  },
  {
    path: '/upload',
    name: 'Upload to IPFS',
    description: 'Upload anything to IPFS (Video, Image, Metadata)',
  },
  {
    path: '/upload-edition',
    name: 'Upload Edition to IPFS',
    description: 'Upload an ERC1155-Edition to IPFS (Video, Image, Metadata)',
  },
  {
    path: '/mint',
    name: 'Mint Song',
    description: 'Mint a new song by giving IPFS hash of the metadata',
  },
  {
    path: '/mint-edition',
    name: 'Mint Edition',
    description: 'Mint a song edition by giving IPFS hash of the metadata',
  },
  {
    path: '/auctions',
    name: 'Auctions',
    description: 'Create, Start and End the Auction',
  },
  {
    path: '/bulk',
    name: 'Bulk Actions',
    description:
      'Generate images, metadata in bulk by uploading the CSV of the year',
  },
  {
    path: '/admin',
    name: 'Admin',
    description: 'Other contract admin actions like changing the owner',
  },
  {
    path: '/index-songs',
    name: 'Index Songs',
    description: 'Index all songs in the Song A Day contract',
  },
]

export const AUCTION_ROUTES = [
  {
    path: '/auctions/create',
    name: 'Create Auction - Zora',
    description: 'Create auction for a newly minted song',
  },
  {
    path: '/auctions/mint-and-auction',
    name: 'Mint and Auction - Zora',
    description:
      'Gnosis Only - Mint, Create auction and start auction at the same time.',
  },
  {
    path: '/auctions/create-gbm',
    name: 'Create Auction - GBM',
    description: 'Create auction for a newly minted song',
  },
  {
    path: '/auctions/mint-and-auction-gbm',
    name: 'Mint and Auction - GBM',
    description:
      'Gnosis Only - Mint, Create auction and start auction at the same time.',
  },
]

export const ADMIN_ROUTES = [
  {
    path: '/admin/change-owner',
    name: 'Change Owner',
    description: 'Change the owner of the contract',
  },
  {
    path: '/admin/find-owner',
    name: 'Find Owner',
    description: 'Find the owner of the song and the contract',
  },
  {
    path: '/admin/batch-mint',
    name: 'Batch Mint',
    description:
      'Mint pre determined songs before the SAD drop (One Time Action)',
  },
  {
    path: '/admin/refresh-metadata',
    name: 'Refresh Metadata',
    description: 'Refresh the metadata of all the songs on opensea',
  },
  {
    path: '/admin/repair-metadata',
    name: 'Repair Metadata',
    description: 'Repair the metadata of a song',
  },
]

export const BULK_ROUTES = [
  {
    path: '/bulk/image',
    name: 'Generate Images',
    description: 'Generate images from CSV file',
  },
  {
    path: '/bulk/metadata',
    name: 'Generate Metadata',
    description: 'Generate metadata from CSV file',
  },
]

export const CHAIN_ID = '0x1'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
// export const SONG_CONTRACT = '0x0dB2f6BfDfF090e3c8Eef8eA5686bb1589611424'
export const SONG_CONTRACT = '0x19b703f65aA7E1E775BD06c2aa0D0d08c80f1C45'

export const SONG_EDITION_CONTRACT = '0xe84C1dDB51ad3E35123150F60c9d743E7ca0BD0D'
export const SONG_EDITION_CHAIN_ID = '0xa4b1'

export const TREASURY_CONTRACT = '0x2a2C412c440Dfb0E7cae46EFF581e3E26aFd1Cd0'

export const GBM_CONTRACT = '0xd736d2c76fba2ba5a217fd4edfa1b231deeeb29d'
export const GBM_INITIATOR_CONTRACT = '0xc3f71feebd2ac213cacb5da33b4ddb38d0f163ca'

export const BATCH_IDS = [
  1502, 1513, 1845, 1952, 1983, 2509, 3025, 3515, 3591, 4140, 4406, 4410, 4415,
  4421, 4422, 4434, 4446, 4449, 4454, 4456, 4458, 4467, 4486, 4487, 4493, 4494,
  4511, 4515, 4528, 4534, 4538, 4544, 4546, 4550, 4563, 4587, 4593, 4606, 4666,
  4697,
]
export const BATCH_OWNERS = [
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
  '0x01afc8ff608bfbe4b18f53d004ea7d1023bcda3f',
]
