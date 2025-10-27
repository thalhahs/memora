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
  const q = new URLSearchParams(window.location.search).get("q");
  document.getElementById("q").value = q || "";

  const list = q ? searchContacts(contacts, q) : contacts;
  document.getElementById("app").innerHTML = `
    <ul id="contacts" class="space-y-4">
      ${list.map(renderContact).join("")}
    </ul>`;
}

function renderContact({ id, fullName, phone, email }) {
  return `
    <li class="p-2 border border-black rounded flex justify-between">
      <div>
        <h2 class="font-bold text-lg">👤 ${fullName}</h2>
        <p>📞 ${phone ?? "-"}</p>
        <p>📧 ${email ?? "-"}</p>
      </div>
      <button 
        onclick="deleteContact(contactsList, ${id})"
        class="bg-red-700 text-white text-xs px-1 py-0.5 rounded">
        Delete
      </button>
    </li>`;
}

function deleteContact(contacts, id) {
  contactsList = contacts.filter(c => c.id !== id);
  renderContacts(contactsList);
}

function searchContacts(contacts, keyword) {
  keyword = keyword.toLowerCase();
  return contacts.filter(c => c.fullName.toLowerCase().includes(keyword));
}

function addContact(contacts, contactData) {
  const newId = contacts.at(-1)?.id + 1 || 1;
  const newContact = { id: newId, ...contactData };
  contactsList = [...contacts, newContact];
  renderContacts(contactsList);
}

function editContact(contacts, id, updates) {
  contactsList = contacts.map(c => 
    c.id === id ? { ...c, ...Object.fromEntries(Object.entries(updates).filter(([_, v]) => v)) } : c
  );
}

// ------------------------------------------------------------------

const addContactFormElement = document.getElementById("add-contact-form");

addContactFormElement.addEventListener("submit", e => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(addContactFormElement).entries());
  addContact(contactsList, formData);
});

renderContacts(contactsList);

// addContact(contactsList, { fullName: "Grandhist", phone: "+62-139-871-9273", email: "grand@gmail.com" });
// deleteContact(contactsList, 20);
// editContact(contactsList, 150, { phone: "+81-90-9999-0000" });
// console.log(contactsList);