import axios from 'axios';
import {IBookData} from '../interfaces';
import {Api} from '../constants';

// export const getBooksByCategory = async (page: number, maxResults: number, category: string | null) => {
//   const startIndex = page * maxResults;
//   const { data } = await axios.get<IBookData>(`${Api.BOOKS_URL}/volumes?q=subject:${category}&startIndex=${startIndex}&maxResults=${maxResults}&key=${Api.KEY}`);
//   return data.items;
// }
export const getBooksByCategory = async (
  page: number,
  maxResults: number,
  category: string | null,
) => {
  const startIndex = page * maxResults;
  const {data} = await axios.get<IBookData>(
    `${Api.BASE_URL}subjects/${category}.json?details=false&limit=${maxResults}&offset=${startIndex}&ebooks=true`,
  );

  return data.works;
};
