import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Formations} from "../model/Formations";
import {ConfirmationService, MessageService} from "primeng/api";
import {FormationsService} from "../shared/service/formations.service";
import {DomainesService} from "../shared/service/domaines.service";
import {Domaine} from "../model/Domaine";
let FORMATIONS: Formations[] = [];

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})

export class FormationsComponent implements OnInit {


  openpopup: boolean = false;
  FormationGroup!: FormGroup;
  FormationForm!: Formations;
  displayEdit: boolean = false;
  displayAdd: boolean = false;
  title!: string;
  formations!: Formations[];
  formation!: Formations;
  domaineList: Domaine[] = [];

  titreControl = new FormControl('', [Validators.required]);
  typeFormationControl = new FormControl('', [Validators.required]);
  nbSessionControl = new FormControl('', [Validators.required]);
  dureeControl = new FormControl('', [Validators.required]);
  domaineControl = new FormControl('', [Validators.required]);
  budgetControl = new FormControl('', [Validators.required]);

  constructor(private confirmationService: ConfirmationService, private formBuilder: FormBuilder,
              private messageService: MessageService,
              private formationService: FormationsService, private domainesService: DomainesService
  ) {
    this.FormationGroup = this.formBuilder.group({
      titreControl: ['', Validators.required],
      typeFormationControl: ['', Validators.required],
      nbSessionControl: ['', Validators.required],
      dureeControl: ['', Validators.required],
      domaineControl: ['', Validators.required],
      budgetControl: ['', Validators.required],
    });
    this.FormationForm = {
      formationId: undefined,
      titre: '',
      typeFormation: '',
      nbSession: undefined,
      duree: '',
      domaine: undefined,
      budget: undefined,

    }
  }

  ngOnInit():
    void {
    this.getAllFormations()
  }

  getAllFormations() {
    return this.formationService.getAllFormations().subscribe(data => {
      this.formations = data;
      console.log(data);
      FORMATIONS = this.formations
    })
  }

  editFormation(formation: Formations) {

    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.title = 'Modifier Formation';
    this.formation = {...formation};
    this.displayEdit = true;
    this.displayAdd = false;
    this.FormationGroup = this.formBuilder.group({
      titreControl: [this.formation.titre, Validators.required],
      typeFormationControl: [this.formation.typeFormation, Validators.required],
      nbSessionControl: [this.formation.nbSession, Validators.required],
      dureeControl: [this.formation.duree, Validators.required],
      domaineControl: [this.formation.domaine, Validators.required],
      budgetControl: [this.formation.budget, Validators.required],
    });
    this.getAllDomaine();
  }

  deleteFormation(formation: Formations) {
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer le formation ' + formation.titre + '?',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (formation.formationId != null) {
          this.formationService.deleteFormation(formation.formationId).subscribe(data => {
            if (JSON.stringify(data.message == "success")) {
              this.formations = this.formations.filter(val => val.formationId !== formation.formationId);

              this.messageService.add({severity: 'success', summary: 'Successful', detail: data.message, life: 1000});
            } else {
              this.messageService.add({severity: 'error', summary: 'Probléme de suppression', detail: data.message});
            }
          })
        }
      }
    });
  }

  addFormation() {
    this.displayAdd = true;
    this.displayEdit = false;
    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.FormationGroup = this.formBuilder.group({
      titreControl: ['', Validators.required],
      typeFormationControl: ['', Validators.required],
      nbSessionControl: ['', Validators.required],
      dureeControl: ['', Validators.required],
      domaineControl: ['', Validators.required],
      budgetControl: ['', Validators.required],

    });

    this.title = 'Ajouter Formation';
    this.getAllDomaine();
    console.log('formation')
  }

  saveEditFormation(formation: Formations) {
    if (this.FormationGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout formation',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.FormationForm.titre = this.f.titreControl.value;
    this.FormationForm.typeFormation = this.f.typeFormationControl.value;
    this.FormationForm.nbSession = this.f.nbSessionControl.value;
    this.FormationForm.duree = this.f.dureeControl.value;
    this.FormationForm.domaine = this.f.domaineControl.value;
    this.FormationForm.budget = this.f.budgetControl.value;
    this.FormationForm.formationId = formation.formationId;
    console.log(this.FormationForm)
    this.formationService.addFormation(this.FormationForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Modifier formation',
        detail: 'La formation est modifié avec success'
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme de modification de formation',
        detail: 'Impossible de modifier la formation'
      });
    })
  }

// convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.FormationGroup.controls;
  }

  saveNewFormation() {
    if (this.FormationGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout formation',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.FormationForm.titre = this.f.titreControl.value;
    this.FormationForm.typeFormation = this.f.typeFormationControl.value;
    this.FormationForm.nbSession = this.f.nbSessionControl.value;
    this.FormationForm.duree = this.f.dureeControl.value;
    this.FormationForm.domaine = this.f.domaineControl.value;
    this.FormationForm.budget = this.f.budgetControl.value;

    console.log(this.FormationForm);
    this.formationService.addFormation(this.FormationForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter formation',
        detail: 'le formation est ajouté avec success'
      });
      this.formations = this.formations.filter(val => {
        return true;
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout formation',
        detail: 'Impossible d\'ajouter le formation'
      });
    })
  }

  hideDialog() {
    this.displayEdit = false;
    this.displayAdd = false;
  }


  getAllDomaine() {
    this.domainesService.getAllDomaine().subscribe(data => {
      console.log(data)
      this.domaineList = data;
    })
  }
}
