class Car {
  id: string;
  status: string;
  model: string;
  spec: string;
  engineType: string;
  engineSize: string;
  doors: number;
  colour: string;

  constructor(
    id: string,
    status: string,
    model: string,
    spec: string,
    engineType: string,
    engineSize: string,
    doors: number,
    colour: string
  ) {
    this.id = id;
    this.status = status;
    this.model = model;
    this.spec = spec;
    this.engineType = engineType;
    this.engineSize = engineSize;
    this.doors = doors;
    this.colour = colour;
  }
}

export default Car;
