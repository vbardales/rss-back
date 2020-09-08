import Record from './record';

export default class ResultSet {
  records: Record[];

  constructor(data: any) {
    this.records = data.records.map((res: any) => new Record(res));
  }
}
