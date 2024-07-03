require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
mongoose.connect('mongodb+srv://itay:Itay6236045@cluster0.avnc3zu.mongodb.net/final_project?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// יצירת תיקיית uploads אם לא קיימת
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// הגדרת נתיב סטטי לתיקיית העלאות
app.use('/uploads', express.static('uploads'));

// ניתוב ל-usersRoutes
const usersRoutes = require('./api/routes/users');
app.use('/users', usersRoutes);

// ניתוב ל-messagesRoutes
const messagesRoutes = require('./api/routes/messages');
app.use('/messages', messagesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
