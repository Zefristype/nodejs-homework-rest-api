const fs = require("fs").promises;
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const list = await listContacts();
  const contact = list.find(({ id }) => id === contactId);
  return contact || null;
};

const removeContact = async (contactId) => {
  const list = await listContacts();
  const index = list.findIndex(({ id }) => id === contactId);
  if (index === -1) {
    return null;
  }
  const [contact] = list.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
  return contact;
};

const addContact = async (body) => {
  const list = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };
  list.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const list = await listContacts();
  const index = list.findIndex(({ id }) => id === contactId);
  if (index === -1) {
    return null;
  }
  const prevContact = list.find(({ id }) => id === contactId);
  const updatedContact = {
    ...prevContact,
    id: contactId,
    ...body,
  };
  list[index] = updatedContact;
  await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
  return list[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
