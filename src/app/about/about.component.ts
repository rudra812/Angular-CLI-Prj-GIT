import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service.provider';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {
  private base64textString:string="";
  imageSrc:string="";
  constructor(private aboutService : AboutService) { }
  ngOnInit() {
    /*this.aboutService.getAll()
     .subscribe(
          msg => {
           console.log(msg);
         } ,
          e => {
            console.log(e)
        },
       () => {
         console.log("Completed")
      })  */        
  }

  onChange(event) {   
    var files = event.srcElement.files;
    var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }   
  }
  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
            console.log(btoa(binaryString));
            this.imageSrc =  "data:image/jpg;base64,"+btoa(binaryString);
    }

}
//this.parentRouter = Router;
//this.parentRouter.navigateByUrl('/login');