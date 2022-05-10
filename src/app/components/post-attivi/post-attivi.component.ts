import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recupera, isPrimaChiamata, getPosts,setPosts} from 'src/app/service/users.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  posts:Post[]=[];


  constructor() { }


ngOnInit(): void {
  if (isPrimaChiamata()){
    recupera().then(x=>{
      setPosts(x);
      this.posts=x;
      });

  }else{
    this.posts=getPosts();
  }
}

disattiva(ele:Post, $event:any){
  $event.preventDefault();
   let a= this.posts.find(x=>{
     return x.id===ele.id;
   });
   if (a!==undefined){
    a.attivo=false;
   }
   setPosts(this.posts);
}








}
