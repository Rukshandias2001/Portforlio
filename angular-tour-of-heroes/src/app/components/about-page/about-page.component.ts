import {Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit{
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const elements = this.el.nativeElement.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }

    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
    document.body.appendChild(css);
  }
}

class TxtType {
  toRotate: string[];
  el: HTMLElement;
  loopNum: number;
  period: number;
  txt: string;
  isDeleting: boolean;

  constructor(el: HTMLElement, toRotate: string[], period: number) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = period || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      this.tick();
    }, delta);
  }
}
