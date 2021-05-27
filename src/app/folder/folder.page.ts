import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})



export class FolderPage implements OnInit {


  @Input()
  pageId: string = '';

  @Output()

  changeValue: EventEmitter<string> = new EventEmitter<string>();


  public folder: string;
  public nomeEmpresa:string;
  public idPagina:string;

  

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.idPagina = 'Home';
    
    this.nomeEmpresa = 'Mobilogix'
    this.folder = this.activatedRoute.snapshot.paramMap.get('id')
    this.idPagina = this.folder;
    console.log(this.folder);
      
  
  }

}
