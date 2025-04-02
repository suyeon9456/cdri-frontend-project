export interface Document {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  authors: string[];
  publisher: string[];
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}
