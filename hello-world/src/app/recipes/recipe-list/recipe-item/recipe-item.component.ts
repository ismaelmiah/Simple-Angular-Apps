import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [RecipeService],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  onRecipeSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
}
