type ClientsMembershipDTOIn = {
  clientId: number,
  membershipId: number,
  boughtAtDate: Date,
  boughtAtPrice: number,
  barcode: string,
  entriesCount: number,
  usedFirstAt: Date,
  isActive: boolean
}

export default ClientsMembershipDTOIn;
