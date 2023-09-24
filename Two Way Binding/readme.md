Two way binding:
-------------------------------
It's an advanced technique where model value and view simultaneously update if any changes occur in any of them. These updates are seamless and blazing fast.<br />

HTML <---> View<br />

Two-way binding syntax is a combination of ()(event binding) wrapped with [](property binding).<br />
You can remember the syntax by saying Banana-in-the-box [()]<br />
The built-in directive for two-way binding is [(ngModel)]<br />

<input type="text" [(ngModel)]="testValue" /> <br />

Note : import {FormsModule} from '@angular/forms';
