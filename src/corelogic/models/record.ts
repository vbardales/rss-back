export default class Record {
  id: string;
  name: string;
  description: string;
  gps: Number[];

  constructor(data: any) {
    this.id = data.fields.stop_id;
    this.name = data.fields.stop_name;
    this.description = data.fields.stop_desc;
    this.gps = data.fields.stop_coordinates;
  }
}
