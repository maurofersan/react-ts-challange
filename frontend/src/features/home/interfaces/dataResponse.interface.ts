export interface IDataItem {
  id: string;
  name: string;
}

export interface IDataResponse {
  items: IDataItem[];
  page: number;
  totalPages: number;
}
