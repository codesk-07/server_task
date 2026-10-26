
const express = require("express");
const router = express.Router();

const courses = [
    {
        id: 1,
        name: "Frontend",
        description: "HTML, CSS, JS, React"
    },
    {
        id: 2,
        name: "Backend",
        description: "Node.js, Express, MongoDB"
    }
];

// GET /courses
router.get("/", (req, res) => {
    const names = courses.map(course => course.name);
    res.send(`Courses: ${names.join(", ")}`);
});

// GET /courses/:id
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const course = courses.find(course => course.id === id);

    if (!course) {
        return res.status(404).send("Course not found");
    }

    res.send(
        `Course: ${course.name}, Description: ${course.description}`
    );
});

module.exports = router;
