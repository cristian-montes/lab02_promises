import { mkdir }   from 'fs/promises';

export const makeFoulder = (destination) => {
  return mkdir(destination)
    .then(() => {
    });
};
