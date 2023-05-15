const express = require("express");
const contacts = require("../../controllers/contacts");
const router = express.Router();

router.get("/", contacts.getAll);

router.get("/:contactId", contacts.getById);

router.post("/", contacts.add);

router.delete("/:contactId", contacts.deleteById);

router.put("/:contactId", contacts.updateById);

module.exports = router;
