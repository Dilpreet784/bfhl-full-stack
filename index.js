const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST /bfhl - Process data
app.post("/bfhl", (req, res) => {
    let data = req.body.data || [];
    let numbers = data.filter((item) => !isNaN(item));
    let alphabets = data.filter((item) => isNaN(item));
    let highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "your_name_ddmmyyyy",
        email: "your_email@example.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_alphabet,
    });
});

// GET /bfhl - Return operation code
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
