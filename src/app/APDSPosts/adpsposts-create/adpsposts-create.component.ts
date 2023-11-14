import {Component, OnInit} from '@angular/core'; 
import {NgForm } from '@angular/forms';
import {ADPSPostServiceService} from '../Posts-service.service'

@Component({
selector: 'app-adpsposts-create',
templateUrl: './adpsposts-create.component.html',
styleUrls: ['./adpsposts-create.component.css'] 
})

export class AdpspostsCreateComponent implements OnInit {

constructor(public adpspostsservice: ADPSPostServiceService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

onaddposts(postform: NgForm) {

if (postform.invalid){

alert('Invalid!')
return
}

alert(postform.value.enteredID+':'+postform.value.enteredName)
  
this.adpspostsservice.addpost_service(postform.value.enteredID,postform.value.enteredName)
postform.resetForm()

}
}