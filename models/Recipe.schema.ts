import { Schema, model, models } from "mongoose";

const InstructionSchema = new Schema({
  step: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const RecipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    cuisine: {
      type: String,
    },
    cookTime: {
      type: Number,
    },
    servings: {
      type: Number,
    },
    ingredients: [IngredientSchema],
    instructions: [InstructionSchema],
    calories: {
      type: Number,
    },
    protein: {
      type: Number,
    },
    fat: {
      type: Number,
    },
    carbohydrates: {
      type: Number,
    },
    difficulty: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
