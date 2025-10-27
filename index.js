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
  // TODO: Implement logic to get search query
  // use filteredContacts variable

  const hasContacts = contacts.length > 0;

  document.getElementById("app").innerHTML = `
    <ul id="contacts" class="space-y-4">
      ${
        hasContacts
          ? contacts.map(renderContact).join("")
          : "<p class='text-center text-gray-500'>No contacts found.</p>"
      }
    </ul>`;
}

function renderContact({ id, fullName, phone, email }) {
  return `
    <li class="p-3 border border-gray-400 rounded-lg flex justify-between items-center bg-white">
      <div>
        <h2 class="font-bold text-lg">👤 ${fullName}</h2>
        <p>📞 ${phone}</p>
        <p>📧 ${email}</p>
      </div>
      <button 
        onclick="deleteContact(${id})"
        class="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded">
        Delete
      </button>
    </li>`;
}

function deleteContact(id) {
  contactsList = contactsList.filter((c) => c.id !== id);
  renderContacts(contactsList);
}

function addContact(contacts, contactData) {
  const newId = contacts.at(-1)?.id + 1 || 1;
  const newContact = { id: newId, ...contactData };
  contactsList = [...contacts, newContact];
  renderContacts(contactsList);
}

const addContactFormElement = document.getElementById("add-contact-form");

addContactFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(
    new FormData(addContactFormElement).entries()
  );
  addContact(contactsList, formData);
  addContactFormElement.reset();
});

renderContacts(contactsList);

// TODO: Edit?
