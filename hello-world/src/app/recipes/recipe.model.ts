import { Ingredient } from '../shared/Ingredient.model';

export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    id: number,
    name: string,
    desc: string,
    imagepath: string,
    ingredient: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagepath;
    this.ingredients = ingredient;
  }
}
