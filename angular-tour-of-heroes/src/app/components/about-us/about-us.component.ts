import { Component } from '@angular/core';

// @ts-ignore
import * as jsonData from 'src/assets/JSON/image.json';

import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],


})
export class AboutUsComponent {

  jsonArray = (jsonData as any).default;


}
