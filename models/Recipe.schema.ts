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
  },
  quantity: {
    type: String,
  },
  unit: {
    type: String,
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
    imageUrl: {
      type: String,
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
    difficulty: {
      type: String,
    },
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
    ingredients: [IngredientSchema],
    instructions: [InstructionSchema],
    isFavourite: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
