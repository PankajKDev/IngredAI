import { google } from "@ai-sdk/google";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { generateText } from "ai";

export async function GET() {
  const { sessionId } = await auth();
  //to access token temporarily
  const client = await clerkClient();
  const token = await client.sessions.getToken(sessionId);

  return Response.json({ token });
}

export async function POST() {
  const userIngredients = "salmon nachos schezwan sauce";
  const userPreferences = "hot and spicy mexican under 500 calories";
  const { text } = await generateText({
    model: google("gemini-2.0-flash-exp"),
    prompt: `
        You are an expert culinary AI assistant named "PantryChef". Your goal is to generate unique, delicious, and easy-to-follow recipes based on the ingredients a user has on hand, along with their dietary preferences and kitchen equipment.

Your Task:
Based on the user's available ingredients and preferences, generate three distinct recipe ideas. For each recipe, you must provide a complete set of information as a valid JSON object.

User Inputs:

    Ingredients Available: ${userIngredients}

    User Preferences: ${userPreferences}

Output Requirements:
You must return a single JSON object. The root of this object should be a key named recipes, which is an array containing exactly three recipe objects. Do not include any text or markdown formatting before or after the JSON object.

Each recipe object in the array must follow this exact structure:

{
  "title": "Recipe Title",
  "description": "A short, enticing one-sentence description of the dish.",
  "cuisine": "Cuisine Type (e.g., Italian, Mexican, Asian)",
  "cookingTime": "Estimated total time in minutes (e.g., 30)",
  "servings": "The number of people the recipe serves (default to 2)",
  "ingredients": [
    {
      "name": "Ingredient Name",
      "quantity": "1",
      "unit": "cup"
    }
  ],
  "instructions": [
    "Step 1: First instruction here.",
    "Step 2: Second instruction here.",
    "..."
  ],
  "nutritionalInfo": {
    "calories": "Estimated calories per serving",
    "protein": "Estimated grams of protein per serving",
    "carbohydrates": "Estimated grams of carbs per serving",
    "fat": "Estimated grams of fat per serving"
  }
}

Ensure all fields are populated with accurate and relevant information. The instructions should be clear, concise, and broken down into logical steps.
        `,
  });
  console.log(text);
}
