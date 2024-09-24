const express = require("express");
const {
  createCard,
  getCards,
  getCard,
  getMyCards,
  updateCard,
  deleteCard,
  likeCard,
} = require("../models/cardsAccessDataService");
const authenticatedUser = require("../../authentication/authService");
const { normalizeCard } = require("../helpers/normalizeCard");
const { handleError } = require("../../utils/handleErrors");
const router = express.Router();

router.post("/", authenticatedUser, async (req, res) => {
  try {
    const userInfo = req.user;
    if (!userInfo.isBusiness) {
      return handleError(res, 403, "Only a business user can create new card");
    }
    let card = await normalizeCard(req.body, userInfo._id);
    card = await createCard(card);
    res.status(201).send(card);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let cards = await getCards();
    res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.get("/my-cards", authenticatedUser, async (req, res) => {
  try {
    const userInfo = req.user;
    if (!userInfo.isBusiness) {
      return handleError(res, 403, "Only a business user can get his cards");}
    let card = await getMyCards(userInfo._id);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let card = await getCard(id);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.put("/:id", authenticatedUser, async (req, res) => {
  try {
    const userInfo = req.user;
    const { id } = req.params;
    const newCard = req.body;

    const fullCardFromDb = await getCard(id);
    if (userInfo._id !== fullCardFromDb.user_id.toString() && !userInfo.isAdmin) {
      return handleError(res, 403, "Authorazation Error: Only the user who created the bussiness card or admin can update its details");
    }
    let card = await normalizeCard(newCard, userInfo._id);
    card = await updateCard(id, newCard);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.delete("/:id", authenticatedUser, async (req, res) => {
  try {
    const { id } = req.params;
    const userInfo = req.user;
    const fullCardFromDb = await getCard(id);
    if (userInfo._id !== fullCardFromDb.user_id.toString() && !userInfo.isAdmin) {
      return handleError(res, 403, "Authorazation Error: Only the user who created the bussiness card or admin can delete it");
    }

    let card = await deleteCard(id);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.patch("/:id", authenticatedUser, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    let card = await likeCard(id, userId);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

module.exports = router;
