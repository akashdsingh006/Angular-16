Pipes in Angular :
----------------------------------
In Typescript, pipe(|) is referred to as a union type or “Or”. it is also called union type in typescript. <br/> 
A value that can be any of numerous kinds is described by a union type. Each type is separated by a pipe (|).

<h1> {{title | uppercase}} </h1>  
<h1> {{title | lowercase}} </h1> 


<!-- Basic Pipes -->
<h1> {{title | uppercase}} </h1>  
<h1>{{title | lowercase}}</h1> 

<h1>{{title | slice:3:7 | uppercase}}</h1> 
<h1>{{date | date:'fullDate'}}</h1>

<!-- Advance Pipes -->
<h1>{{2000.330000 | number:'10.3-7'}}</h1>
<h1>{{20 | currency:'INR'}}</h1>
