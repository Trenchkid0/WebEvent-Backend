const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const authCMSRouter = require("../app/api/v1/auth/router");
const categoriesRouter = require("../app/api/v1/categories/router");
const talentsRouter = require("../app/api/v1/talents/router");
const imagesRouter = require("../app/api/v1/images/router");
const eventsRouter = require("../app/api/v1/events/router");
const organizersRouter = require("../app/api/v1/organizers/router");
const userRefreshTokenRouter = require("../app/api/v1/userRefreshToken/router");
const paymentsRouter = require("../app/api/v1/payments/router");
const ordersRouter = require("../app/api/v1/orders/router");
const participantsRouter = require("../app/api/v1/participants/router");
const urlV1 = "/api/v1/cms";

const notFoundMiddleware = require("../app/middlewares/not-found");
const handleErrorMiddleware = require("../app/middlewares/handler-error");

const index = express();
index.use(cors());
index.use(logger("dev"));
index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(cookieParser());
index.use(express.static(path.join(__dirname, "public")));

index.use(`${urlV1}/categories`, categoriesRouter);
index.use(`${urlV1}/talents`, talentsRouter);
index.use(`${urlV1}/images`, imagesRouter);
index.use(`${urlV1}/events`, eventsRouter);
index.use(`${urlV1}/organizers`, organizersRouter);
index.use(`${urlV1}/auth`, authCMSRouter);
index.use(`${urlV1}/refresh-token`, userRefreshTokenRouter);
index.use(`${urlV1}/payments`, paymentsRouter);
index.use(`${urlV1}/orders`, ordersRouter);
index.use(`/api/v1`, participantsRouter);

index.use(notFoundMiddleware);
index.use(handleErrorMiddleware);

module.exports = index;
