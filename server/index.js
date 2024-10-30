import express from "express";
import cors from "cors";
import Chance from "chance";

const app = express();

app.use(express.json());

app.use(cors());

const newChance = new Chance();

// console.log("newChance", newChance);

const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: newChance.animal(),
        name: newChance.name(),
        age: newChance.age()
    };
});

app.get("", (req, res) => {
    const q = req.query.q?.toLowerCase() || "";
    const filteredAnimals = animals.filter(({ type }) => {
        return type.toLowerCase().includes(q);
    });
    res.send(filteredAnimals);
});

app.listen(8080, () => console.log("Listening on port http://localhost:8080"));