import express from "express"
import { User } from "../models/User.js";
import bcrypt from "bcryptjs"

const router = express.Router();

//update
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        try {
            const updateduser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updateduser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(400).json("You are Not the author of post");
    }
});

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await User.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json("user not found");
        }
    } else {
        res.status(500).json("you cannot delete this!!");
    }
});

export default router;