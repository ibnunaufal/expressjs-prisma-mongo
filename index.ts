import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import express from "express";

const app = express();
const PORT = 5000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    prisma.user.findMany().then((users: any) => {
        res.json(users);
    }
    ).catch((error: any) => {
        res.json(error);
    })
});

app.post("/add", (req, res) => {
    const { name, email } = req.body;
    prisma.user.create({
        data: {
            name,
            email
        }
    }).then((user: any) => {
        res.json(user);
    }).catch((error: any) => {
        res.json(error);
    })
})