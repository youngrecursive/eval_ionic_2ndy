import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {OeuvreService} from '../../services/oeuvre.service';
import {OeuvreModel} from '../../models/oeuvre.model';
import {Router} from '@angular/router';
// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';


@Component({
  selector: 'app-oeuvres',
  templateUrl: './oeuvres.page.html',
  styleUrls: ['./oeuvres.page.scss'],
})
export class OeuvresPage implements OnInit {
  private oeuvres: Object;
  private oeuvrefav: Object;
  // private nativeGeocoder: NativeGeocoder;

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
      // let options: NativeGeocoderOptions = {
      //   useLocale: true,
      //   maxResults: 5
      // };
      // var count= Object.keys(oeuvres).length;
      // for (let i = 0; i <= count; i++) {
      //   this.nativeGeocoder.reverseGeocode(oeuvres[i]['lat'], oeuvres[i]['long'], options)
      // .then((result: NativeGeocoderResult[]) => console.log(JSON.stringify(result[0])))
      // .catch((error: any) => console.log(error));
      // }

      // Le code ci-dessus permet de boucler sur les oeuvres, récuperer les lat et long puis de transformer ça en de vrais adresses mais ça ne marche pas ici...
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