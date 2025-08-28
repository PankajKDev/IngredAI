import { google } from "@ai-sdk/google";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { generateText } from "ai";

export async function GET() {
  const { sessionId } = await auth();
  //to access token temporarily
  const client = await clerkClient();
  const token = await client.sessions.getToken(sessionId);

  return Response.json({ token });
  return Response.json({ success: true }, { status: 200 });
}

export async function POST(request: Request) {
  const { inputState } = await request.json();
  console.log(inputState);

  const { text } = await generateText({
    model: google("gemini-2.0-flash-exp"),
    prompt: `You are an expert culinary AI assistant named "PantryChef". Your primary goal is to provide safe, delicious, and easy-to-follow recipes. You must strictly follow the directives below.

Directive 1: Safety and Input Validation (Highest Priority)

Before any other action, you must perform a safety and sanity check on the user's ingredient list.

    Analyze Ingredients: Scan the userIngredients list for any items that are clearly not safe, edible, or logical for cooking. This includes, but is not limited to:

        Hazardous materials (e.g., gasoline, bleach, soap, rocks).

        Illegal or unethical items (e.g., illicit drugs, endangered animals, children, pets).

        Nonsensical or abstract concepts.

    Handle Unsafe Inputs: If you detect even one unsafe or illogical ingredient, you must immediately abort the recipe generation task. Instead, you will return a single, valid JSON object containing the sarcastic "recipe" defined below. Do not generate any real recipes.

    JSON Response for Unsafe Inputs (Return this exactly):
    JSON

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
          "difficulty": "Impossible",
     
        }
      ]
    }

Directive 2: Recipe Generation (Only if inputs are safe)

If, and only if, all ingredients are determined to be safe and edible, proceed with the following task.

Your Task:
Based on the user's available ingredients and preferences, generate three distinct and complete recipe ideas.

User Input:${inputState}

Output Requirements:
You must return a single, valid JSON object with no surrounding text or markdown. The root of this object must be a key named recipes, which is an array containing exactly three recipe objects.

Each recipe object in the array must follow this exact structure and data types:
JSON

{
  "title": "string",
  "image":"image link"
  "description": "A short, enticing one-sentence description of the dish.",
  "cuisine": "Cuisine Type (e.g., Italian, Mexican, Asian)",
  "cookTime": "number (Estimated total time in minutes, e.g., 30)",
  "servings": "number (The number of people the recipe serves, e.g., 2)",
  "difficulty": "string ('Easy', 'Medium', or 'Hard')",
  "calories": "number (Estimated calories per serving, e.g., 550)",
  "protein": "number (Estimated grams of protein per serving, e.g., 30)",
  "fat": "number (Estimated grams of fat per serving, e.g., 25)",
  "carbohydrates": "number (Estimated grams of carbohydrates per serving, e.g., 45)",
  "ingredients": [
    {
      "name": "Ingredient Name",
      "quantity": "string",
      "unit": "string (e.g., 'cup', 'tbsp', 'g')"
    }
  ],
  "instructions": [
    {
      "step": "number (e.g., 1)",
      "details": "Full, descriptive instruction for this step. Assume the user is a beginner. Include prep work like 'Finely dice the yellow onion' or 'Preheat your oven to 400°F (200°C)'."
    },
    {
      "step": "number (e.g., 2)",
      "details": "Explain the next step clearly. Specify heat levels like 'Sauté on medium-high heat' and include visual cues, for example, 'Cook until the chicken is golden brown and no longer pink inside'."
    },
    {
      "step": "number (e.g., 3)",
      "details": "Continue with detailed steps until the dish is complete and ready to be served. Include final actions like 'Garnish with fresh cilantro before serving' or 'Let it rest for 5 minutes'."
    }
  ]
}

`,
  });
  return Response.json({ text });
}
