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

  it('it should create a dir/file', () => {
    // const ori = './test/dataDir/objects.txt';
    
    const name = 'objects';
    const simpleDB = new SimpleDb(rootDir, name);
    const  data = '1234567654edfgbhytrdx';
    console.log(simpleDB.theFile);

    return simpleDB
      .save(data)
      .then(() => {
        expect(simpleDB.theFile).toEqual('test/dataDir/objects.json');
      });

  });

});
