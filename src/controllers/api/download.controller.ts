import { existsSync } from "fs";
import path from "path";

export const index: any = (req:any, res:any) => {
  
    if (existsSync(path.join(__dirname,'../../../uploads/', req?.query?.file+'.jpeg'))) {
        console.log('file exists');
        return res.download(path.join(__dirname,'../../../uploads/', req?.query?.file+'.jpeg'))
      } else {
          console.log(path.join(__dirname,'../../../uploads/', req?.query?.file+'.jpeg'));
          console.log('file not found!');
          return res.send(`file not found`);
      }
      
  };
  