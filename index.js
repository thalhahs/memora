console.log("📒 Memora");

let contactsList = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  contacts.forEach((contact) => renderContact(contact))
}

function renderSeparatorLine() {
  console.log("-----------------------------------")
}

function renderContact(contact) {
  console.log(`
    🙎🏻‍♂️ ${contact.fullName}
    📞 ${contact.phone}
    📧 ${contact.email}
    `);
}

function searchContacts(contacts, keyword) {
  return contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
}

function addContact(fullName = "No Name", phone = null, email = null){
  const newContact = {
    fullName: fullName,
    phone: phone,
    email: email,
  };

  console.log(newContact);
}


  //const searchResults = searchContacts(contactsList, "thalhah");
  //showContacts(searchResults);

  addContact("Grandhist", "+621398719273", "grand@gmail.com")