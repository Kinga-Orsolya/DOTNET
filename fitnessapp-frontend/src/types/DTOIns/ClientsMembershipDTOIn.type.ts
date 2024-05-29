type ClientsMembershipDTOIn = {
  clientId: number,
  membershipId: number,
  boughtAtDate: string,
  boughtAtPrice: number,
  barcode: string,
  entriesCount: number,
  usedFirstAt: string,
  isActive: boolean
}

export default ClientsMembershipDTOIn;
