import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  headers: string[];
  config: Config;

  constructor(private configService: ConfigService) {}

  clear() {
    this.config = undefined;
    // ToDo: add more.
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data }, // success path
      );
  }

  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe((data:Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile: data['textfile']
      });
  }

  showConfig_v2() {
    this.configService.getConfig()
    // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = { ...data });
  }



}
