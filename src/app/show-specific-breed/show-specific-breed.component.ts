import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../breeds.service';

@Component({
  selector: 'app-show-specific-breed',
  templateUrl: './show-specific-breed.component.html',
  styleUrls: ['./show-specific-breed.component.css']
})
export class ShowSpecificBreedComponent implements OnInit {

  constructor(private breedService: BreedsService) { }

  ngOnInit() {
  }

}
