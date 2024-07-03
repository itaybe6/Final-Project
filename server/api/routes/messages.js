const express = require('express');
const router = express.Router();
const { createMessage, likeMessage, replyToMessage } = require('../controller/messages');

// יצירת הודעה חדשה
router.post('/messages', createMessage);

// הוספת לייק להודעה
router.post('/messages/:id/like', likeMessage);

// הוספת תגובה להודעה
router.post('/messages/:id/reply', replyToMessage);

module.exports = router;
