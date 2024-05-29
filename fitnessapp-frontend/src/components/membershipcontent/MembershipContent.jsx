/**
 * @typedef {import('../../types/DTOOuts/MembershipDTOOut.type.ts').default} MembershipDTOOut
 */
import { useState } from "react";

const MembershipContent = () => {
  import("./index.css"); // Ebből a fájlból fogjuk a stílusokat importálni

  /**
   * @type {ReturnType<typeof useState<MembershipDTOOut>>}
   */
  const [formValue, setFormValue] = useState();
  const [isEditing, setIsEditing] = useState(false);

  /**
   * @type {ReturnType<typeof useState<MembershipDTOOut[]>>}
   */
  const [memberships, setMemberships] = useState([
    {
        id: 1,
        gymId: 101,
        name: "Standard Membership",
        price: 49.99,
        availableDays: 30,
        availableEntries: 20,
        hoursFrom: "PT6H", // 06:00 AM in ISO 8601 duration format
        hoursTo: "PT22H", // 10:00 PM in ISO 8601 duration format
        occasionsPerDay: 1,
        isActive: true
    },
    {
        id: 2,
        gymId: 101,
        name: "Premium Membership",
        price: 79.99,
        availableDays: 30,
        availableEntries: 30,
        hoursFrom: "PT5H", // 05:00 AM in ISO 8601 duration format
        hoursTo: "PT23H", // 11:00 PM in ISO 8601 duration format
        occasionsPerDay: 2,
        isActive: true
    },
  ]);

  // TODO: change hardcoded values to API call

  function handleSubmit(e) {
    e.preventDefault();

    // Update
    if (isEditing) {
      // TODO: APi call here
      alert(`The membership has been updated (${formValue.id})`);
      setMemberships(memberships.map((m) => (m.id === formValue.id ? formValue : m)));
      setFormValue();
      setIsEditing(false);
      return;
    }

    // Create
    // TODO: APi call here
    alert("Membership has been created");
    setMemberships([...memberships, formValue]);
    setFormValue();
  }

  function handleDelete(id) {
    // TODO: APi call here

    alert(`Membership deleted (${id})`);

    // Remove from state
    setMemberships(memberships?.filter((m) => m.id !== id));
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
      <form className="form-membership">
        <p className="title">Create Memberships </p>
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
          <span>Price</span>
          <input
            type="price"
            className="input"
            placeholder=""
            required
            name="price"
            onChange={handleInputChange}
            value={formValue ? formValue.price : ""}
          />
        </label>
        <label>
          <span>Available Days</span>
          <input
            className="input"
            placeholder=""
            required
            name="availableDays"
            onChange={handleInputChange}
            value={formValue ? formValue.availableDays : ""}
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
          <span>Available Entries</span>
          <input
            className="input"
            placeholder=""
            required
            name="availableEntries"
            onChange={handleInputChange}
            value={formValue ? formValue.availableEntries : ""}
          />
        </label>

        <label>
          <span>From Hours</span>
          <input
            className="input"
            placeholder=""
            required
            name="hoursFrom"
            onChange={handleInputChange}
            value={formValue ? formValue.hoursFrom : ""}
          />
        </label>

        <label>
          <span>To Hours</span>
          <input
            className="input"
            placeholder=""
            required
            name="hoursTo"
            onChange={handleInputChange}
            value={formValue ? formValue.hoursTo : ""}
          />
        </label>

        <label>
          <span>Occassions/Days</span>
          <input
            className="input"
            placeholder=""
            required
            name="ocassionsPerDay"
            onChange={handleInputChange}
            value={formValue ? formValue.occasionsPerDay : ""}
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
            <th>Price</th>
            <th>Available for Days</th>
            <th>Available Entries</th>
            <th>Hours From</th>
            <th>Hours To</th>
            <th>Ocassions/Day</th>
            <th>Activation</th>

            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {memberships.map((membership, index) => (
            <tr key={index}>
              <td>{membership.name}</td>
              <td>{membership.price}</td>
              <td>{membership.availableDays}</td>
              <td>{membership.availableEntries}</td>
              <td>{membership.hoursFrom}</td>
              <td>{membership.hoursTo}</td>
              <td>{membership.occasionsPerDay}</td>
              <td>{membership.isActive ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => {
                    setFormValue(membership);
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(membership.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembershipContent;
