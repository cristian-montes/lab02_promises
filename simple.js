import { mkdir}   from 'fs/promises';
import { SimpleDb } from './simple-db';

export const makeFoulder = (destination) => {
  return mkdir(destination)
    .then(() => {
      return console.log(destination);
    });
};
