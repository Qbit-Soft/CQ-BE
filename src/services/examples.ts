import express from "express";
import { exampleController } from "../controllers/examples";

const router = express.Router();

router.get("/", (_req, res) => {
  const getControllerExample = exampleController()
  res.send(getControllerExample);
});

router.post("/", (_req, res) => {
  res.send("Saving a diary diaries");
})

export default router;