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

function showContacts(contacts) {
  contacts.forEach((contact) => renderContact(contact));
}

function renderSeparatorLine() {
  console.log("-----------------------------------");
}

function renderContact(contact) {
  console.log(`
    🙎🏻‍♂️ ${contact.fullName}
    📞 ${contact.phone}
    📧 ${contact.email}
    `);
}

function searchContacts(contacts, keyword) {
  const foundContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  return foundContacts;
}

function addContact(
  contacts,
  fullName = "No Name",
  phone = null,
  email = null
) {
  const newId = contacts[contacts.length - 1].id + 1;

  const newContact = {
    id: newId,
    fullName: fullName,
    phone: phone,
    email: email,
  };

  const updatedContacts = [...contacts, newContact];

  contactsList = updatedContacts;
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);

  contactsList = updatedContacts;
}

function editContact(contacts, id, updatedData) {
  // TODO: Implement again

  contactsList = updatedContacts;

  console.log(`✅ Contact "${updatedContact.fullName}" successfully updated.`);
}

// const searchResults = searchContacts(contactsList, "thalhah");
// showContacts(searchResults);

// addContact(contactsList, "Grandhist", "+621398719273", "grand@gmail.com")

deleteContact(contactsList, 10);

console.log(contactsList);
