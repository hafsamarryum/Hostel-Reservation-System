const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3002;
/* mongoose.connect("mongodb://localhost:27017/employee"); */
app.use(bodyParser.json());
app.use(cors());
app.post('/contact', (req, res) => {
  const { name, email, messag } = req.body;
  const newContact = new Contact({ name, email, messag });
  newContact.save()
    .then(contact => res.status(201).json(contact))
    .catch(err => res.status(500).json({ error: err.message }));
});
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post("/register", async (req, res) => {
  const { name, email } = req.body;
  try {
    const existingUserByEmail = await Employeemodel.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
    }
    const existingUserByName = await Employeemodel.findOne({ name });
    if (existingUserByName) {
      return res.status(400).json({ message: 'Username already exists. Please choose another one.' });
    }
    const newEmployee = await Employeemodel.create(req.body);
    res.json(newEmployee);
  } catch (err) {
    console.error('Failed to register employee:', err);
    res.status().json({ message: 'Internal server error' });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Employeemodel.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        return res.json("Success");
      } else {
        return res.json("Incorrect password");
      }
    } else {
      return res.json("No record found");
    }
  } catch (err) {
    console.error('Failed to log in:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post("/book", async (req, res) => {
  const { location, /* date, */ timeSlot, name, duration, price } = req.body;
  console.log('Received request with name:', name);
  try {
    const existingUser = await Employeemodel.findOne({ name: name });
    console.log('Existing user:', existingUser);
    if (!existingUser) {
      return res.status(400).json({ message: 'User not registered. Please register before making a booking.' });
    }

    const checked = await Booking.findOne({ location, date, timeSlot });
    if (checked) {
      return res.status(400).json({ message: 'Slot already booked. Please choose another time.' });
    }
    const newBooking = new Booking({ location, /* date, */ timeSlot, name, duration, price });
    await newBooking.save();
    return res.status(200).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error('Failed to book slot:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}); 

app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get("/show", async(req, res) => {
  try {
    const show = await Employeemodel.find();
    res.json(show);
  } catch(error) {
    console.error("failed", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Booking.findByIdAndDelete(id);
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Failed to delete booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post("/owner" , async (req,res) => {
   const {name,email,password} = req.body;
   try{
   const owne = new owner ({name,email,password});
   await owne.save();
   res.json("success");

   }
   catch{
     res.status(500).json({ message: "Failed to create owner", error: error.message });
   }
})
app.post('/ownerlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await owner.findOne({ email });

    if (!user) {
      return res.json("no record found");
    }

    if (user.password !== password) {
      return res.json("incorrect password");
    }

    res.json("succes");

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});