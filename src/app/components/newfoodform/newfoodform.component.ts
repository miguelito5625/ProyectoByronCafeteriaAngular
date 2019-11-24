import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import FileUploadWithPreview from 'file-upload-with-preview'
import { PlatilloService } from 'src/app/servicios/platillo.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';




@Component({
  selector: 'app-newfoodform',
  templateUrl: './newfoodform.component.html',
  styleUrls: ['./newfoodform.component.css']
})
export class NewfoodformComponent implements OnInit {

  @ViewChild('imageInput', { static: false }) imageInput: ElementRef;

  categorias: any = [];

  idCategoria: string = "";
  
  constructor(
    // private http: HttpClient
    public platilloService: PlatilloService,
    public categoriaService: CategoriaService
    ) { 

    }

  ngOnInit() {
    this.cargarCategorias();
    this.iniciarPluginInputFile();
  }

  iniciarPluginInputFile(){
    var upload = new FileUploadWithPreview('myUniqueUploadId', {
      showDeleteButtonOnImages: true,
      text: {
          chooseFile: 'Seleccione una imagen',
          browse: 'Buscar',
          selectedCount: 'Custom Files Selected Copy'
      },
      images: {
          // baseImage: importedBaseImage,
      },
      presetFiles: [

      ],
  })
  }

  cargarCategorias(){
    this.categoriaService.ObtenerCategorias().subscribe((data: {}) => {
      // console.log(data);
      this.categorias = data;
    });
  }
  
  changeClient(value) {
    this.idCategoria = value;
}

  alertCreado(){
    Swal.fire({
      icon: 'success',
      title: 'Platillo Creado',
      showConfirmButton: false,
      timer: 2000
    })
  }

  alertCreando() {

    Swal.fire({
      title: 'Guardando platillo',
      html: 'por favor, espere.',
      timerProgressBar: true,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

  }

  formPlatillo = new FormGroup({
    inputNombre: new FormControl(''),
    inputDescripcion: new FormControl(''),
    inputPrecio: new FormControl(''),
  });

  guardarDatos() {
    this.alertCreando();
    const imagenPlatillo = this.imageInput.nativeElement.files[0];
    const formulario = new FormData();
    formulario.set('nombre', this.formPlatillo.controls.inputNombre.value);
    formulario.set('descripcion', this.formPlatillo.controls.inputDescripcion.value);
    formulario.set('precio', this.formPlatillo.controls.inputPrecio.value);
    formulario.set('image', imagenPlatillo);
    formulario.set('id_categoria', this.idCategoria);

    this.platilloService.guardarPlatillo(formulario).subscribe(res =>{
      console.log(res);
      this.alertCreado();
    });
  }

}
