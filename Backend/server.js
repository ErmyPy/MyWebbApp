const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
