const _ = require("lodash");
const Card = require("../models/mongodb/Card");
const { createError } = require("../../utils/handleErrors");

const generateBizNumber = async () => {
  let cardsCount = await Card.countDocuments();
  if (cardsCount === 9_000_000) {
   const error = new Error("You've reached the maximum card count in your system");
    error.status = 409;
    return createError("Mongoose", error);
  }
  let random;
  do {
    random = _.random(1_000_000, 9_999_999);
  } while (await isBizNumberExists(random));
  return random;
};


const isBizNumberExists = async (bizNumber) => {
  try {
    const cardWithThisBizNumber = await Card.findOne({ bizNumber });
    return Boolean(cardWithThisBizNumber);
  } catch (error) {
    error.status = 500;
    return createError("Mongoose", error);

  }
};
module.exports = { generateBizNumber };