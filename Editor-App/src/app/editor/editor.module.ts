import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FormsModule} from "@angular/forms";
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';


@NgModule({
    imports: [
        CommonModule,
        EditorRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        FroalaEditorModule.forRoot(),
         FroalaViewModule.forRoot()
    ],
    providers: [
    ],
    declarations: [EditorComponent]
})
export class EditorModule {}
