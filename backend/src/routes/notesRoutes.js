import express from "express";
const router = express.Router();
import { getallnotes, getnote , createnote , updatenote , deletenote } from "../controllers/NotesContollers.js";

router.get("/", getallnotes);
router.get("/:id",getnote);
router.post("/", createnote);
router.put("/:id", updatenote);
router.delete("/:id", deletenote);

export default router;