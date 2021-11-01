import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigInComponent } from './component/sig-in/sig-in.component';
import { SigUpComponent } from './component/sig-up/sig-up.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './component/main/main.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { EditorComponent } from './component/editor/editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { IntroductionCardComponent } from './component/introduction-card/introduction-card.component';
import { TrendingComponent } from './component/trending/trending.component';
import { NewComponent } from './component/new/new.component';
import { HotspotComponent } from './component/hotspot/hotspot.component';
import { DetailComponent } from './component/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ArcivesComponent } from './component/arcives/arcives.component';
import { AlbumComponent } from './component/album/album.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
 
@NgModule({
  declarations: [
    AppComponent,
    SigInComponent,
    SigUpComponent,
    HomeComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    EditorComponent,
    IntroductionCardComponent,
    TrendingComponent,
    NewComponent,
    HotspotComponent,
    DetailComponent,
    ArcivesComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSliderModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    CKEditorModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
