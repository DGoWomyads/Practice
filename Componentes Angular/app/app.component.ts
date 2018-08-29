import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputText = "";
  lblButton = "Reset";
  oStateButton = this.inputText.length <= 0;

  onInputChangue(){
    this.oStateButton = this.inputText.length <= 0;
  };

  onReset() {
    this.inputText = "";
    this.onInputChangue();
  };



  /*title = "";
  disabled = true;
  clicked = false;
  textButton = 'De click aca';
  inputText = 'No';

  onInputUpdate(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
    this.disabled = this.inputText.length <= 0;
  };

  onclickButton() {
    this.clicked = !this.clicked;
    this.textButton = this.clicked ? 'desoprime' : 'De click aca';
  };

  noText() {
    this.disabled = this.inputText.length <= 0;
  }*/
}
