import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import { prompt } from "./template";

export async function generateAnswer(input: generateAnswerInput) {
  const validated = validateInputSchema.safeParse(input);

  if (!validated.success) {
    throw new Error(
      `Invalid parameters: ${JSON.stringify(
        validated.error.flatten().fieldErrors
      )}`
    );
  }

  const {
    fileBase64,
    fileMimeType,
    googleKey,
    model = "gemini-pro-vision",
  } = validated.data;

  const imagePart = {
    inlineData: {
      data: fileBase64,
      mimeType: fileMimeType,
    },
  };

  try {
    const genAI = new GoogleGenerativeAI(googleKey);

    const genModel = genAI.getGenerativeModel({ model: model });

    const result = await genModel.generateContent([prompt, imagePart]);

    const response = await result.response;

    return response.text();
  } catch (error) {
    throw error;
  }
}

const validateInputSchema = z.object({
  googleKey: z
    .string({
      required_error: "googleKey is required.",
    })
    .min(1, {
      message: "Invalid googleKey.",
    }),
  model: z.string().optional(),
  fileBase64: z
    .string({
      required_error: "fileBase64 is required.",
    })
    .min(1, {
      message: "Invalid fileBase64.",
    }),
  fileMimeType: z.enum(["image/jpeg", "image/png"], {
    required_error: "fileMimeType is required.",
  }),
});

export type generateAnswerInput = z.infer<typeof validateInputSchema>;
