import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../module.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  configs: any[];

  constructor(private moduleService: ModuleService) {

  }

  ngOnInit() {
    this.showModule();
  }

  showModule() {
    this.moduleService.getConfigs().subscribe(configs => this.configs = configs);
    console.log(this.configs);
  }

}
