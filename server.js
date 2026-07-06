const express = require("express");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to CareerConnect API!");
});

// GET all jobs
app.get("/api/jobs", (req, res) => {
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Google",
            location: "Bangalore",
            salary: "12 LPA"
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "Microsoft",
            location: "Hyderabad",
            salary: "15 LPA"
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Adobe",
            location: "Noida",
            salary: "10 LPA"
        }
    ];

    res.json(jobs);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});