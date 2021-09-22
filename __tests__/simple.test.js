import { rm, mkdir } from 'fs/promises';
import { SimpleDb } from '../simple-db.js';

describe('simple data structure', () => {
  const rootDir = './__tests__/dataDir';

  beforeEach(() => {
    return rm(rootDir, { force:true, recursive:true })
      .then(() => {
        return mkdir(rootDir, { recursive:true });
      });
  });
  // 1  ------------------------------------------------//
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
  // 2------------------------------------------------//
  it('it gets objects by id', () => {
    const simpleDB = new SimpleDb(rootDir);

    const  data = {
      a:'a',
      b:'b'
    };

    return simpleDB
      .save(data).then((id) => { 
        return simpleDB.get(id).then((result) => {
          expect(result).toEqual({ a:'a',
            b:'b', 
            id: expect.any(String)
          });
        });
      });
  });
  
  // 3------------------------------------------------//

  it.skip('it gets objects by id null', () => {
    const simpleDB = new SimpleDb(rootDir);

    const  data = {
      a:'a',
      b:'b'
    };
    

    return simpleDB
      .save(data).then(() => { 
        // console.log(data);
        return simpleDB.get().then((result) => {
          expect(result).toBeNull();
        });
      });
  });







  // 4------------------------------------------------//
  it('it get all objects', () => {
    const simpleDB = new SimpleDb(rootDir);
    // const simpleDB2 = new SimpleDb(rootDir);

    const  data = {
      a:'a',
      b:'b'
    };
    

    return simpleDB
      .save(data).then(() => { 
        return simpleDB.getAll().then((result) => {
          expect(result).toEqual([
            { a:'a',
              b:'b', 
              id: expect.any(String)
            }
          ]);
        });
      });
  });

  // 5------------------------------------------------//
  it.skip('it deletes an object by id', () => {
    const simpleDB = new SimpleDb(rootDir);

    const  data = {
      a:'a',
      b:'b'
    };
    
    return simpleDB
      .save(data).then((id) => { 
        return simpleDB.remove(id).then((res) => {
          return simpleDB.get(res).then((obj) => {
            expect(obj).toEqual(null);
          });
        });
  
      });
  });

  // 6 ------------------------------------------------//
  it('update an obj', () => {
    const simpleDB = new SimpleDb(rootDir);

    const  data = {
      a:'a',
      b:'b'
    };

    return simpleDB
      .save(data).then((id) => {
        simpleDB.update(id, 'gooy').then((obj) => {
          expect(obj).toEqual(
            {
              id: expect.any(String),
              a:'goofy',
              b:'b'
            });
        });
      });
  });

  // ------------------------------------------------//
});
