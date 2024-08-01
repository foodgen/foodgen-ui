import { Recipe } from "./Recipe.type"
import { Region } from "./Region.type"

export type Meal = {
  id:string
  name:string
  region:Region
  recipe:Recipe
  image:string
  download:number
}
