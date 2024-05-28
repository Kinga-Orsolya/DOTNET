type MembershipDTOIn = {
  gymId: number,
  name: string,
  price: number,
  availableDays: number,
  availableEntries: number,
  hoursFrom: string, // TimeSpan type is represented as string in ISO 8601 duration format
  hoursTo: string, // TimeSpan type is represented as string in ISO 8601 duration format
  occasionsPerDay: number,
  isActive: boolean
}

export default MembershipDTOIn;
