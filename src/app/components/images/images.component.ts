import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/images.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images: Images[] = [];
  filterImages = ''; 
  
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getAll()
  }

  searchImage(value: string) {
    this.filterImages = value;
  }
}
