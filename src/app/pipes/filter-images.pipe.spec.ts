import { FilterImagesPipe } from "./filter-images.pipe"


describe('filterImagesPipe', () => {

  it('create an instance', () => {
    const pipe = new FilterImagesPipe();
    expect(pipe).toBeTruthy();
  })

  it('should filter images based on query', () => {
    const pipe = new FilterImagesPipe();
    const value: { id: number; photo: string; text: string }[] = [{
      id: 500,
      photo: "url_photo_500",
      text: "QLFUIID"
    }]
    
    const query = '500';
    const result = pipe.transform(value, query);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(result[0].id).toEqual(500);
  })
})