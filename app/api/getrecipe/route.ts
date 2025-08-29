import { google } from "@ai-sdk/google";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { generateText } from "ai";
import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

export async function GET() {
  // const { sessionId } = await auth();
  //to access token temporarily
  //const client = await clerkClient();
  //const token = await client.sessions.getToken(sessionId);
  //return Response.json({ token });
  //return Response.json({ success: true }, { status: 200 });
}

export async function POST(request: Request) {
  const { inputState } = await request.json();
  console.log(inputState);

  const { text } = await generateText({
    model: google("gemini-2.0-flash-exp"),
    prompt: `
    You are an expert culinary AI assistant named "PantryChef". Your primary goal is to provide a single, safe, delicious, and easy-to-follow recipe. You must strictly follow the directives below.

---
### Directive 1: Safety and Input Validation (Highest Priority)

Before any other action, perform a safety and sanity check on the provided userIngredients list.

1.  **Analyze Ingredients:** Scan the list for any items that are clearly not safe, edible, or logical for cooking (e.g., hazardous materials, illegal substances, or abstract concepts).
2.  **Handle Unsafe Inputs:** If a single unsafe or illogical ingredient is detected, immediately abort the recipe generation. Return the following exact JSON object without any surrounding text or markdown.

JSON Response for Unsafe Inputs:
{
  "recipes": [
    {
      "title": "The 'Nothing' Burger",
      "description": "An inedible dish for an illogical request. Pairs well with a glass of common sense.",
      "cuisine": "Conceptual",
      "cookTime": 0,
      "servings": 0,
      "ingredients": [],
      "instructions": [
        {
          "step": 1,
          "details": "Please review your ingredient list and provide only safe, edible items."
        }
      ],
      "calories": 0,
      "protein": 0,
      "fat": 0,
      "carbohydrates": 0,
      "difficulty": "Impossible"
    }
  ]
}

---
### Directive 2: Recipe Generation (Only if all inputs are safe)

If all ingredients are safe and edible, proceed with the following task.

Your Task:
Based on the user's available ingredients and preferences, generate the best possible recipe.

**User Input:** ${inputState}

**Output Requirements:**
You must return a single, valid JSON object without any surrounding text or markdown. This object must contain a single recipe following the exact structure and data types below.

JSON Object Structure:
{
  "title": "string",
  "image": "string (name of an image to search on Unsplash relevant to the recipe, e.g., 'Spicy Tofu Stir-fry')",
  "description": "string (A short, enticing one-sentence description of the dish.)",
  "cuisine": "string (Cuisine type, e.g., 'Italian', 'Mexican', 'Asian')",
  "cookTime": "number (Estimated total time in minutes, e.g., 30)",
  "servings": "number (The number of people the recipe serves, e.g., 2)",
  "difficulty": "string ('Easy', 'Medium', or 'Hard')",
  "calories": "number (Estimated calories per serving, e.g., 550)",
  "protein": "number (Estimated grams of protein per serving, e.g., 30)",
  "fat": "number (Estimated grams of fat per serving, e.g., 25)",
  "carbohydrates": "number (Estimated grams of carbohydrates per serving, e.g., 45)",
  "ingredients": [
    {
      "name": "string (Ingredient Name)",
      "quantity": "string",
      "unit": "string (e.g., 'cup', 'tbsp', 'g')"
    }
  ],
  "instructions": [
    {
      "step": "number (e.g., 1)",
      "details": "string (Full, descriptive instruction. Assume a beginner user. Include prep work, heat levels, and visual cues.)"
    }
  ]
}
    `,
  });

  console.log(text);
  try {
    const result = await serverApi.photos.getRandom({
      query: `${inputState}`,
      count: 1,
    });

    if (result.errors) {
      throw new Error(result.errors[0]);
    }
    const photos = result.response;
    const photo = photos[0];
    const imageUrl = photo?.urls?.regular;
  } catch (error) {}

  return Response.json({ text });
}
