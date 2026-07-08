const express = require("express");

const app = express();

app.use(express.json());

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


// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to CareerConnect API!");
});

// GET all jobs
app.get("/api/jobs", (req, res) => {
    res.json(jobs);
});

// GET a single job by ID
app.get("/api/jobs/:id", (req, res) => {

    const jobId = parseInt(req.params.id);

    const job = jobs.find(job => job.id === jobId);

    if (!job) {
        return res.status(404).json({
            message: "Job not found"
        });
    }

    res.json(job);
});

// POST a new job
app.post("/api/jobs", (req, res) => {

    const newJob = {
        id: jobs.length + 1,
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary
    };

    jobs.push(newJob);

    res.status(201).json(newJob);
});

// UPDATE a job
app.put("/api/jobs/:id", (req, res) => {

    const jobId = parseInt(req.params.id);

    const job = jobs.find(job => job.id === jobId);

    if (!job) {
        return res.status(404).json({
            message: "Job not found"
        });
    }

    job.title = req.body.title;
    job.company = req.body.company;
    job.location = req.body.location;
    job.salary = req.body.salary;

    res.json(job);
});

// DELETE a job
app.delete("/api/jobs/:id", (req, res) => {

    const jobId = parseInt(req.params.id);

    const jobIndex = jobs.findIndex(job => job.id === jobId);

    if (jobIndex === -1) {
        return res.status(404).json({
            message: "Job not found"
        });
    }

    jobs.splice(jobIndex, 1);

    res.json({
        message: "Job deleted successfully"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});