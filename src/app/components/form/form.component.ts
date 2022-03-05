import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private postService: PostsService
  ) {
    this.form = new FormGroup({
      titulo: new FormControl("",[]
      ),
      autor: new FormControl("", []
      ),
      imagen: new FormControl("", []
      ),
      fecha: new FormControl("", []
      ),
      categoria: new FormControl("", []
      ),
      texto: new FormControl("", []
      ),
    },
        [])
   }

  ngOnInit(): void {
  }

  getDataForm(){
    let estado = this.postService.agregarPost(this.form.value);
  }

}
