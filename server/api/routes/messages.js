const express = require('express');
const router = express.Router();
const { createMessage, likeMessage, replyToMessage, getMessagesByCategory, getAllMessages } = require('../controller/messages');

router.post('/', createMessage);
router.post('/:id/like', likeMessage);
router.post('/:id/reply', replyToMessage);
router.get('/category/:category', getMessagesByCategory);
router.get('/', getAllMessages);

module.exports = router;
