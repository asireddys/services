import { Component } from '@angular/core';
import { DisplayService } from 'src/app/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor (private Show : DisplayService, private Showuser:DisplayService ){}
public d;
public e;
getdetails(){
  this.Show.getshow().subscribe(res=>{
    this.d = res;
    console.log(res);
  })
}
getuser(){
  this.Showuser.getuser1().subscribe(res=>{this.e=res;
  console.log(res);
  })
}
title='Tour of Heroes';
heroes=['Windstrom','Bombasto','Magneta','Tornado'];
//myHero=this.heroes[0];

}