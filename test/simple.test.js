import { rm, mkdir } from 'fs/promises';
import { get } from 'http';
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
        expect(data.id).toEqual(expect.any(String)); // FIGURE OUT HOW TO COMPARE FAKE TO REAL
      });
  });

  it('it gets objects by id', () => {
    const simpleDB = new SimpleDb(rootDir);

    const  data = {
      a:'a',
      b:'b'
    };

    return simpleDB
      .save(data).then(() => { 
        return simpleDB.get().then((result) => {
          expect(result).toEqual({ a:'a',
            b:'b', 
            id: expect.any(String)
          });
        });
      });
  });
});
