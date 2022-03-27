import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';


import { LightComponent } from './dashboard/light/light.component';
import { DarkComponent } from './dashboard/dark/dark.component';

import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReviewsComponent } from './reviews/reviews.component';


import { ProfileComponent } from './apps/profile/profile.component';
import { PostDetailsComponent } from './apps/post-details/post-details.component';
import { ComposeComponent } from './apps/email/compose/compose.component';
import { InboxComponent } from './apps/email/inbox/inbox.component';
import { ReadComponent } from './apps/email/read/read.component';
import { CalenderComponent } from './apps/calender/calender.component';
import { ProductGridComponent } from './apps/shop/product-grid/product-grid.component';
import { ProductListComponent } from './apps/shop/product-list/product-list.component';
import { ProductDetailComponent } from './apps/shop/product-detail/product-detail.component';
import { OrderComponent } from './apps/shop/order/order.component';
import { CheckoutComponent } from './apps/shop/checkout/checkout.component';
import { InvoiceComponent } from './apps/shop/invoice/invoice.component';
import { EcomCustomersComponent } from './apps/shop/ecom-customers/ecom-customers.component';

import { ApexComponent } from './charts/apex/apex.component';
import { LineComponent } from './charts/apex/line/line.component';
import { AreaComponent } from './charts/apex/area/area.component';
import { ColumnComponent } from './charts/apex/column/column.component';
import { BarComponent } from './charts/apex/bar/bar.component';
import { MixedComponent } from './charts/apex/mixed/mixed.component';
import { TimelineComponent } from './charts/apex/timeline/timeline.component';
import { CandlestickComponent } from './charts/apex/candlestick/candlestick.component';
import { PieComponent } from './charts/apex/pie/pie.component';
import { RadarComponent } from './charts/apex/radar/radar.component';
import { RadialbarComponent } from './charts/apex/radialbar/radialbar.component';
import { PolarAreaComponent } from './charts/apex/polar-area/polar-area.component';
import { BubbleComponent } from './charts/apex/bubble/bubble.component';
import { ScatterComponent } from './charts/apex/scatter/scatter.component';
import { HeatmapComponent } from './charts/apex/heatmap/heatmap.component';
import { TreemapComponent } from './charts/apex/treemap/treemap.component';
import { SparklinesComponent } from './charts/apex/sparklines/sparklines.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';



import { AccordionComponent } from './bootstrap/accordion/accordion.component';
import { AlertComponent } from './bootstrap/alert/alert.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import { ModalComponent } from './bootstrap/modal/modal.component';
import { BadgeComponent } from './bootstrap/badge/badge.component';
import { ButtonGroupComponent } from './bootstrap/button-group/button-group.component';
import { ListGroupComponent } from './bootstrap/list-group/list-group.component';
import { CardsComponent } from './bootstrap/cards/cards.component';
import { CarouselComponent } from './bootstrap/carousel/carousel.component';
import { DatepickerComponent } from './bootstrap/datepicker/datepicker.component';
import { DropdownComponent } from './bootstrap/dropdown/dropdown.component';
import { MediaObjectComponent } from './bootstrap/media-object/media-object.component';
import { NavComponent } from './bootstrap/nav/nav.component';
import { PaginationComponent } from './bootstrap/pagination/pagination.component';
import { PopoverComponent } from './bootstrap/popover/popover.component';
import { ProgressbarComponent } from './bootstrap/progressbar/progressbar.component';
import { RatingComponent } from './bootstrap/rating/rating.component';
import { TableComponent } from './bootstrap/table/table.component';
import { TimepickerComponent } from './bootstrap/timepicker/timepicker.component';
import { ToastComponent } from './bootstrap/toast/toast.component';
import { TooltipComponent } from './bootstrap/tooltip/tooltip.component';
import { TypeaheadComponent } from './bootstrap/typeahead/typeahead.component';
import { TypographyComponent } from './bootstrap/typography/typography.component';
import { GridComponent } from './bootstrap/grid/grid.component';



import { DzmtAutocompleteComponent } from './material/dzmt-autocomplete/dzmt-autocomplete.component';
import { DzmtBadgeComponent } from './material/dzmt-badge/dzmt-badge.component';
import { DzmtBottomSheetComponent } from './material/dzmt-bottom-sheet/dzmt-bottom-sheet.component';
import { DzmtButtonComponent } from './material/dzmt-button/dzmt-button.component';
import { DzmtButtonToggleComponent } from './material/dzmt-button-toggle/dzmt-button-toggle.component';
import { DzmtCardComponent } from './material/dzmt-card/dzmt-card.component';
import { DzmtCheckboxComponent } from './material/dzmt-checkbox/dzmt-checkbox.component';
import { DzmtChipsComponent } from './material/dzmt-chips/dzmt-chips.component';
import { DzmtDatepickerComponent } from './material/dzmt-datepicker/dzmt-datepicker.component';
import { DzmtDialogComponent } from './material/dzmt-dialog/dzmt-dialog.component';
import { DzmtDividerComponent } from './material/dzmt-divider/dzmt-divider.component';
import { DzmtExpansionComponent } from './material/dzmt-expansion/dzmt-expansion.component';
import { DzmtFormFieldComponent } from './material/dzmt-form-field/dzmt-form-field.component';
import { DzmtGridListComponent } from './material/dzmt-grid-list/dzmt-grid-list.component';
import { DzmtIconComponent } from './material/dzmt-icon/dzmt-icon.component';
import { DzmtInputComponent } from './material/dzmt-input/dzmt-input.component';
import { DzmtListComponent } from './material/dzmt-list/dzmt-list.component';
import { DzmtMenuComponent } from './material/dzmt-menu/dzmt-menu.component';
import { DzmtPaginatorComponent } from './material/dzmt-paginator/dzmt-paginator.component';
import { DzmtProgressBarComponent } from './material/dzmt-progress-bar/dzmt-progress-bar.component';
import { DzmtProgressSpinnerComponent } from './material/dzmt-progress-spinner/dzmt-progress-spinner.component';
import { DzmtRadioComponent } from './material/dzmt-radio/dzmt-radio.component';
import { DzmtRippleComponent } from './material/dzmt-ripple/dzmt-ripple.component';
import { DzmtSelectComponent } from './material/dzmt-select/dzmt-select.component';
import { DzmtSidenavComponent } from './material/dzmt-sidenav/dzmt-sidenav.component';
import { DzmtSlideToggleComponent } from './material/dzmt-slide-toggle/dzmt-slide-toggle.component';
import { DzmtSliderComponent } from './material/dzmt-slider/dzmt-slider.component';
import { DzmtSnackBarComponent } from './material/dzmt-snack-bar/dzmt-snack-bar.component';
import { DzmtSortComponent } from './material/dzmt-sort/dzmt-sort.component';
import { DzmtStepperComponent } from './material/dzmt-stepper/dzmt-stepper.component';
import { DzmtTableComponent } from './material/dzmt-table/dzmt-table.component';
import { DzmtTabsComponent } from './material/dzmt-tabs/dzmt-tabs.component';
import { DzmtTooltipComponent } from './material/dzmt-tooltip/dzmt-tooltip.component';
import { DzmtTreeComponent } from './material/dzmt-tree/dzmt-tree.component';
import { DzmtToolbarComponent } from './material/dzmt-toolbar/dzmt-toolbar.component';


import { NestableComponent } from './plugins/nestable/nestable.component';
import { LightGalleryComponent } from './plugins/light-gallery/light-gallery.component';

import { WidgetComponent } from './widget/widget.component';


import { ElementsComponent } from './forms/elements/elements.component';
import { FormValidateComponent } from './forms/form-validate/form-validate.component';


import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { Login2Component } from './pages/login2/login2.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error400Component } from './pages/error400/error400.component';
import { Error403Component } from './pages/error403/error403.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { Error503Component } from './pages/error503/error503.component';
import {ParametreComponent} from "./parametre/parametre.component";
import {UsersComponent} from "./users/users.component";
import {AuthGuard} from "./shared/guard/auth-guard.service";
import {LoginGuardService} from "./shared/guard/login-guard.service";


const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
  {
                    path: 'admin', component: AdminComponent, children: [
                        {path: '', component: LightComponent},
                        {path: 'index', component: LightComponent},
                        {path: 'index-1', component: LightComponent},
                        {path: 'dashboard', component: LightComponent},
                        {path: 'index-2', component: DarkComponent},
                        {path: 'dashboard-2', component: DarkComponent},
                        {path: 'orders-list', component: OrdersListComponent},
                        {path: 'order-detail', component: OrderDetailComponent},
                        {path: 'customer-list', component: CustomersComponent},
                        {path: 'analytics', component: AnalyticsComponent},
                        {path: 'reviews', component: ReviewsComponent},

                        {path: 'app-profile', component: ProfileComponent},
                        {path: 'post-details', component: PostDetailsComponent},
                        {path: 'email-compose', component: ComposeComponent},
                        {path: 'email-inbox', component: InboxComponent},
                        {path: 'email-read', component: ReadComponent},
                        {path: 'app-calender', component: CalenderComponent},

                        {path: 'ecom-product-grid', component: ProductGridComponent},
                        {path: 'ecom-product-list', component: ProductListComponent},
                        {path: 'ecom-product-detail', component: ProductDetailComponent},
                        {path: 'ecom-product-order', component: OrderComponent},
                        {path: 'ecom-checkout', component: CheckoutComponent},
                        {path: 'ecom-invoice', component: InvoiceComponent},
                        {path: 'ecom-customers', component: EcomCustomersComponent},

                        {path: 'chart-apex', component: ApexComponent},
                        {path: 'apex-line', component: LineComponent},
                        {path: 'apex-area', component: AreaComponent},
                        {path: 'apex-column', component: ColumnComponent},
                        {path: 'apex-bar', component: BarComponent},
                        {path: 'apex-mixed', component: MixedComponent},
                        {path: 'apex-timeline', component: TimelineComponent},
                        {path: 'apex-candlestick', component: CandlestickComponent},
                        {path: 'apex-pie', component: PieComponent},
                        {path: 'apex-radar', component: RadarComponent},
                        {path: 'apex-radialbar', component: RadialbarComponent},
                        {path: 'apex-polar-area', component: PolarAreaComponent},
                        {path: 'apex-bubble', component: BubbleComponent},
                        {path: 'apex-scatter', component: ScatterComponent},
                        {path: 'apex-heatmap', component: HeatmapComponent},
                        {path: 'apex-treemap', component: TreemapComponent},
                        {path: 'apex-sparklines', component: SparklinesComponent},
                        {path: 'chart-chartjs', component: ChartjsComponent},


                        {path: 'ui-accordion', component: AccordionComponent},
                        {path: 'ui-alert', component: AlertComponent},
                        {path: 'ui-button', component: ButtonComponent},
                        {path: 'ui-modal', component: ModalComponent},
                        {path: 'ui-badge', component: BadgeComponent},
                        {path: 'ui-button-group', component: ButtonGroupComponent},
                        {path: 'ui-list-group', component: ListGroupComponent},
                        {path: 'ui-card', component: CardsComponent},
                        {path: 'ui-carousel', component: CarouselComponent},
                        {path: 'ui-datepicker', component: DatepickerComponent},
                        {path: 'ui-dropdown', component: DropdownComponent},
                        {path: 'ui-media-object', component: MediaObjectComponent},
                        {path: 'ui-nav', component: NavComponent},
                        {path: 'ui-pagination', component: PaginationComponent},
                        {path: 'ui-popover', component: PopoverComponent},
                        {path: 'ui-progressbar', component: ProgressbarComponent},
                        {path: 'ui-rating', component: RatingComponent},
                        {path: 'ui-table', component: TableComponent},
                        {path: 'ui-timepicker', component: TimepickerComponent},
                        {path: 'ui-toast', component: ToastComponent},
                        {path: 'ui-tooltip', component: TooltipComponent},
                        {path: 'ui-typeahead', component: TypeaheadComponent},
                        {path: 'ui-typography', component: TypographyComponent},
                        {path: 'ui-grid', component: GridComponent},




                        {path: 'mat-autocomplete', component: DzmtAutocompleteComponent},
                        {path: 'mat-badge', component: DzmtBadgeComponent},
                        {path: 'mat-bottom-sheet', component: DzmtBottomSheetComponent},
                        {path: 'mat-button', component: DzmtButtonComponent},
                        {path: 'mat-button-toggle', component: DzmtButtonToggleComponent},
                        {path: 'mat-card', component: DzmtCardComponent},
                        {path: 'mat-checkbox', component: DzmtCheckboxComponent},
                        {path: 'mat-chips', component: DzmtChipsComponent},
                        {path: 'mat-datepicker', component: DzmtDatepickerComponent},
                        {path: 'mat-dialog', component: DzmtDialogComponent},
                        {path: 'mat-divider', component: DzmtDividerComponent},
                        {path: 'mat-expansion', component: DzmtExpansionComponent},
                        {path: 'mat-form-field', component: DzmtFormFieldComponent},
                        {path: 'mat-grid-list', component: DzmtGridListComponent},
                        {path: 'mat-icon', component: DzmtIconComponent},
                        {path: 'mat-input', component: DzmtInputComponent},
                        {path: 'mat-list', component: DzmtListComponent},
                        {path: 'mat-menu', component: DzmtMenuComponent},
                        {path: 'mat-paginator', component: DzmtPaginatorComponent},
                        {path: 'mat-progress-bar', component: DzmtProgressBarComponent},
                        {path: 'mat-progress-spinner', component: DzmtProgressSpinnerComponent},
                        {path: 'mat-radio', component: DzmtRadioComponent},
                        {path: 'mat-ripple', component: DzmtRippleComponent},
                        {path: 'mat-select', component: DzmtSelectComponent},
                        {path: 'mat-sidenav', component: DzmtSidenavComponent},
                        {path: 'mat-slide-toggle', component: DzmtSlideToggleComponent},
                        {path: 'mat-slider', component: DzmtSliderComponent},
                        {path: 'mat-snack-bar', component: DzmtSnackBarComponent},
                        {path: 'mat-sort', component: DzmtSortComponent},
                        {path: 'mat-stepper', component: DzmtStepperComponent},
                        {path: 'mat-table', component: DzmtTableComponent},
                        {path: 'mat-tab', component: DzmtTabsComponent},
                        {path: 'mat-tooltip', component: DzmtTooltipComponent},
                        {path: 'mat-tree', component: DzmtTreeComponent},
                        {path: 'mat-toolbar', component: DzmtToolbarComponent},

                        {path: 'uc-nestable', component: NestableComponent},
                        {path: 'uc-lightgallery', component: LightGalleryComponent},

                        {path: 'widget-basic', component: WidgetComponent},

                        {path: 'form-element', component: ElementsComponent},
                        {path: 'form-validate', component: FormValidateComponent},

                        {path: 'parametre', component: ParametreComponent},

                        {path: 'users', component: UsersComponent},



                    ]
                },


                        {path: 'page-register', component: RegisterComponent},
                        {path: 'page-login', component: LoginComponent},
                        {path: 'login', component: Login2Component},
                        {path: 'page-lock-screen', component: LockScreenComponent},
                        {path: 'page-forgot-password', component: ForgotPasswordComponent},
                        {path: 'page-error-400', component: Error400Component},
                        {path: 'page-error-403', component: Error403Component},
                        {path: 'page-error-404', component: Error404Component},
                        {path: 'page-error-500', component: Error500Component},
                        {path: 'page-error-503', component: Error503Component},


                        {path: '**', component: Error404Component},



              ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
