import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(rootDir, name){
    const fileName = `${name}.json`;
    this.theFile = path.join(rootDir, fileName);
  }

  save(secret){
    return writeFile(this.theFile, secret);
  }

}

