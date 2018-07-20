
export class FabricM {
  public name: string;
  public description: string;
  public images: string;
  public cost: number;
  public id: string;
  public category: string;
  public type: string;

  constructor(name: string, desc: string, images: string, cost: number, id: string, category: string, type: string ) {
    this.name = name;
    this.description = desc;
    this.images = images;
    this.cost = cost;
    this.id = id;
    this.category = category;
    this.type = type;
  }
}
