import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    
    public options: Object = {
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'underline','alert','insertImage'],
    }
   

    constructor(private router: Router) { 
        
    }
    ngOnInit() {
       
     }
}
