import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { MaterialModule } from '@angular/material'

// Used Components
import { AppComponent } from './app.component'
import { ContentComponent } from './content.component'
import { NavComponent } from './nav.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ContentComponent,
        NavComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
