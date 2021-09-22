import {  writeFile, readFile, readdir, rm } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {

  constructor(rootDir){
    this.path = rootDir;
  }

  // ------------------------------------------------//
  save(obj){
    const randomID = shortid.generate();
    const fileName = `${randomID}.json`;

    obj['id'] = randomID;
    const stringData = JSON.stringify(obj);

    const toFile = path.join(this.path, fileName);
    return writeFile(toFile, stringData).then(() => {
      return randomID;
    });
  }

  // ------------------------------------------------//
  get(id){
    const fileName = `/${id}.json`;

    try{
      const toFile = path.join(this.path, fileName);
      return readFile(toFile, 'utf-8').then((result) => {
        return JSON.parse(result);
      });
    } catch(error){
      if(error.code === 'ENOENT') return null;
      throw error;

    }
  
  }
  // ------------------------------------------------//
  getAll(){
    
    return readdir(this.path).then((result) => {
      return Promise.all(

        result.map((file) => {
          const target = file.split('.');
          return this.get(target[0]);
        })

      );
    });
  }

  // ------------------------------------------------//
  remove(id){
    const toFile = path.join(this.path, `/${id}.json`);
    return rm(toFile, { force:true, recursive:true }).then(() => {
      return id;
    });
  }
  // ------------------------------------------------//


  update(id, teddy){
    const toFile = path.join(this.path, `${id}.json`);

    return Promise.all(
      this.get(id).then((obj) => {
        obj.a = teddy;
        return writeFile(toFile, JSON.stringify(obj)).then(() => {
          // console.log(obj);
          return obj;
        });
      })
    );
   
  }

  // ------------------------------------------------//
} 
