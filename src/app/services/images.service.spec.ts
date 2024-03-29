import { TestBed } from "@angular/core/testing";
import { ImagesService } from "./images.service"


describe('imagesService', () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesService);
  });

  it('service result', () => {
    const data = service.getAll()
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(4000);
  })
})