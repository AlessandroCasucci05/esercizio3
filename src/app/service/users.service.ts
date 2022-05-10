import { Post } from "../interface/post";

let posts:Post[]= [];
let primaChiamata:boolean= true;

export function getPosts():Post[]{
  return posts;
}

export function isPrimaChiamata():boolean{
  return primaChiamata;
}

export function setPosts(param:Post[]):void{
   posts=param;
}


export async function recupera(): Promise<Post[]>{
     primaChiamata=false;
     return await (await fetch("assets/db.json")).json();
}
