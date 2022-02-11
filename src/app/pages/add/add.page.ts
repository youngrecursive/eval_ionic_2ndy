import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OeuvreService} from '../../services/oeuvre.service';
import {OeuvreModel} from '../../models/oeuvre.model';



@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  private oeuvreForm: FormGroup;


  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public oeuvreService: OeuvreService
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.oeuvreForm = this.formBuilder.group({
      name: [''],
      image: [''],
    });
  }

  query() {

    const values = this.oeuvreForm.value;
    const oeuvre = new OeuvreModel(
      values['name'],
      values['image'],
      '544',
      '233',
      false,
      new Date()
    );
    this.oeuvreService.add(oeuvre).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  getForm() {
    return this.oeuvreForm.controls;
  }
}
