import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Dough, tomato sauce, cheese', 'https://files.liveworksheets.com/def_files/2020/10/3/1003050249676828/1003050249676828001.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
