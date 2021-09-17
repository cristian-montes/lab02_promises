import { rm, mkdir } from 'fs/promises';
import { SimpleDb } from '../simple-db.js';

describe('simple data structure', () => {
  const rootDir = './test/dataDir';

  beforeEach(() => {
    return rm(rootDir, { force:true, recursive:true })
      .then(() => {
        return mkdir(rootDir, { recursive:true });
      });
  });

  it('it should save objects', () => {
    const simpleDB = new SimpleDb(rootDir);
    const  data = {
      a:'a',
      b:'b'
    };

    return simpleDB
      .save(data)
      .then(() => {
        expect(data).toEqual(data); // FIGURE OUT HOW TO COMPARE FAKE TO REAL
      });
  });

});




// it('it should create a dir/file', () => {

//   // const name = 'objects';
//   const simpleDB = new SimpleDb(rootDir);
//   const  data = { a:'1234567654edfgbhytrdx' };
//   console.log(simpleDB);
//   return simpleDB;
//     // .save(data)
//     // .then(() => {
//     //   return simpleDB.theFile; })
//     // .then((files) => {
//     //   expect(files).toEqual(simpleDB.theFile);
//     // });

// });
