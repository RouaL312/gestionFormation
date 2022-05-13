import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";
import {Domaine} from '../model/Domaine';
import {DomainesService} from '../shared/service/domaines.service';

let DOMAINE: Domaine[] = [];

@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.scss']
})
export class DomainesComponent implements OnInit {
  openpopup: boolean = false;
  DomaineGroup!: FormGroup;
  DomaineForm!: Domaine;
  displayEdit: boolean = false;
  displayAdd: boolean = false;
  title!: string;
  domaines!: Domaine[];
  domaine!: Domaine;

  libelleControl = new FormControl('', [Validators.required]);

  constructor(private confirmationService: ConfirmationService, private formBuilder: FormBuilder,
              private messageService: MessageService,
              private domaineService: DomainesService) {
    this.DomaineGroup = this.formBuilder.group({
      libelleControl: ['', Validators.required]
    });
    this.DomaineForm = {
      domaineId: undefined,
      libelle: ''
    }

  }

  ngOnInit(): void {
    this.getAllDomaine();

  }

  getAllDomaine() {
    return this.domaineService.getAllDomaine().subscribe(data => {
      this.domaines = data;
      DOMAINE = this.domaines;

    })
  }

  editDomaine(domaine: Domaine) {

    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.title = 'Modifier Domaine';
    this.domaine = {...domaine};
    this.displayEdit = true;
    this.displayAdd = false;
    this.DomaineGroup = this.formBuilder.group({
      libelleControl: [this.domaine.libelle, Validators.required],
    });
  }

  deleteDomaine(domaine: Domaine) {
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer le domaine ' + domaine.libelle + '?',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (domaine.domaineId != null) {
          this.domaineService.deleteDomaine(domaine.domaineId).subscribe(data => {
            if (JSON.stringify(data.message == "success")) {
              this.domaines = this.domaines.filter(val => val.domaineId !== domaine.domaineId);

              this.messageService.add({severity: 'success', summary: 'Successful', detail: data.message, life: 1000});
            } else {
              this.messageService.add({severity: 'error', summary: 'Probléme de suppression', detail: data.message});
            }
          })
        }
      }
    });
  }

  addDomaine() {
    this.displayAdd = true;
    this.displayEdit = false;
    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.DomaineGroup = this.formBuilder.group({
      libelleControl: ['', Validators.required],
    });

    this.title = 'Ajouter Domaine';
    console.log('Domaine')
  }

  saveEditDomaine(domaine: Domaine) {
    if (this.DomaineGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme de modifier le Domaine',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.DomaineForm.libelle = this.f.libelleControl.value;
    this.DomaineForm.domaineId = domaine.domaineId;
    console.log(this.DomaineForm);
    this.domaineService.addDomaine(this.DomaineForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Modifier Domaine',
        detail: 'Le Domaine est modifié avec success'
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout domaine',
        detail: 'Impossible d\'ajouter le domaine'
      });
    })
  }

  hideDialog() {
    this.displayEdit = false;
    this.displayAdd = false;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.DomaineGroup.controls;
  }

  saveNewDomaine() {
    if (this.DomaineGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout Domaine',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.DomaineForm.libelle = this.f.libelleControl.value;

    this.domaineService.addDomaine(this.DomaineForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter domaine',
        detail: 'le domaine est ajouté avec success'
      });
      this.domaines = this.domaines.filter(val => {
        return true;
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout domaine',
        detail: 'Impossible d\'ajouter le domaine'
      });
    })
  }

}
