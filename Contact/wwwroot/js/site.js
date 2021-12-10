const uri = 'api/ContactItems';
let contacts = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
    const addNameTextbox = document.getElementById('add-firstname');
    const addSurnameTextbox = document.getElementById('add-surname');
    const addCompanyTextbox = document.getElementById('add-company');
    const addEmailTextbox = document.getElementById('add-email');
    const addCellphoneTextbox = document.getElementById('add-cellno');

    const contactitem = {
        firstname: addNameTextbox.value.trim(),
        surname: addSurnameTextbox.value.trim(),
        companyname: addCompanyTextbox.value.trim(),
        emailaddress: addEmailTextbox.value.trim(),
        cellphoneno: addCellphoneTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactitem)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addNameTextbox.value = '';
            addSurnameTextbox.value = '';
            addCompanyTextbox.value = '';
            addEmailTextbox.value = '';
            addCellphoneTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item', error));
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to Delete Item', error));
}

function displayEditForm(id) {
    const item = contacts.find(item => item.id === id);

    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-surname').value = item.surname;
    document.getElementById('edit-company').value = item.companyname;
    document.getElementById('edit-email').value = item.emailaddress;
    document.getElementById('edit-cellno').value = item.cellphoneno;

}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        name: document.getElementById('edit-name').value.trim(),
        firstname: document.getElementById('edit-name').value.trim(),
        surname: document.getElementById('edit-surname').value.trim(),
        company: document.getElementById('edit-company').value.trim(),
        email: document.getElementById('edit-email').value.trim(),
        cellno: document.getElementById('edit-cellno').value.trim()
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const textcount = (itemCount === 1) ? 'contact' : 'contacts';

    document.getElementById('counter').innerText = `${itemCount} ${textcount}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('contacts');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        ///editButton.innerText = `${item.id}`;
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode = document.createTextNode(item.name);
        td1.appendChild(textNode);

        let td2 = tr.insertCell(1);
        let textNode2 = document.createTextNode(item.surname);
        td2.appendChild(textNode2);

        let td3 = tr.insertCell(2);
        let textNode3 = document.createTextNode(item.companyname);
        td3.appendChild(textNode3);

        let td4 = tr.insertCell(3);
        let textNode4 = document.createTextNode(item.emailaddress);
        td4.appendChild(textNode4);

        let td5 = tr.insertCell(4);
        let textNode5 = document.createTextNode(item.cellphoneno);
        td5.appendChild(textNode5);

        let td6 = tr.insertCell(5);
        td6.appendChild(editButton);

        let td7 = tr.insertCell(6);
        td7.appendChild(deleteButton);

    });

    contacts = data;
}