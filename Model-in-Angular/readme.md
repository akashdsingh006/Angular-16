Model in Typescript 
-----------------------------------
Model is simply a software representation and encapsulation of a real world subject, or a "thing".<br>
It can be used to describe a physical object, an event, or even an internal process, depending on the use case.

// user.model.ts

export interface User {
  id: number;
  name: string;
  email: string;
}
<br>
// user.service.ts
<br>
import { Injectable } from '@angular/core';<br>
import { User } from './user.model';<br>
<br>
@Injectable({
  providedIn: 'root',<br>
})
export class UserService {<br>
  getUser(): User {<br>
    // Simulate fetching user data from an API or elsewhere
    <br>
    const user: User = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };<br>
    return user;
  }
}
