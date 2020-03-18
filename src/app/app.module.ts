import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component';
@NgModule({
    imports: [
        BrowserModule
    ], //other angular modules you need
    declarations: [
        AppComponent 
    ], //to make compnents directives and pipes
    bootstrap: [AppComponent]  // root module for knowing the entry point
})
export class AppModule {{

}}