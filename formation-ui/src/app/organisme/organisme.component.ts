import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Formateurs} from "../model/Formateurs";
import {ConfirmationService, MessageService} from "primeng/api";
import {Organismes} from "../model/Organismes";
import {OrganismesService} from "../shared/service/organisme.service";

let ORGANISMES: Organismes[] = [];

@Component({
  selector: 'app-organisme',
  templateUrl: './organisme.component.html',
  styleUrls: ['./organisme.component.scss']
})
export class OrganismeComponent implements OnInit {

  openpopup: boolean = false;
  OrganismeGroup!: FormGroup;
  OrganismeForm!: Organismes;
  displayEdit: boolean = false;
  displayAdd: boolean = false;
  title!: string;
  organismes!: Organismes[];
  organisme!: Organismes;
  formateurList: Formateurs[] = [];

  libelleControl = new FormControl('', [Validators.required]);

  constructor(private confirmationService: ConfirmationService, private formBuilder: FormBuilder,
              private messageService: MessageService,
              private organismeService: OrganismesService
  ) {
    this.OrganismeGroup = this.formBuilder.group({
      libelleControl: ['', Validators.required],
    });
    this.OrganismeForm = {
      organismeId: undefined,
      libelle: '',
    }
  }

  ngOnInit()
    :
    void {
    this.getAllOrganismes()
  }

  getAllOrganismes() {
    return this.organismeService.getAllOrganismes().subscribe(data => {
      this.organismes = data;
      console.log(data);
      ORGANISMES = this.organismes
    })
  }

  editOrganisme(organisme: Organismes) {

    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.title = 'Modifier Organisme';
    this.organisme = {...organisme};
    console.log(this.organisme)
    this.displayEdit = true;
    this.displayAdd = false;
    this.OrganismeGroup = this.formBuilder.group({
      libelleControl: [this.organisme.libelle, Validators.required],
    });
  }

  deleteOrganisme(organisme: Organismes) {
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer le organisme ' + organisme.libelle + '?',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (organisme.organismeId != null) {
          this.organismeService.deleteOrganisme(organisme.organismeId).subscribe(data => {
            this.hideDialog();
            this.ngOnInit();
            if (JSON.stringify(data.message == "success")) {
              this.organismes = this.organismes.filter(val => val.organismeId !== organisme.organismeId);

              this.messageService.add({severity: 'success', summary: 'Successful', detail: data.message, life: 1000});
            } else {
              this.messageService.add({severity: 'error', summary: 'Probléme de suppression', detail: data.message});
            }
          })
        }
      }
    });
  }

  addOrganisme() {
    this.displayAdd = true;
    this.displayEdit = false;
    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.OrganismeGroup = this.formBuilder.group({
      libelleControl: ['', Validators.required],
    });

    this.title = 'Ajouter Organisme';
    console.log('organisme')
  }

  saveEditOrganisme(organisme: Organismes) {
    if (this.OrganismeGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme de modification d\'organisme',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.OrganismeForm.libelle = this.f.libelleControl.value;
    this.OrganismeForm.organismeId = this.organisme.organismeId;
    console.log(this.OrganismeForm);
    this.organismeService.addOrganisme(this.OrganismeForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Modifier organisme',
        detail: 'L\'organisme est modifié avec success'
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme de modification d\'organisme',
        detail: 'Impossible de modifier l\'organisme'
      });
    })
    this.hideDialog();
    this.ngOnInit();
  }

// convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.OrganismeGroup.controls;
  }

  saveNewOrganisme() {
    if (this.OrganismeGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout organisme',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.OrganismeForm.libelle = this.f.libelleControl.value;
    console.log(this.OrganismeForm);
    this.organismeService.addOrganisme(this.OrganismeForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter organisme',
        detail: 'le organisme est ajouté avec success'
      });
      this.organismes = this.organismes.filter(val => {
        return true;
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout organisme',
        detail: 'Impossible d\'ajouter le organisme'
      });
    })
    this.hideDialog();
    this.ngOnInit();
  }

  hideDialog() {
    this.openpopup=false;
    this.displayEdit = false;
    this.displayAdd = false;
  }

}
