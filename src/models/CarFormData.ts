class CarFormData {
  id: string;
  sequence: number;
  description: string;

  constructor(id: string, sequence: number, description: string) {
    this.id = id;
    this.sequence = sequence;
    this.description = description;
  }
}

export default CarFormData;
