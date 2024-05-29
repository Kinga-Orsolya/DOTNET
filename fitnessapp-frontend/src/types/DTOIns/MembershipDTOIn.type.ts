type MembershipDTOIn = {
  gymId: number,
  name: string,
  price: number,
  availableDays: number,
  availableEntries: number,
  hoursFrom: number,
  hoursTo: number,
  occasionsPerDay: number,
  isActive: boolean
}

export default MembershipDTOIn;
