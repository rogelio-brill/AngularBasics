import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('Pizza', 'Dough, tomato sauce, cheese', 
        'https://files.liveworksheets.com/def_files/2020/10/3/1003050249676828/1003050249676828001.jpg',
        [
          new Ingredient('Dough', 2),
          new Ingredient('Tomatoes', 4),
          new Ingredient('Cheese', 3)
        ])
      ];

    constructor(private slService: ShoppingListService) { }  

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}