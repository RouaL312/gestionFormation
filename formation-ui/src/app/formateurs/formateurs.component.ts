import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Formateurs} from "../model/Formateurs";
import {FormateursService} from "../shared/service/formateurs.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Session} from "../model/Session";
import {SessionService} from "../shared/service/session.service";
import {Organismes} from "../model/Organismes";
import {OrganismesService} from "../shared/service/organisme.service";

let FORMATEURS: Formateurs[] = [];

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {
  openpopup: boolean = false;
  FormateurGroup!: FormGroup;
  FormateurForm!: Formateurs;
  displayEdit: boolean = false;
  displayAdd: boolean = false;
  title!: string;
  formateurs!: Formateurs[];
  formateur!: Formateurs;
  organismeList: Organismes[] = [];
  organisme!: Organismes;
  typeList = [{
    name: "INTERNATIONAL"
  },
    {
  name: "NATIONAL"
}
]

nomControl = new FormControl('', [Validators.required]);
prenomControl = new FormControl('', [Validators.required]);
telControl = new FormControl('', [Validators.required]);
organismeControl = new FormControl('', [Validators.required]);
typeControl = new FormControl('', [Validators.required]);

constructor(private organismeService:OrganismesService , private confirmationService: ConfirmationService, private formBuilder: FormBuilder,
            private formateursService: FormateursService, private messageService: MessageService,
)
{
  this.FormateurGroup = this.formBuilder.group({
    nomControl: ['', Validators.required],
    emailControl: ['', [Validators.required, Validators.email]],
    prenomControl: ['', Validators.required],
    telControl: ['', Validators.required],
    organismeControl: ['', Validators.required],
    typeControl: ['', Validators.required],
  });
  this.FormateurForm = {
    formateurId: undefined,
    nom: '',
    prenom: '',
    email: '',
    tel: undefined,
    type: '',
    organisme : undefined,
  }
}
ngOnInit()
:
void {
  this.getAllFormateurs()
}

getAllFormateurs()
{
  return this.formateursService.getAllFormateurs().subscribe(data => {
    this.formateurs = data;
    console.log(data);
    FORMATEURS = this.formateurs
  })
}

editFormateur(formateur: Formateurs)
{

  if (this.openpopup) {
    this.openpopup = false;
    this.openpopup = true;
  } else {
    this.openpopup = true;
  }
  this.title = 'Modifier Formateur';
  this.formateur = {...formateur};
  this.displayEdit = true;
  this.displayAdd = false;
  this.FormateurGroup = this.formBuilder.group({
    nomControl: [this.formateur.nom, Validators.required],
    emailControl: [this.formateur.email, [Validators.required, Validators.email]],
    prenomControl: [this.formateur.prenom, Validators.required],
    telControl: [this.formateur.tel, Validators.required],
    typeControl: [this.formateur.type, Validators.required],
    organismeControl: [this.formateur.organisme, Validators.required],
  });
  this.getAllOrganisme();
}

deleteFormateur(formateur:Formateurs)
{
  this.confirmationService.confirm({
    message: 'Voulez vous supprimer le formateur ' + formateur.nom + '?',
    header: 'Confirmation de suppression',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      if (formateur.formateurId != null) {
        this.formateursService.deleteFormateur(formateur.formateurId).subscribe(data => {
          this.hideDialog();
          this.ngOnInit();
          if (JSON.stringify(data.message == "success")) {
            this.formateurs = this.formateurs.filter(val => val.formateurId !== formateur.formateurId);

            this.messageService.add({severity: 'success', summary: 'Successful', detail: data.message, life: 1000});
          } else {
            this.messageService.add({severity: 'error', summary: 'Probléme de suppression', detail: data.message});
          }
        })
      }
    }
  });
}

addFormateur()
{
  this.displayAdd = true;
  this.displayEdit = false;
  if (this.openpopup) {
    this.openpopup = false;
    this.openpopup = true;
  } else {
    this.openpopup = true;
  }
  this.FormateurGroup = this.formBuilder.group({
    nomControl: ['', Validators.required],
    emailControl: ['', [Validators.required, Validators.email]],
    prenomControl: ['', Validators.required],
    telControl: ['', Validators.required],
    typeControl: ['', Validators.required],
    organismeControl: ['', Validators.required],
  });

  this.title = 'Ajouter Formateur';
  console.log('organisme')
  this.getAllOrganisme()
}

saveEditFormateur(formateur: Formateurs)
{
  if (this.FormateurGroup.invalid) {
    this.messageService.add({
      severity: 'error',
      summary: 'Probléme ajout formateur',
      detail: 'Vérifier votre formulaire'
    });
    return;
  }
  this.FormateurForm.nom = this.f.nomControl.value;
  this.FormateurForm.prenom = this.f.prenomControl.value;
  this.FormateurForm.type = this.f.typeControl.value;
  this.FormateurForm.email = this.f.emailControl.value;
    this.FormateurForm.organisme = this.f.organismeControl.value;
  this.FormateurForm.tel = this.f.telControl.value;
  this.FormateurForm.formateurId=formateur.formateurId;
  this.formateursService.addFormateur(this.FormateurForm).subscribe(data => {
    this.messageService.add({
      severity: 'success',
      summary: 'Ajouter formateur',
      detail: 'Le formateur est ajouté avec success'
    });

  }, error => {
    this.messageService.add({
      severity: 'error',
      summary: 'Probléme ajout formateur',
      detail: 'Impossible d\'ajouter le formateur'
    });
  })
  this.hideDialog();
  this.ngOnInit();
}

// convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.FormateurGroup.controls;
  }

saveNewFormateur()
{
  if (this.FormateurGroup.invalid) {
    this.messageService.add({
      severity: 'error',
      summary: 'Probléme ajout formateur',
      detail: 'Vérifier votre formulaire'
    });
    return;
  }
  this.FormateurForm.nom = this.f.nomControl.value;
  this.FormateurForm.prenom = this.f.prenomControl.value;
  this.FormateurForm.email = this.f.emailControl.value;
  this.FormateurForm.organisme = this.f.organismeControl.value;
  this.FormateurForm.tel = this.f.telControl.value;
  this.FormateurForm.type = this.f.typeControl.value;

  console.log(this.FormateurForm);
  this.formateursService.addFormateur(this.FormateurForm).subscribe(data => {
    this.messageService.add({
      severity: 'success',
      summary: 'Ajouter formateur',
      detail: 'le formateur est ajouté avec success'
    });
    this.formateurs = this.formateurs.filter(val => {
      return true;
    });

  }, error => {
    this.messageService.add({
      severity: 'error',
      summary: 'Probléme ajout formateur',
      detail: 'Impossible d\'ajouter le formateur'
    });
  })
  this.hideDialog();
  this.ngOnInit();
}

hideDialog()
{
  this.openpopup=false;
  this.displayEdit = false;
  this.displayAdd = false;
}


getAllOrganisme()
{
  this.organismeService.getAllOrganismes().subscribe(data => {
    console.log(this.typeList)
    this.organismeList = data;
  })

}
}
