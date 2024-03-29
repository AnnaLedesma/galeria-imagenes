import { Component, Input, OnInit } from '@angular/core';
import { Images } from 'src/app/models/images.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() myImage: Images | any; 

  imgUrl: string = ''; 
  textImg: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.myImage) {      
      const idImg: number = this.myImage.id
      this.textImg = this.myImage.text
      this.imgUrl = `https://picsum.photos/id/${idImg}/500/500`
    }

  }
}
