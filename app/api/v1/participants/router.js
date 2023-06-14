const express = require('express');
const router = express();
const {
  signup,
  activeParticipant,
  signin,
  getAllLandingPage,
  getDetailLandingPage,
  getDashboard,
  checkout,
  getAllPayment,
  getOneParticipants,
  getAllParticipants,
} = require('./controller');

const { authenticateParticipant ,authorizeRoles} = require('../../../middlewares/auth');

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.put('/active', activeParticipant);
router.get('/events', getAllLandingPage);
router.get('/events/:id', getDetailLandingPage);
router.get('/payments',getAllPayment);
router.get('/payments/:organizer', authenticateParticipant, getAllPayment);
router.get('/orders', authenticateParticipant, getDashboard);
router.post('/checkout', authenticateParticipant, checkout);

router.get('/participants/:id', getOneParticipants);
router.get('/participants', getAllParticipants);


module.exports = router;


