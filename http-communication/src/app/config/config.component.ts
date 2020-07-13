import { Component, OnInit } from '@angular/core';
import { Config, ConfigService} from "./config.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {
  config: Config;
  headers: string[];

  constructor(private configService: ConfigService) {
  }

  showConfig_v1() {
    this.configService.getConfig_v1()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile: data['textfile']
      })
  }

  showConfig_v2() {
    this.configService.getConfig_v2()
    //clone the data object, using its known Config shape
      .subscribe((data: Config)=> this.config = {...data});
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
    // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
        `${key}:${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`,
        this.config = { ... resp.body};
      });
  }
}
