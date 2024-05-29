import ClientDTOOut from "./ClientDTOOut.type";
import MembershipDTOOut from "./MembershipDTOOut.type";

type EntryDTOOut = {
  id: number,
  client: ClientDTOOut,
  membership: MembershipDTOOut,
  date: string,
  barcode: string,
  insertedByUid: number
}

export default EntryDTOOut;
