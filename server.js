const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'presentation.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Open this link in your browser to start the presentation!`);
});