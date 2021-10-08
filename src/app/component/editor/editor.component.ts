import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor() { }

  public Editor = ClassicEditor;

  public Config = {
    toolbar: {
      items: [
        'heading',
        '|',
        'fontfamily',
        'fontsize',
        '|',
        'alignment',
        '|',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'strikethrough',
        'underline',
        'subscript',
        'superscript',
        '|',
        'link',
        '|',
        'outdent',
        'indent',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'code',
        'codeBlock',
        '|',
        'insertTable',
        '|',
        'uploadImage',
        'blockQuote',
        'codeBlock',
        '|',
        'undo',
        'redo'
      ],
      shouldNotGroupWhenFull: true
    },
    ckfinder: {
      uploadUrl: "http://localhost:8090/Floyd/attachment/uploadImage.do"
    }
  }

  ngOnInit(): void {
    
  }

}