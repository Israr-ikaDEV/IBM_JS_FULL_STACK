const express = require('express');
const app = express();


app.use(express.json());


let students = [
  { id: 1, name: 'Israr', email: 'israr@example.com' },
  { id: 2, name: 'Abdulhanan', email: 'abdulhanan@example.com' },
  { id: 3, name: 'Ayesha', email: 'ayesha@example.com' },
  { id: 4, name: 'Abdulwahab', email: 'abdulwahab@example.com' },
  { id: 5, name: 'bilal', email: 'bilal@example.com' },
  { id: 6, name: 'shoaib', email: 'shoaib@example.com' },
  { id: 7, name: 'aqeel', email: 'aqeel@example.com' },
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Student API 🚀');
});


app.get('/students', (req, res) => {
  res.json(students);
});


app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});


app.put('/students/update/:id', (req, res) => {
   const { name, email } = req.body;
  const student = students.find(s => s.id == req.params.id);

  if (!student) return res.status(404).send('Student not found!');
  if (!name && !email)
    return res.status(400).send('Provide at least one  (name or email) to update.');

 
  if (name) student.name = name;
  if (email) student.email = email;

  console.log('✏️ Student updated:', student);
  res.send(`Student with ID ${req.params.id} updated successfully!`);
});


app.delete('/students/delete/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id == req.params.id);
  if (studentIndex === -1) return res.status(404).send('Student not found!');

 
  students.splice(studentIndex, 1);
  console.log('Student deleted:', req.params.id);
  res.send(`Student with ID ${req.params.id} deleted successfully!`);
});

app.post('/students/new', (req, res) => {
  const { id, name, email } = req.body;

  // Check if student with the same ID already exists
  const existingStudent = students.find(s => s.id === id);
  if (existingStudent) {
    return res.status(400).send('Student with this ID already exists!');
  }

  // Create new student object
  const newStudent = { id, name, email };
  students.push(newStudent);
  console.log('🎉 New student added:', newStudent);
  res.status(201).send('New student added successfully!');
});




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});