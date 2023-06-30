import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  matricula!:String
  nombre!:String
  edad!:number
  correo!:String
  calificacion!:number
  foto!:String

  alumnosForm!:FormGroup;
  constructor(private readonly fb:FormBuilder){
    this.alumnosForm = this.initForm();
  }

  onSubmit():void{
    // console.log('Form->', this.alumnosForm.value);
    this.obtenerValor();
  }

  obtenerValor():void{
    this.matricula=this.alumnosForm.get('matricula')?.value;
    this.nombre=this.alumnosForm.get('nombre')?.value;
    this.edad=this.alumnosForm.get('edad')?.value;
    this.correo=this.alumnosForm.get('correo')?.value;
    this.calificacion=this.alumnosForm.get('calif')?.value;
    this.foto=this.alumnosForm.get('foto')?.value;

    // console.log('matricula: ',mat)
    // console.log('nombre: ',nom)

  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[Validators.required, Validators.minLength(3)]],
      nombre:['',[Validators.required]],
      edad:['',[Validators.required]],
      correo:['',[Validators.required]],
      calif:['',[Validators.required]],
      foto:['',[Validators.required]],
    })
  }
}
