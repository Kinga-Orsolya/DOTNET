import GymDTOOut from "./GymDTOOut.type";

type MembershipDTOOut = {
  id: number,
  gym: GymDTOOut,
  name: string,
  price: number,
  availableDays: number,
  availableEntries: number,
  hoursFrom: number,
  hoursTo: number,
  occasionsPerDay: number,
  isActive: boolean
}

export default MembershipDTOOut;
