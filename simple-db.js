import {  writeFile, readFile } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {

  constructor(rootDir){
    this.NamId = shortid.generate();
    const fileName = `${this.NamId}.json`;
    this.theFile = path.join(rootDir, fileName);
  }

  save(obj){
    obj['id'] = this.NamId;
    const stringData = JSON.stringify(obj);
    return writeFile(this.theFile, stringData);
  }
  


  leelo() {
    return readFile(this.theFile, 'utf-8').catch((err) => {
      if (err.code === 'ENOENT') {
        return null;
      }
      throw err;
    });
  }
}
//THIS BUILDS A FILE WITH THE USERS PREFERED NAME, BUT NOT WITH THE OBJ[ID] AS NAME
//  constructor(rootDir, name){
//     const fileName = `${name}.json`;
//     this.theFile = path.join(rootDir, fileName);
//   }

//   save(obj){
//     obj['id'] = shortid.generate();
//     const stringData = JSON.stringify(obj);
//     return writeFile(this.theFile, stringData);
//  }
