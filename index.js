let contactsList = [
  {
    id: 10,
    fullName: "Thalhah Shafiyurrahman",
    phone: "+62-812-9000-1234",
    email: "thalhah@gmail.com",
    address: {
      street: "Jl. Jambu Blok U No 30",
      streetDetails: "Perumahan Kalibata Indah",
      subDistrict: "Rawajati",
      district: "Pancoran",
      city: "Jakarta Selatan",
      zipCode: "12750",
      country: "Indonesia",
      location: {
        latitude: 6.17539,
        longitude: 106.8271,
      },
    },
  },
  {
    id: 20,
    fullName: "Aisha Rahman",
    phone: "+44-7788-345-221",
    email: "aisha.rahman@outlook.com",
    address: {
      street: "221B Baker Street",
      streetDetails: "Apartment 4B",
      subDistrict: "Marylebone",
      district: "City of Westminster",
      city: "London",
      zipCode: "NW1 6XE",
      country: "United Kingdom",
      location: {
        latitude: 51.5237,
        longitude: -0.1585,
      },
    },
  },
  {
    id: 150,
    fullName: "Kenji Nakamura",
    phone: "+81-90-1234-5678",
    email: "kenji.naka@jmail.jp",
    address: {
      street: "3-2-1 Shibuya",
      streetDetails: "Shibuya-ku Tower Residence",
      subDistrict: "Shibuya",
      district: "Tokyo Prefecture",
      city: "Tokyo",
      zipCode: "150-0002",
      country: "Japan",
      location: {
        latitude: 35.6595,
        longitude: 139.7005,
      },
    },
  },
];

function renderContacts(contacts) {
  const appElement = document.getElementById("app");
  appElement.innerHTML = `<ul id="contacts" class="space-y-4">
    ${contacts.map(renderContact).join("")}
  </ul>`;
}

function renderContact(contact) {
  return `<li class="p-2 border border-black rounded">
    <h2 class="font-bold text-lg">👤 ${contact.fullName}</h2>
    <p>📞 ${contact.phone ?? "-"}</p>
    <p>📧 ${contact.email ?? "-"}</p>
  </li>`;
}

function searchContacts(contacts, keyword) {
  return contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
}

function addContact(
  contacts,
  { fullName = "No Name", phone = null, email = null }
) {
  const newId = contacts.at(-1)?.id + 1 || 1;
  const newContact = { id: newId, fullName, phone, email };
  const updatedContacts = [...contacts, newContact];
  contactsList = updatedContacts;
  renderContacts(contactsList);
}

function deleteContact(contacts, id) {
  contactsList = contacts.filter((c) => c.id !== id);
  renderContacts(contactsList);
}

function editContact(contacts, id, { fullName, phone, email }) {
  contactsList = contacts.map((contact) =>
    contact.id === id
      ? {
          ...contact,
          fullName: fullName ?? contact.fullName,
          phone: phone ?? contact.phone,
          email: email ?? contact.email,
        }
      : contact
  );
  renderContacts(contactsList);
}

// ----------------------------------------------------------

renderContacts(contactsList);
