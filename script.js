let contacts = [];

function renderContacts() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${contact.name} - ${contact.phone}
            <button onclick="editContact(${index})">Editar</button>
            <button onclick="deleteContact(${index})">Excluir</button>
        `;
        contactList.appendChild(li);
    });
}

function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone) {
        contacts.push({ name, phone, email });
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        renderContacts();
    } else {
        alert('Nome e telefone são obrigatórios.');
    }
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    contacts.splice(index, 1);
    renderContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

// Inicializa a lista de contatos
renderContacts();
