const express = require('express');     // Import Express
const cors = require('cors');           // Import CORS
require('dotenv').config();             // Load environment variables

const app = express();                  // Create Express app
const PORT = process.env.PORT || 5000;  // Set port from env or default to 5000

app.use(cors());                        // Enable CORS for all routes
app.use(express.json());               // Parse JSON request bodies

// Test API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });  // Send a JSON response
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
