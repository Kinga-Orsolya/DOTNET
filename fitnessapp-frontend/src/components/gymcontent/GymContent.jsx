/**
 * @typedef {import('../../types/DTOOuts/MembershipDTOOut.type.ts').default} MembershipDTOOut
 */
import { useEffect, useState } from "react";
import { BaseApi } from "../../apis/BaseAPI.ts";

const GymContent = () => {
  import("./index.css"); // Ebből a fájlból fogjuk a stílusokat importálni

  /**
   * @type {ReturnType<typeof useState<MembershipDTOOut>>}
   */
  const [formValue, setFormValue] = useState();
  const [isEditing, setIsEditing] = useState(false);

  /**
   * @type {ReturnType<typeof useState<MembershipDTOOut[]>>}
   */
  const [gyms, setGyms] = useState([]);

  // TODO: change hardcoded values to API call
  useEffect(() => {
    async function fetchData() {
      const newGyms = await BaseApi.getAllGyms();
      setGyms(newGyms);
    }
    
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    // Update
    if (isEditing) {
      // TODO: APi call here
      await BaseApi.updateGym(formValue.id, formValue);

      alert(`The gym info has been updated (${formValue.id})`);
      setGyms(gyms.map((g) => (g.id === formValue.id ? formValue : g)));
      setFormValue();
      setIsEditing(false);

      return;
    }

    // Create
    // TODO: APi call here
    await BaseApi.createGym(formValue);

    alert("Gym has been created");
    setGyms([...gyms, formValue]);
    setFormValue();
  }

  async function handleDelete(id) {
    // TODO: APi call here
    await BaseApi.deleteGym(id);

    alert(`Gym had been closed (deleted) (${id})`);

    // Remove from state
    setGyms(gyms?.filter((m) => m.id !== id));
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
      <form className="form-gym">
        <p className="title">Add a New Gym</p>
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
            <th>Id</th>
            <th>Name</th>
            <th>Activation</th>

            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {gyms.map((gym, index) => (
            <tr key={index}>
              <td>{gym.id}</td>
              <td>{gym.name}</td>
              <td>{gym.isActive ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => {
                    setFormValue(gym);
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(gym.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GymContent;
