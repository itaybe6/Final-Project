const Message = require('../models/message');
const User = require('../models/user');

// פונקציה ליצירת הודעה חדשה
exports.createMessage = async (req, res) => {
  const { userId, content } = req.body;

  if (!userId || !content) {
    return res.status(400).json({ message: 'User ID and content are required' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newMessage = new Message({
      user: userId,
      content: content,
      timestamp: new Date(),
      likes: 0,
      likedBy: [],
      replies: []
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// פונקציה להוספת לייק להודעה
exports.likeMessage = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    // בדיקת לייקים כפולים
    if (message.likedBy.includes(userId)) {
      return res.status(400).json({ message: 'User has already liked this message' });
    }

    message.likes += 1;
    message.likedBy.push(userId);
    await message.save();
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// פונקציה להוספת תגובה להודעה
exports.replyToMessage = async (req, res) => {
  const { userId, content } = req.body;

  if (!userId || !content) {
    return res.status(400).json({ message: 'User ID and content are required' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    const reply = {
      user: userId,
      content: content,
      timestamp: new Date()
    };

    message.replies.push(reply);
    await message.save();
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// פונקציה לקבלת כל ההודעות
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('user', 'name profilePic').populate('replies.user', 'name profilePic').populate('likedBy', 'name profilePic');
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
