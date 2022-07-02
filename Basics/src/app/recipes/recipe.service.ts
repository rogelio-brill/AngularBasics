import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
        new Recipe('Pizza', 'Best pizza recipe from Italy!', 
        'https://images.getrecipekit.com/20220211142347-margherita-9920.jpg',
        [
          new Ingredient('Dough', 1),
          new Ingredient('Tomatoes', 4),
          new Ingredient('Cheese', 3),
          new Ingredient('Basil', 4)
        ]),
        new Recipe('Hamburger', 'Best hamburger recipe from United States!', 
        'https://tastesbetterfromscratch.com/wp-content/uploads/2020/06/Classic-Juicy-Hamburger-Recipe-Square.jpg',
        [
          new Ingredient('Bread', 2),
          new Ingredient('Pickles', 2),
          new Ingredient('Onion', 1),
          new Ingredient('Tomatoes', 2),
          new Ingredient('Lettuce', 2),
          new Ingredient('Cheese', 1),
          new Ingredient('Beef Patty', 1)
        ])
      ];

    constructor(private slService: ShoppingListService) { }  

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
      return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }

}