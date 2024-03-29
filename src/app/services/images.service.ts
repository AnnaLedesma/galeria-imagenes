import { Injectable } from "@angular/core";
import { Images } from "../models/images.interface";
import { images } from "../bd/images.bd";

@Injectable({
  providedIn: 'root'
})

export class ImagesService {

  private arrImages: Images[]

  constructor() {
    this.arrImages = images
  }

  getAll(): Images[] {
    return this.arrImages
  }
}