Angular Routing :
--------------------------------
Whenever we are creating the project that time, we'll get the option to include routing in it.
A file will be generated as app-routing.module.ts

Dynamic Routing:
-----------------------------
<h1>This is the home page</h1>
<a routerLink="user">User</a>
<br>
<a routerLink="about">About</a>

<br>
<a routerLink="about/20">Atul</a>
<br>
<a routerLink="about/30">Aman</a>
<br>
<a routerLink="about/40">Golu</a>

<router-outlet></router-outlet>


** Dynamic Routing is applied here on AboutComponent. 

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private route :ActivatedRoute){

  }
  ngOnInit(): void {
      console.log('user id is', this.route.snapshot.paramMap.get('id'))
  }
}
_____________________________________
404 page :
---------------------
We use wildcard routing to create error pages or such pages which doesnot exist.

{
	component: ErrorPageComponent,
	path: '**'
}


