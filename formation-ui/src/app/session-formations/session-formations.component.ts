import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Session} from "../model/Session";
import {ConfirmationService, MessageService} from "primeng/api";
import {SessionService} from "../shared/service/session.service";
import {FormateursService} from "../shared/service/formateurs.service";
import {Formateurs} from "../model/Formateurs";
let SESSIONS: Session[] = [];


@Component({
  selector: 'app-session-formations',
  templateUrl: './session-formations.component.html',
  styleUrls: ['./session-formations.component.scss']
})
export class SessionFormationsComponent implements OnInit {

  openpopup: boolean = false;
  SessionGroup!: FormGroup;
  SessionForm!: Session;
  displayEdit: boolean = false;
  displayAdd: boolean = false;
  title!: string;
  sessions!: Session[];
  session!: Session;
  formateurList: Formateurs[] = [];

  lieuControl = new FormControl('', [Validators.required]);
  dateDebutControl = new FormControl('', [Validators.required]);
  dateFinControl = new FormControl('', [Validators.required]);
  nbParticipantsControl = new FormControl('', [Validators.required]);
  formateurControl = new FormControl('', [Validators.required]);

  constructor( private confirmationService: ConfirmationService, private formBuilder: FormBuilder,
               private messageService: MessageService,
              private sessionService: SessionService,private formateurService:FormateursService
  )
  {
    this.SessionGroup = this.formBuilder.group({
      nomControl: ['', Validators.required],
      emailControl: ['', [Validators.required, Validators.email]],
      prenomControl: ['', Validators.required],
      telControl: ['', Validators.required],
      sessionControl: ['', Validators.required],
      organismeControl: ['', Validators.required],
      typeControl: ['', Validators.required],
    });
    this.SessionForm = {
      SessionId: undefined,
      lieu: '',
      dateDebut: undefined,
      dateFin: undefined,
      nbParticipants:undefined ,
      formateur: undefined,

    }
  }
  ngOnInit()
    :
    void {
    this.getAllSessions()
  }

  getAllSessions()
  {
    return this.sessionService.getAllSession().subscribe(data => {
      this.sessions = data;
      console.log(data);
      SESSIONS = this.sessions
    })
  }

  editSession(session:Session
  )
  {

    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.title = 'Modifier Session';
    this.session = {...session};
    this.displayEdit = true;
    this.displayAdd = false;
    this.SessionGroup = this.formBuilder.group({
      lieuControl: [this.session.lieu, Validators.required],
      dateDebutControl: [this.session.dateDebut, [Validators.required, Validators.email]],
      dateFinControl: [this.session.dateFin, Validators.required],
      nbParticipantsControl: [this.session.nbParticipants, Validators.required],
      formateurControl: [this.session.formateur, Validators.required],
    });
    this.getAllFormateur();
  }

  deleteSession(session:Session
  )
  {
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer le session ' + session.lieu + '?',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (session.SessionId != null) {
          this.sessionService.deleteSession(session.SessionId).subscribe(data => {
            if (JSON.stringify(data.message == "success")) {
              this.sessions = this.sessions.filter(val => val.SessionId !== session.SessionId);

              this.messageService.add({severity: 'success', summary: 'Successful', detail: data.message, life: 1000});
            } else {
              this.messageService.add({severity: 'error', summary: 'Probléme de suppression', detail: data.message});
            }
          })
        }
      }
    });
  }

  addSession()
  {
    this.displayAdd = true;
    this.displayEdit = false;
    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.SessionGroup = this.formBuilder.group({
      nomControl: ['', Validators.required],
      emailControl: ['', [Validators.required, Validators.email]],
      prenomControl: ['', Validators.required],
      telControl: ['', Validators.required],
      typeControl: ['', Validators.required],
      sessionControl: ['', Validators.required],
      organismeControl: ['', Validators.required],
    });

    this.title = 'Ajouter Session';
    this.getAllFormateur();
    console.log('session')
  }

  saveEditSession(session: Session
  )
  {
    if (this.SessionGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout session',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.SessionForm.lieu = this.f.lieuControl.value;
    this.SessionForm.dateDebut = this.f.dateDebutControl.value;
    this.SessionForm.dateFin = this.f.dateFinControl.value;
    this.SessionForm.nbParticipants = this.f.nbParticipantsControl.value;
    this.SessionForm.formateur = this.f.formateurControl.value;
    console.log(this.SessionForm);
    this.sessionService.addSession(this.SessionForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter session',
        detail: 'Le session est ajouté avec success'
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout session',
        detail: 'Impossible d\'ajouter le session'
      });
    })
  }

// convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.SessionGroup.controls;
  }

  saveNewSession()
  {
    if (this.SessionGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout session',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.SessionForm.lieu = this.f.lieuControl.value;
    this.SessionForm.dateDebut = this.f.dateDebutControl.value;
    this.SessionForm.dateFin = this.f.dateFinControl.value;
    this.SessionForm.nbParticipants = this.f.nbParticipantsControl.value;
    this.SessionForm.formateur = this.f.formateurControl.value;

    console.log(this.SessionForm);
    this.sessionService.addSession(this.SessionForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter session',
        detail: 'le session est ajouté avec success'
      });
      this.sessions = this.sessions.filter(val => {
        return true;
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout session',
        detail: 'Impossible d\'ajouter le session'
      });
    })
  }

  hideDialog()
  {
    this.displayEdit = false;
    this.displayAdd = false;
  }


   getAllFormateur() {
    this.formateurService.getAllFormateurs().subscribe(data => {
      console.log(data)
      this.formateurList = data;
    })
  }
}

