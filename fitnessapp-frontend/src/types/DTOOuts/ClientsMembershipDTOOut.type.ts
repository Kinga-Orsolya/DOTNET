import ClientDTOOut from "./ClientDTOOut.type";
import MembershipDTOOut from "./MembershipDTOOut.type";

type ClientsMembershipDTOOut = {
  id: number,
  client: ClientDTOOut,
  membership: MembershipDTOOut,
  boughtAtDate: string,
  boughtAtPrice: number,
  barcode: string,
  entriesCount: number,
  usedFirstAt: string,
  isActive: boolean
}

export default ClientsMembershipDTOOut;
