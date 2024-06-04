import express from "express";
import upload from "../utils/upload.js";
import { getImage, uploadImage } from "../controller/Image.controller.js";

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;
