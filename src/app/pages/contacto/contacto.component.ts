import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  exampleForm: FormGroup;

  validation_messages = {
    'nombre': [
      { type: 'required', message: 'Nombre es requerido.' }
    ],
    'correo': [
      { type: 'required', message: 'El correo es necesario' },
      { type: 'minLength', mesaage: 'El correo no cumple con los caracteres' },
      { type: 'maxLength', message: 'El correo tiene muchos caracteres' },
      { type: 'pattern', message: 'Ingresa un correo valido' }
    ],
    'tema': [
      { type: 'required', message: 'Tema es requerido.' },
    ],
    'numero': [
      { type: 'required', message: 'Telefono es requerido.' },
    ]
    ,
    'mensaje': [
      { type: 'required', message: 'Mensaje es requerido.' },
    ]
  };
  constructor(private fb: FormBuilder, 
              public firebaseService: FirebaseService,
              private router: Router,


    ) {
      this.createForm(); 
    }

    myControl = new FormControl();

   createForm() {
     this.exampleForm = this.fb.group({
       nombre: ['', Validators.required ],
       correo: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        ])
      ),
       tema: ['', Validators.required ],
       numero:['', Validators.required ],
       mensaje:['',Validators.required],
     });
   }

   resetFields(){
     this.exampleForm = this.fb.group({
       nombre: new FormControl('', Validators.required),
       correo: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        ])
      ),
       tema: new FormControl('', Validators.required),
       numero: new FormControl('', Validators.required),
       mensaje: new FormControl('', Validators.required),
     });
   
 
   }
  
   onSubmit(value){
    this.firebaseService.createUser(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/contacto']);
      }
    )
  }

  ngOnInit(): void {
   
  }

  }