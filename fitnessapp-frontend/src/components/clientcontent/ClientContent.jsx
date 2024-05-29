/**
 * @typedef {import('../../types/DTOOuts/ClientDTOOut.type.ts').default} ClientDTOOut
 */
import { useEffect, useState } from "react";
import { BaseApi } from "../../apis/BaseAPI.ts";

const ClientContent = () => {
  import("./index.css"); // Ebből a fájlból fogjuk a stílusokat importálni

  /**
   * @type {ReturnType<typeof useState<ClientDTOOut>>}
   */
  const [formValue, setFormValue] = useState();
  const [isEditing, setIsEditing] = useState(false);

  /**
   * @type {ReturnType<typeof useState<ClientDTOOut[]>>}
   */
  // const [clients, setClients] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     telephone: "123-456-7890",
  //     photo: new Uint8Array([1, 2, 3]), // Example Uint8Array data
  //     serialNumber: 123456,
  //     address: "123 Main St, Anytown, USA",
  //     barcode: "123456789012",
  //     isActive: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     telephone: "987-654-3210",
  //     photo: new Uint8Array([4, 5, 6]), // Example Uint8Array data
  //     serialNumber: 654321,
  //     address: "456 Elm St, Othertown, USA",
  //     barcode: "210987654321",
  //     isActive: false,
  //   },
  // ]);
  const [clients, setClients] = useState([]);

  // TODO: change hardcoded values to API call
  useEffect(() => {
    async function fetchData() {
      const newClients = await BaseApi.getAllClients();
      setClients(newClients);
    }
    
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    // Update
    if (isEditing) {
      // TODO: APi call here
      await BaseApi.updateClient(formValue.id, formValue);

      alert(`Client has been updated (${formValue.id})`);
      setClients(clients.map((c) => (c.id === formValue.id ? formValue : c)));
      setFormValue();
      setIsEditing(false);

      return;
    }

    // Create
    // TODO: APi call here
    await BaseApi.createClient(formValue);

    alert("Client has been created");
    setClients([...clients, formValue]);
    setFormValue();
  }

  async function handleDelete(id) {
    // TODO: APi call here
    await BaseApi.deleteClient(id);

    alert(`Client deleted (${id})`);

    // Remove from state
    setClients(clients?.filter((c) => c.id !== id));
  }

  // Dynamically updates the formValue variable
  // using the input's name, as a key for the object
  function handleInputChange(e) {
    const newFormValue = formValue ? { ...formValue } : {};
    if (e.target.type === "checkbox") {
      newFormValue[e.target.name] = e.target.checked;
    } else {
      newFormValue[e.target.name] = e.target.value;
    }
    setFormValue(newFormValue);
  }

  return (
    <div className="landing-page">
      {/* Form */}
      <form className="form-client">
        <p className="title">Create Clients </p>
        <label>
          <span>Name</span>
          <input
            className="input"
            placeholder=""
            required
            
            name="name"
            onChange={handleInputChange}
            value={formValue ? formValue.name : ""}
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            className="input"
            placeholder=""
            required
            name="email"
            onChange={handleInputChange}
            value={formValue ? formValue.email : ""}
          />
        </label>
        <label>
          <span>Telephone</span>
          <input
            className="input"
            placeholder=""
            required
            name="telephone"
            onChange={handleInputChange}
            value={formValue ? formValue.telephone : ""}
          />
        </label>

        {/* <label>
          <span>Photo</span>
          <input
            className="input"
            placeholder=""
            required
            name="photo"
            onChange={handleInputChange}
            value={formValue ? formValue.photo : ""}
          />
        </label> */}

        <label>
          <span>Serial Number</span>
          <input
            className="input"
            placeholder=""
            required
            name="serialNumber"
            onChange={handleInputChange}
            value={formValue ? formValue.serialNumber : ""}
          />
        </label>

        <label>
          <span>Address</span>
          <input
            className="input"
            placeholder=""
            required
            name="address"
            onChange={handleInputChange}
            value={formValue ? formValue.address : ""}
          />
        </label>

        <label>
          <span>Barcode</span>
          <input
            className="input"
            placeholder=""
            required
            name="barcode"
            onChange={handleInputChange}
            value={formValue ? formValue.barcode : ""}
          />
        </label>

        <label>
          <span>Activity</span>
          <input
            className="input"
            type="checkbox"
            placeholder=""
            required
            name="isActive"
            onChange={handleInputChange}
            checked={formValue ? Boolean(formValue.isActive) : false}
          />
        </label>

        <button onClick={handleSubmit} type="submit" className="submit">
          {isEditing ? "Update" : "Create"}
        </button>
        {isEditing && (
          <button className="submit" onClick={() => {setFormValue(); setIsEditing(false)}}>
            Clear
          </button>
        )}
      </form>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Photo</th>
            <th>Serial Number</th>
            <th>Address</th>
            <th>Barcode</th>
            <th>Activation</th>

            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.telephone}</td>
              <td>{client.photo}</td>
              <td>{client.serialNumber}</td>
              <td>{client.address}</td>
              <td>{client.barcode}</td>
              <td>{client.isActive ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => {
                    setFormValue(client);
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(client.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientContent;
