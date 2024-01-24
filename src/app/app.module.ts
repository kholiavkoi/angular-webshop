import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NgOptimizedImage } from "@angular/common";
import { CartService } from "@app/services/cart.service";
import { CartComponent } from "@app/pages/cart/cart.component";
import { AppComponent } from "@app/app.component";
import { HeaderComponent } from "@app/components/header/header.component";
import { HomeComponent } from "@app/pages/home/home.component";
import { ProductsHeaderComponent } from "@app/pages/home/components/products-header/products-header.component";
import { FiltersComponent } from "@app/pages/home/components/filters/filters.component";
import { ProductBoxComponent } from "@app/pages/home/components/product-box/product-box.component";
import { AppRoutingModule } from "@app/app-routing.module";
import { StoreService } from "@app/services/store.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
