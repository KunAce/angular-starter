import {ServiceModule} from "./service-and-module";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        ServiceModule,
    ],
})
export class AppModule {}
