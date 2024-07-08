const express = require('express');
const router = express.Router();
const { createMessage, likeMessage, replyToMessage, getAllMessages } = require('../controller/messages');

// יצירת הודעה חדשה
router.post('/', createMessage);

// הוספת לייק להודעה
router.post('/:id/like', likeMessage);

// הוספת תגובה להודעה
router.post('/:id/reply', replyToMessage);

// קבלת כל ההודעות
router.get('/', getAllMessages);

module.exports = router;
