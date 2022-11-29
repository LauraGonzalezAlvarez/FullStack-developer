import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppWebComponent } from './app-web/app-web.component';
import { ImgComponent } from './componets/img/img.component';
import { ProductComponent } from './componets/product/product.component';
import { ProductsComponent } from './componets/products/products.component';
import { NavComponent } from './componets/nav/nav.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppWebComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    HighlightDirective,
    TimeAgoPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

