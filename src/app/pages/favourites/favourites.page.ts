import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {OeuvreService} from '../../services/oeuvre.service';
import {OeuvreModel} from '../../models/oeuvre.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  private oeuvres: Object;
  private oeuvrefav: Object;

  constructor(
    public router: Router,
    public oeuvreService: OeuvreService
  ){}

  ngOnInit(){
    this.load();
  }

  load(){
    this.oeuvreService.getAll().subscribe(oeuvres => {
      this.oeuvres = oeuvres;
    });
  }

  fav(id: number){
    console.log(id);
    this.oeuvreService.getById(id).subscribe( oeuvrefav => {
      this.oeuvrefav = oeuvrefav;
      var reality = oeuvrefav['fav'];
      var newreality = false;
      reality == true ? newreality = false : newreality = true;
      const newoeuvre = new OeuvreModel(
        oeuvrefav['name'],
        oeuvrefav['image'],
        oeuvrefav['lat'],
        oeuvrefav['long'],
        newreality,
        oeuvrefav['date']
      );
      this.oeuvreService.update(oeuvrefav['id'], newoeuvre).subscribe(() => {
        this.router.navigate(['/home']);
      });
    });
  }
}