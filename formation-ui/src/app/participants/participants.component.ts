import {Participants} from "../model/Participants";
import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";
import {ParticipantsService} from "../shared/service/participants.service";
import {Pays} from "../model/Pays";
import {PaysService} from "../shared/service/pays.service";

let FORMATEURS: Participants[] = [];

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  openpopup: boolean = false;
  ParticipantGroup!: FormGroup;
  ParticipantForm!: Participants;
  displayEdit: boolean = false;
  displayAdd: boolean = false;
  title!: string;
  participants!: Participants[];
  participant!: Participants;
  paysList:Pays[]=[]


  nomControl = new FormControl('', [Validators.required]);
  prenomControl = new FormControl('', [Validators.required]);
  telControl = new FormControl('', [Validators.required]);
  paysControl = new FormControl('', [Validators.required]);

  constructor( private confirmationService: ConfirmationService, private formBuilder: FormBuilder,private paysService: PaysService,
              private participantsService: ParticipantsService, private messageService: MessageService,
  ) {
    this.ParticipantGroup = this.formBuilder.group({
      nomControl: ['', Validators.required],
      emailControl: ['', [Validators.required, Validators.email]],
      prenomControl: ['', Validators.required],
      telControl: ['', Validators.required],
      tpaysControl: ['', Validators.required],
    });
    this.ParticipantForm = {
      participantId: undefined,
      nom: '',
      prenom: '',
      email: '',
      tel: undefined,
      pays: undefined,
    }
  }

  ngOnInit()
    :
    void {
    this.getAllParticipants()
  }

  getAllParticipants() {
    return this.participantsService.getAllParticipants().subscribe(data => {
      this.participants = data;
      console.log(data);
      FORMATEURS = this.participants
    })
  }

  editParticipant(participant: Participants) {

    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.title = 'Modifier Participant';
    this.participant = {...participant};
    this.displayEdit = true;
    this.displayAdd = false;
    this.ParticipantGroup = this.formBuilder.group({
      nomControl: [this.participant.nom, Validators.required],
      emailControl: [this.participant.email, [Validators.required, Validators.email]],
      prenomControl: [this.participant.prenom, Validators.required],
      telControl: [this.participant.tel, Validators.required],
      paysControl: [this.participant.pays!.libelle, Validators.required],
    });
    this.getAllPays()
  }

  deleteParticipant(participant: Participants) {
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer le participant ' + participant.nom + '?',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (participant.participantId != null) {
          this.participantsService.deleteParticipant(participant.participantId).subscribe(data => {
            if (JSON.stringify(data.message == "success")) {
              this.participants = this.participants.filter(val => val.participantId !== participant.participantId);

              this.messageService.add({severity: 'success', summary: 'Successful', detail: data.message, life: 1000});
            } else {
              this.messageService.add({severity: 'error', summary: 'Probléme de suppression', detail: data.message});
            }
          })
        }
      }
    });
  }

  addParticipant() {
    this.displayAdd = true;
    this.displayEdit = false;
    if (this.openpopup) {
      this.openpopup = false;
      this.openpopup = true;
    } else {
      this.openpopup = true;
    }
    this.ParticipantGroup = this.formBuilder.group({
      nomControl: ['', Validators.required],
      emailControl: ['', [Validators.required, Validators.email]],
      prenomControl: ['', Validators.required],
      telControl: ['', Validators.required],
      paysControl: ['', Validators.required],
    });
    this.getAllPays();
    this.title = 'Ajouter Participant';
  }

  saveEditParticipant(participant: Participants) {
    if (this.ParticipantGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout participant',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.ParticipantForm.nom = this.f.nomControl.value;
    this.ParticipantForm.prenom = this.f.prenomControl.value;
    this.ParticipantForm.pays = this.f.paysControl.value;
    this.ParticipantForm.email = this.f.emailControl.value;
    this.ParticipantForm.tel = this.f.telControl.value;
    this.ParticipantForm.participantId = participant.participantId;
    this.participantsService.addParticipant(this.ParticipantForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter participant',
        detail: 'Le participant est ajouté avec success'
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout participant',
        detail: 'Impossible d\'ajouter le participant'
      });
    })
  }

// convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.ParticipantGroup.controls;
  }

  saveNewParticipant() {
    if (this.ParticipantGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout participant',
        detail: 'Vérifier votre formulaire'
      });
      return;
    }
    this.ParticipantForm.nom = this.f.nomControl.value;
    this.ParticipantForm.prenom = this.f.prenomControl.value;
    this.ParticipantForm.email = this.f.emailControl.value;
    this.ParticipantForm.tel = this.f.telControl.value;
    this.ParticipantForm.pays = this.f.paysControl.value;

    console.log(this.ParticipantForm);
    this.participantsService.addParticipant(this.ParticipantForm).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajouter participant',
        detail: 'le participant est ajouté avec success'
      });
      this.participants = this.participants.filter(val => {
        return true;
      });

    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Probléme ajout participant',
        detail: 'Impossible d\'ajouter le participant'
      });
    })
  }

  hideDialog() {
    this.displayEdit = false;
    this.displayAdd = false;
  }
  getAllPays()
  {
    this.paysService.getAllPays().subscribe(data=>{
      this.paysList=data;
    })
  }
}
