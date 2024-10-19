import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as jsonData from 'src/assets/JSON/listOfData.json';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";  // Import the JSON file

@Component({
  selector: 'app-contuct-us',
  templateUrl: './contuct-us.component.html',
  styleUrls: ['./contuct-us.component.css']
})
export class ContuctUsComponent implements  OnInit{

  jsonArray = (jsonData as any).default;

  sanitizeSvgContent(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {

  }



}
