type ClientDTOOut = {
  id: number,
  name: string,
  email: string,
  telephone: string,
  photo: Uint8Array,
  serialNumber: number,
  address: string,
  barcode: string,
  isActive: boolean
}

export default ClientDTOOut;