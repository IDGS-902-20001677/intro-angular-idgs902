import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string="ssss";

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:IAlumnosIric[]=[
    {
      matricula:1234,
      nombre:'pedro',
      correo:'pedro@gmail.com',
      foto:"https://w7.pngwing.com/pngs/868/856/png-transparent-drawing-silhouette-person-silhouette-animals-photography-logo-thumbnail.png"
    },
    {
      matricula:12342,
      nombre:'pedro2',
      correo:'pedro2@gmail.com',
      foto:"https://w7.pngwing.com/pngs/868/856/png-transparent-drawing-silhouette-person-silhouette-animals-photography-logo-thumbnail.png"
    },
  ];
}
