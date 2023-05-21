const express = require("express");
const contacts = require("../../controllers/contacts");
const { isValidId } = require("../../helpers");
const router = express.Router();

router.get("/", contacts.getContacts);

router.get("/:contactId", isValidId, contacts.getContactById);

router.post("/", contacts.addContact);

router.delete("/:contactId", isValidId, contacts.deleteContactById);

router.put("/:contactId", isValidId, contacts.updateContactById);

router.patch("/:contactId/favorite", isValidId, contacts.updateStatusContact);

module.exports = router;
