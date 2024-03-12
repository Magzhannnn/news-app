import { CategoriesType } from "@/entities/categories";

export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: UrlType;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

type UrlType = string | null | undefined;
