/* Build a UI that shows a list of users within a database (client-side) and contains the following elements and behaviors:

Requirements
The listbox shows a list of all users in the database. At most one entry can be selected at a time.
By entering a string into the "Search" input, users containing the string will be filtered. The filtering happens immediately without submission or pressing Enter.
"Create" button:
Only enabled when no user is selected and when both name fields are filled.
Upon activation, a new user is created based on the name input fields and added to the database. The input fields are then cleared.
"Update" button:
Only enabled when there is a user selected.
Upon activation, the selected user's name is updated in the database.
"Delete" button:
Only enabled when there is a user selected.
Upon activation, the selected user is removed from the database.
"Cancel" button:
Only enabled when there is a user selected.
Upon activation, any selected user and both name input fields are cleared. */

import { useState } from "react";

export default function UserDatabase() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(null);

  const filteredUser = users.filter((user) => {
    const x = `${user.firstName} ${user.lastName}`;
    return x.includes(search);
  });

  console.log(filteredUser);

  function handleSelectedName(user) {
    setId(user.id);
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }

  function handleCreate() {
    setUsers((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          firstName,
          lastName,
        },
      ];
    });
    handleCancel();
  }

  function handleUpdate() {
    setUsers((prev) => {
      return prev.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            firstName,
            lastName,
          };
        } else return user;
      });
    });
    handleCancel();
  }
  function handleDelete() {
    setUsers((prev) => {
      console.log("id", id);
      return prev.filter((user) => user.id !== id);
    });
    handleCancel();
  }
  function handleCancel() {
    setFirstName("");
    setLastName("");
    setId("");
  }
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="seach"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: "flex", gap: "150px" }}>
        <ul style={{ marginTop: "20px" }}>
          {filteredUser.map((user) => (
            <li onClick={() => handleSelectedName(user)}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label>firstname</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="first name"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label>Lastname</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}
