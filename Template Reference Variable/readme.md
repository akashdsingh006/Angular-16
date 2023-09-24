Template variables help you use data from one part of a template in another part of the template.<br/>
Use template variables to perform tasks such as respond to user input or finely tune your application's forms.<br/>


It is of type :- HTMLInputElement <br/>

<input #phone placeholder="phone number" /> <br/>


<!-- lots of other elements -->

<!-- phone refers to the input element; pass its `value` to an event handler -->
<button type="button" (click)="callPhone(phone.value)">Call</button>
