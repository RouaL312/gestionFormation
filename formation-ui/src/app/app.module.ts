import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatKeyboardModule} from 'angular-onscreen-material-keyboard';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./shared/guard/auth-guard.service";
import {LoginGuardService} from "./shared/guard/login-guard.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {NgbdSortableHeader} from "./shared/sortable.directive";
import {MatTreeModule} from "@angular/material/tree";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSortModule} from "@angular/material/sort";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from "@angular/material/chips";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {CarouselModule} from "primeng/carousel";
import {LightboxModule} from "primeng/lightbox";
import {MetismenuAngularModule} from "@metismenu/angular";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {NgxSpinnerModule} from "ngx-spinner";
import {NestableModule} from "ngx-nestable";
import {NgApexchartsModule} from "ng-apexcharts";
import {ChartsModule} from "ng2-charts";
import {NgxDropzoneModule} from "ngx-dropzone";
import {SharedService} from "./shared/shared.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {AdminComponent} from "./admin/admin.component";
import {NavHeaderComponent} from "./elements/nav-header/nav-header.component";
import {NavigationComponent} from "./elements/navigation/navigation.component";
import {FooterComponent} from "./elements/footer/footer.component";
import {HeaderComponent} from "./elements/header/header.component";
import {SwitcherComponent} from "./elements/switcher/switcher.component";
import {HttpClientInterceptor} from "./shared/http-client-interceptor";
import {LoadingComponent} from "./elements/loading/loading.component";
import {LayoutsComponent} from './layouts/layouts.component';
import {NgxWebstorageModule} from "ngx-webstorage";
import {ParametreComponent} from './parametre/parametre.component';
import {UsersComponent} from './users/users.component';
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {EditorModule} from "primeng/editor";
import {DropdownModule} from "primeng/dropdown";
import {TimeagoModule} from "ngx-timeago";
import {CardModule} from "primeng/card";
import {TimelineModule} from "primeng/timeline";
import {MenubarModule} from "primeng/menubar";
import {DividerModule} from "primeng/divider";
import {SelectButtonModule} from "primeng/selectbutton";
import {MenuModule} from "primeng/menu";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {UserService} from "./shared/service/User.service";

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NgbdSortableHeader,
    LoginComponent,
    AdminComponent,
    NavHeaderComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    SwitcherComponent,
    LoadingComponent,
    LayoutsComponent,
    ParametreComponent,
    UsersComponent,
  ],
  imports: [
    InputTextModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    MatKeyboardModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    FullCalendarModule,
    MetismenuAngularModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    CarouselModule,
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    DragDropModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
    RippleModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    EditorModule,
    DropdownModule,
    TimeagoModule.forRoot(),
    CardModule,
    TimelineModule,
    NgxWebstorageModule.forRoot(),
    MenubarModule,
    DividerModule,
    SelectButtonModule,
    MenuModule,
    ToggleButtonModule,
    ConfirmPopupModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    ConfirmDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    UserService,
    LoginGuardService,
    SharedService,
    ConfirmationService,
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}
