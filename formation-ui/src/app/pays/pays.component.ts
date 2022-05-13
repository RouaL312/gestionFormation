import { Component, OnInit } from '@angular/core';
import {Pays} from "../model/Pays";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Organismes} from "../model/Organismes";
import {Formateurs} from "../model/Formateurs";
import {ConfirmationService, MessageService} from "primeng/api";
import {OrganismesService} from "../shared/service/organisme.service";
import {PaysService} from "../shared/service/pays.service";
let PAYS: Pays[]=[];
@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {
  openpopup: boolean = false;
  PaysGroup!: FormGroup;
  PaysForm!: Pays;
  displayEdit: boolean = false;
  displayAdd: boolean = false;
  title!: string;
  payss!: Pays[];
  pays!: Pays;


  libelleControl = new FormControl('', [Validators.required]);
  constructor(private confirmationService: ConfirmationService, private formBuilder: FormBuilder,
              private messageService: MessageService,
              private paysService: PaysService) {
    this.PaysGroup=this.formBuilder.group({
      libelleControl:['',Validators.required]
    });
    this.PaysForm={
      paysId:undefined,
      libelle:''
    }
  }

  ngOnInit(): void {
    this.getAllPays();
  }
getAllPays(){
    return this.paysService.getAllPays().subscribe(data=>{
      this.payss=data;
      PAYS= this.payss;

    })
}
  editPays(pays: Pays) {

    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.title = 'Modifier Pays';
    this.pays = {...pays};
    this.displayEdit = true;
    this.displayAdd = false;
    this.PaysGroup = this.formBuilder.group({
      libelleControl: [this.pays.libelle, Validators.required],
    });
  }
  deletePays(pays: Pays) {
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer le pays ' + pays.libelle + '?',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (pays.paysId != null) {
          this.paysService.deletePays(pays.paysId).subscribe(data => {
            if (JSON.stringify(data.message == "success")) {
              this.payss = this.payss.filter(val => val.paysId !== pays.paysId);

              this.messageService.add({severity: 'success', summary: 'Successful', detail: data.message, life: 1000});
            } else {
              this.messageService.add({severity: 'error', summary: 'Probléme de suppression', detail: data.message});
            }
          })
        }
      }
    });
  }
  addPays() {
    this.displayAdd = true;
    this.displayEdit = false;
    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.PaysGroup = this.formBuilder.group({
      libelleControl: ['', Validators.required],
    });

    this.title = 'Ajouter pays';
    console.log('organisme')
  }
  saveEditPays(pays: Pays) {
    console.log(pays)
    if (this.PaysGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout pays',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.PaysForm.libelle = this.f.libelleControl.value;
    this.PaysForm.paysId=pays.paysId;
    console.log(this.PaysForm);
    this.paysService.addPays(this.PaysForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter pays',
        detail: 'Le pays est ajouté avec success'
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout pays',
        detail: 'Impossible d\'ajouter le pays'
      });
    })
  }
  hideDialog() {
    this.displayEdit = false;
    this.displayAdd = false;
  }
  get f(): { [key: string]: AbstractControl } {
    return this.PaysGroup.controls;
  }
  saveNewPays() {
    if (this.PaysGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout pays',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.PaysForm.libelle = this.f.libelleControl.value;

    this.paysService.addPays(this.PaysForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter pays',
        detail: 'le pays est ajouté avec success'
      });
      this.payss = this.payss.filter(val => {
        return true;
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout pays',
        detail: 'Impossible d\'ajouter le pays'
      });
    })
  }
}
