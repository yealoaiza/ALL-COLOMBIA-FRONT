import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  public categoriesList = [
    {
      "category": "Niños",
      "icon": "toys"
    },
    {
      "category": "Mujer",
      "icon": "woman"
    },
    {
      "category": "Hombre",
      "icon": "man"
    }
  ]

  constructor() {}

}