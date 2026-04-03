import axios from "axios";
import userModel from "../models/usermodel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const user = req.user; // ✅ comes from userAuth middleware

    if (!prompt) return res.json({ success: false, message: "Missing prompt" });
    if (user.creditBalance <= 0) return res.json({ success: false, message: "No credit balance" });

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    // Deduct credit
    user.creditBalance -= 1;
    await user.save();

    res.json({ success: true, message: "Image generated", creditBalance: user.creditBalance, resultImage });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};