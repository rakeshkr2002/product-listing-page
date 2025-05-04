import express from "express";
import axios from "axios";

let productRouter = express.Router();

productRouter.get("/", async(req, res) => {
  try {
        let response = await axios.get("https://fakestoreapi.com/products");
      
        res.status(200).json(response.data);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default productRouter;