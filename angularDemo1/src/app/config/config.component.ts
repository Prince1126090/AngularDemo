import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  configs: any[];

  constructor(private moduleService: ConfigService) {

  }

  ngOnInit() {
    this.showModule();
  }

  showModule() {
    this.moduleService.getConfigs().subscribe(configs => this.configs = configs);
    console.log(this.configs);
  }

}
