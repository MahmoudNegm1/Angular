import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
   userName :string = ''; 
   isValidbtn:boolean = false; 
   showParagraph: boolean = false; 
    clickLogs: string[] = [];
   checkUsername() {
    this.isValidbtn = this.userName.trim() !== '';
  }


  onResetUsername(){
this.userName=''; 
this.checkUsername() ;
this.logButtonClick('Reset Username'); 


  }
    
  onToggleParagraph (){
this .showParagraph= !this.showParagraph; 
this.logButtonClick('Toggle Paragraph'); 



  }

  logButtonClick(buttonName: string) {
    const timestamp = new Date().toLocaleString();
    this.clickLogs.push(`${timestamp}: ${buttonName} button clicked`); 
  }
}
