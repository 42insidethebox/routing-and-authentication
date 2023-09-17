import { Ingredient } from "../../shared/ingredient.model";
import { ADD_INDREDIENT } from "./shopping-list.actions";
import * as ShoppingListActions from "./shopping-list.actions";
const initialState = {
  ingredients: [new Ingredient("Apple", 5), new Ingredient("Tomatoes", 10)],
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INDREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
  }
}