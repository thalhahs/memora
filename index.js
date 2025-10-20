console.log("📒 Memora");

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
  return contacts.filter((c) =>
    c.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
}

// ✅ Fungsi addContact yang sudah dilengkapi
function addContact(contacts, { fullName = "-", phone = "-", email = "-" }) {
  const newId = contacts.at(-1)?.id + 1 || 1;
  const newContact = { id: newId, fullName, phone, email };
  const updatedContacts = [...contacts, newContact];
  contactsList = updatedContacts;
  renderContacts(contactsList);
  console.log("✅ Contact added:", newContact);
}

// ✅ Fungsi deleteContact yang simple dan konsisten
function deleteContact(contacts, id) {
  contactsList = contacts.filter((c) => c.id !== id);
  renderContacts(contactsList);
  console.log(`🗑️ Contact with id ${id} deleted.`);
}

// ✅ Fungsi editContact tetap sama
function editContact(contacts, id, { fullName, phone, email }) {
  contactsList = contacts.map((c) =>
    c.id === id
      ? {
          ...c,
          fullName: fullName ?? c.fullName,
          phone: phone ?? c.phone,
          email: email ?? c.email,
        }
      : c
  );
  renderContacts(contactsList);
  console.log(`✏️ Contact with id ${id} updated.`);
}

// ----------------------------------------------------------

renderContacts(contactsList);

// addContact(contactsList, { fullName: "Grandhist", phone: "+62-139-871-9273", email: "grand@gmail.com" });
// deleteContact(contactsList, 20);
// editContact(contactsList, 150, { phone: "+81-90-9999-0000" });
// const result = searchContacts(contactsList, "thalhah");
// console.log(result);