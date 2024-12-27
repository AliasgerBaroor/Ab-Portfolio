const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config({ path: '.env.local' });

const app = express();

const { DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
const connectionStr = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wvfmfrm.mongodb.net/${DB_DATABASE}`;

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
});

const contactClient = mongoose.model('contact', contactSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/add/message', async (req, res) => {

  let formatedData = {
      name: req.body.name.trim(),
      subject: req.body.subject.trim(),
      message: req.body.message.trim(),
      email:"",
      phone:"",
  }
  const contact = req.body.contact.trim()
    if(isNaN(contact))  formatedData.email = contact;
    else formatedData.phone = String(contact);
  try {
    const response_add_message = await contactClient.create(formatedData);
    res.status(201).send({ status: 201, data: response_add_message });
  } catch (error) {
    res.status(500).send({ status: 500, error: error.message });
  }
});

const port = process.env.SERVERPORT || 8020;
app.listen(port, () => {
  console.log('Server running on port: ' + port);
});
