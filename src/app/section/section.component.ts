import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() {
  }
  msg: string | undefined;
  clickMessage() {
    this.msg = 'The term "burger" can also be applied to the meat patty on its own, especially in the United Kingdom, where the term "patty" is rarely used, or the term can even refer simply to ground beef.';
    return this.msg;
  }
  msg1: string | undefined;
  clickEvent() {
    this.msg1 = 'which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.';
    return this.msg1;
  }

  msg2: string | undefined;
  clickMsg() {
    this.msg2 = 'Biryani is popular throughout the Indian subcontinent, as well as among its diaspora.It is also prepared in other regions such as parts of Afghanistan, Pakistan, Iran, and Iraq.';
    return this.msg2;
  }
  msg3: string | undefined;
  clickMore() {
    this.msg3 = 'It is commonly used to flavor foods and to tenderize tougher cuts of meat.The process may last seconds or days. Marinades vary between different cuisines. For example, in Indian cuisine the marinade is usually prepared with a mixture of spices.';
    return this.msg3;
  }



  ngOnInit(): void {
  }

}
