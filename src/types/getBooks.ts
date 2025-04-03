import { Document } from '../models/book';

export type Sort = 'accuracy' | 'latest';

export type PageOrSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50;

export type Target = 'title' | 'isbn' | 'publisher' | 'person';

export interface RequestGetBooks {
  query: string;
  sort?: Sort;
  page?: PageOrSize;
  size?: PageOrSize;
  target?: Target;
}

export interface Meta {
  total_count: number;
  pageable_count: number;
  is_end: number;
}

export interface ResponseGetBooks {
  meta: Meta;
  documents: Document[];
}
