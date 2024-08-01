import { RecipeIngredient } from "./RecipeIngredient.type"

export type Recipe = {
  name:string
  id:string
  readme:string
  ingredients:RecipeIngredient[]
}
