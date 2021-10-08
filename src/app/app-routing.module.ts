import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SigInComponent } from './component/sig-in/sig-in.component';
import { SigUpComponent } from './component/sig-up/sig-up.component';
import {MainComponent} from "./component/main/main.component";
import { EditorComponent } from './component/editor/editor.component';
import { DetailComponent } from './component/detail/detail.component';
import { ArcivesComponent } from './component/arcives/arcives.component';
import { AlbumComponent } from './component/album/album.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'editor', component: EditorComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'arcives', component: ArcivesComponent },
      { path: 'album', component: AlbumComponent },
    ]
  },
  { path: 'sign-in', component: SigInComponent },
  { path: 'sign-up', component: SigUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
