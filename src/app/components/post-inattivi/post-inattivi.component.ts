import { Component, OnInit } from '@angular/core';
import { recupera } from 'src/app/service/users.service';
import { Post } from 'src/app/interface/post';
import { isPrimaChiamata, setPosts, getPosts } from 'src/app/service/users.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

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

  attiva(ele:Post,$event:any){
    $event.preventDefault();
    let a= this.posts.find(x=>{
      return x.id===ele.id;
    });
    if (a!==undefined){
     a.attivo=true;
    }
    setPosts(this.posts);

  }

}
