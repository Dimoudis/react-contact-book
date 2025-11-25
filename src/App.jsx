import { useState } from "react";

export const ContactApp = () => {
  const [contacts, setContacts] = useState([
    { name: "John", email: "john@example.com", phone: "2101234567" },
    { name: "Manolis", email: "manolis@example.com", phone: "2107654321" },
    { name: "Sofia", email: "sofia@example.com", phone: "2109876543" },
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (emailToDelete) => {
    setContacts(contacts.filter(contact => contact.email !== emailToDelete));
  }

  return (
    <div>
      <h1>Contact Book</h1>

      {/* Button to add a new contact */}
      <button onClick={() => addContact({
        name: "George",
        email: "george@example.com",
        phone: "2109876540"
      })}>
        Add New Contact
      </button>

      {/* Delete button for a contact  (hard-coded email)*/}
          <button onClick={() => deleteContact("manolis@example.com")}>Delete Contact</button>

      <h2>All Contacts:</h2>

      {/* Loop through each contact */}
      {contacts.map((person) => (
        <div key={person.email} style={{ marginBottom: "2rem" }}>
          <p>Name: {person.name}</p>
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>

          {/* Delete button for a specific contact */}
          <button onClick={() => deleteContact(person.email)}>Delete</button>
        </div>
      ))}
    </div>
  );
};