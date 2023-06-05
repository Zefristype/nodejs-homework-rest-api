const express = require("express");
const contacts = require("../../controllers/contacts");
const { isValidId, validateBody } = require("../../middlewares");
const { authentication } = require("../../middlewares");
const {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
} = require("../../schemas/contact");

const router = express.Router();

router.get("/", authentication, contacts.getContacts);

router.get("/:contactId", authentication, isValidId, contacts.getContactById);

router.post("/", authentication, validateBody(addSchema), contacts.addContact);

router.delete(
  "/:contactId",
  authentication,
  isValidId,
  contacts.deleteContactById
);

router.put(
  "/:contactId",
  authentication,
  validateBody(updateSchema),
  isValidId,
  contacts.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authentication,
  validateBody(updateFavoriteSchema),
  isValidId,
  contacts.updateStatusContact
);

module.exports = router;

