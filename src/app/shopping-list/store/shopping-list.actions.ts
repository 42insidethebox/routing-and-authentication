import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";
export const ADD_INDREDIENT = "ADD_INGREDIENT";

export class AddIngredient implements Action {
  readonly type = ADD_INDREDIENT;
  payload: Ingredient;
}
