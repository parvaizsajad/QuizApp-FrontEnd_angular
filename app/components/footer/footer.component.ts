import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  typesOfShoes = ['red', 'black', 'white', 'yellow', 'green'];
  data = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
  }
  constructor() { }

  ngOnInit(): void {
  }

}
