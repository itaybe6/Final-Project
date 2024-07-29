const Message = require('../models/messages');
const User = require('../models/user');

// יצירת הודעה חדשה
exports.createMessage = async (req, res) => {
  const { userId, content, category ,name } = req.body;

  if (!userId || !content || !category) {
    return res.status(400).json({ message: 'User ID, content and category are required' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newMessage = new Message({
      user: userId,
      content: content,
      category: category,
      name : name ,
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

// הוספת לייק להודעה
exports.likeMessage = async (req, res) => {
  const { userId, name, profilePic } = req.body;

  if (!userId || !name || !profilePic) {
    return res.status(400).json({ message: 'User ID, name, and profile picture are required' });
  }

  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    // בדיקה אם המשתמש כבר עשה לייק להודעה
    const userAlreadyLiked = message.likedBy.some(user => user.userId.toString() === userId);
    if (userAlreadyLiked) {
      return res.status(400).json({ message: 'User has already liked this message' });
    }

    // הוספת פרטי המשתמש למערך ה-likedBy
    message.likes += 1;
    message.likedBy.push({ userId, name, profilePic }); // הוספת מזהה, שם ותמונת פרופיל
    await message.save();

    res.status(200).json(message);
  } catch (err) {
    console.error("Error in likeMessage function:", err);
    res.status(500).json({ error: err.message });
  }
};

// הוספת תגובה להודעה
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

// קבלת כל ההודעות לפי קטגוריה
exports.getMessagesByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const messages = await Message.find({ category });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};


exports.getMessageLikes = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id).populate('likedBy', 'name profilePic');
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message.likedBy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}