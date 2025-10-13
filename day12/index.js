console.log("📒 Memora — Batch 10");

// ======= Contacts =======
const contactsList = [
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

// ======= Functions =======

/**
 * Show all contacts
 * @param {Array} contacts - list of contact objects
 * @param {boolean} showAddress - show full address info if true
 */
const showContacts = (contacts, showAddress = false) => {
  console.log("\n========== CONTACT LIST ==========");
  contacts.forEach((contact) => showContact(contact, showAddress));
  console.log("=================================\n");
};

/**
 * Show a single contact's basic info
 * @param {Object} contact
 * @param {boolean} showAddress
 */
const showContact = (contact, showAddress = false) => {
  console.log(`
👤 ${contact.fullName}
📞 ${contact.phone}
📧 ${contact.email}
  `);

  if (showAddress && contact.address) {
    const a = contact.address;
    console.log(`🏠 ${a.street}, ${a.city}, ${a.country}`);
  }
};

/**
 * Search contacts by keyword
 * @param {Array} contacts
 * @param {string} keyword
 * @returns {Array}
 */
const searchContacts = (contacts, keyword) => {
  return contacts.filter((c) =>
    c.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
};

// Future features
const addContact = (contacts, newContact) => [...contacts, newContact];
const deleteContact = (contacts, id) => contacts.filter((c) => c.id !== id);
const editContact = (contacts, id, updatedData) =>
  contacts.map((c) => (c.id === id ? { ...c, ...updatedData } : c));

// ======= Example Usage =======
const results = searchContacts(contactsList, "thalhah");
showContacts(results, true);
