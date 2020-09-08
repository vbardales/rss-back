export default class Station {
  private id: string;
  private name: string;
  private gps: string;
  private description: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.gps = data.gps;
    this.description = data.description;
  }
}
