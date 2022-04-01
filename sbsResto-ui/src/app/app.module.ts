import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Injectable} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {SharedService} from './shared.service';
import {NgbdSortableHeader} from './sortable.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {NgApexchartsModule} from 'ng-apexcharts';
import {NestableModule} from 'ngx-nestable';
import {NgxSpinnerModule} from "ngx-spinner";
import {LightboxModule} from 'ngx-lightbox';

import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

import {MetismenuAngularModule} from "@metismenu/angular";
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {NgxDropzoneModule} from 'ngx-dropzone';
import {CarouselModule} from 'ngx-owl-carousel-o';

import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';


/* #########################  SITE PAGES COMPONENT ###################*/

import {AdminComponent} from './admin/admin.component';

import {LoadingComponent} from './elements/loading/loading.component';
import {NavHeaderComponent} from './elements/nav-header/nav-header.component';
import {HeaderComponent} from './elements/header/header.component';
import {NavigationComponent} from './elements/navigation/navigation.component';
import {FooterComponent} from './elements/footer/footer.component';

import {LightComponent} from './dashboard/light/light.component';
import {DarkComponent} from './dashboard/dark/dark.component';
import {GraphDailyTargetIncomeComponent} from './elements/dashboard/graph-daily-target-income/graph-daily-target-income.component';
import {GraphOrdersComponent} from './elements/dashboard/graph-orders/graph-orders.component';
import {GraphCustomersComponent} from './elements/dashboard/graph-customers/graph-customers.component';
import {GraphMenuComponent} from './elements/dashboard/graph-menu/graph-menu.component';
import {GraphCustomerMapComponent} from './elements/dashboard/graph-customer-map/graph-customer-map.component';
import {DailyTrendingMenusComponent} from './elements/dashboard/daily-trending-menus/daily-trending-menus.component';
import {RecentOrderRequestComponent} from './elements/dashboard/recent-order-request/recent-order-request.component';
import {DailyComponent} from './elements/dashboard/graph-customer-map/daily/daily.component';
import {MonthlyComponent} from './elements/dashboard/graph-customer-map/monthly/monthly.component';
import {WeeklyComponent} from './elements/dashboard/graph-customer-map/weekly/weekly.component';

import {OrdersListComponent} from './orders-list/orders-list.component';

import {OrderDetailComponent} from './order-detail/order-detail.component';
import {GraphFoodComponent} from './elements/order-detail/graph-food/graph-food.component';
import {GraphDrinkComponent} from './elements/order-detail/graph-drink/graph-drink.component';

import {CustomersComponent} from './customers/customers.component';

import {AnalyticsComponent} from './analytics/analytics.component';
import {LoyalCustomersComponent} from './elements/analytics/loyal-customers/loyal-customers.component';
import {BestSelerMenusComponent} from './elements/analytics/best-seler-menus/best-seler-menus.component';
import {GraphRevenueComponent} from './elements/analytics/graph-revenue/graph-revenue.component';
import {GraphCustomerMap1Component} from './elements/analytics/graph-customer-map1/graph-customer-map1.component';
import {GraphSalesSummaryComponent} from './elements/analytics/graph-sales-summary/graph-sales-summary.component';
import {MostFavoritesItemsComponent} from './elements/analytics/most-favorites-items/most-favorites-items.component';
import {FoodItemsComponent} from './elements/analytics/most-favorites-items/food-items/food-items.component';

import {ReviewsComponent} from './reviews/reviews.component';

import {ProfileComponent} from './apps/profile/profile.component';
import {UserStatisticsComponent} from './elements/profile/user-statistics/user-statistics.component';
import {InterestComponent} from './elements/profile/interest/interest.component';
import {LatestNewsComponent} from './elements/profile/latest-news/latest-news.component';
import {HighlightsComponent} from './elements/profile/highlights/highlights.component';

import {PostDetailsComponent} from './apps/post-details/post-details.component';

import {ComposeComponent} from './apps/email/compose/compose.component';
import {InboxComponent} from './apps/email/inbox/inbox.component';
import {ReadComponent} from './apps/email/read/read.component';

import {CalenderComponent} from './apps/calender/calender.component';

import {ProductGridComponent} from './apps/shop/product-grid/product-grid.component';
import {ProductListComponent} from './apps/shop/product-list/product-list.component';
import {ProductDetailComponent} from './apps/shop/product-detail/product-detail.component';
import {OrderComponent} from './apps/shop/order/order.component';
import {CheckoutComponent} from './apps/shop/checkout/checkout.component';
import {InvoiceComponent} from './apps/shop/invoice/invoice.component';
import {EcomCustomersComponent} from './apps/shop/ecom-customers/ecom-customers.component';


import {ApexComponent} from './charts/apex/apex.component';
import {LineComponent} from './charts/apex/line/line.component';
import {BasicLineChartComponent} from './charts/apex/line/basic-line-chart/basic-line-chart.component';
import {LineChartWithDatalabelsComponent} from './charts/apex/line/line-chart-with-datalabels/line-chart-with-datalabels.component';
import {ZoomableTimeseriesComponent} from './charts/apex/line/zoomable-timeseries/zoomable-timeseries.component';
import {LineWithAnnotationsComponent} from './charts/apex/line/line-with-annotations/line-with-annotations.component';
import {SyncingChartsComponent} from './charts/apex/line/syncing-charts/syncing-charts.component';
import {BrushChartComponent} from './charts/apex/line/brush-chart/brush-chart.component';
import {SteplineChartComponent} from './charts/apex/line/stepline-chart/stepline-chart.component';
import {GradientLineChartComponent} from './charts/apex/line/gradient-line-chart/gradient-line-chart.component';
import {MissingOrNullValuesComponent} from './charts/apex/line/missing-or-null-values/missing-or-null-values.component';
import {DashedLineChartComponent} from './charts/apex/line/dashed-line-chart/dashed-line-chart.component';
import {AreaComponent} from './charts/apex/area/area.component';
import {AreaBasicComponent} from './charts/apex/area/area-basic/area-basic.component';
import {AreaNegativeComponent} from './charts/apex/area/area-negative/area-negative.component';
import {AreaGithubStyleComponent} from './charts/apex/area/area-github-style/area-github-style.component';
import {AreaSplineComponent} from './charts/apex/area/area-spline/area-spline.component';
import {AreaStackedComponent} from './charts/apex/area/area-stacked/area-stacked.component';
import {AreaIrregularTimeseriesComponent} from './charts/apex/area/area-irregular-timeseries/area-irregular-timeseries.component';
import {AreaMissingOrNullValuesComponent} from './charts/apex/area/area-missing-or-null-values/area-missing-or-null-values.component';
import {ColumnComponent} from './charts/apex/column/column.component';
import {ColumnBasicComponent} from './charts/apex/column/column-basic/column-basic.component';
import {ColumnDataLabelsComponent} from './charts/apex/column/column-data-labels/column-data-labels.component';
import {ColumnStackedComponent} from './charts/apex/column/column-stacked/column-stacked.component';
import {ColumnStacked100Component} from './charts/apex/column/column-stacked100/column-stacked100.component';
import {ColumnRotatedLabelsComponent} from './charts/apex/column/column-rotated-labels/column-rotated-labels.component';
import {ColumnNegativeValuesComponent} from './charts/apex/column/column-negative-values/column-negative-values.component';
import {ColumnLoadedChartComponent} from './charts/apex/column/column-loaded-chart/column-loaded-chart.component';
import {ColumnDistributedComponent} from './charts/apex/column/column-distributed/column-distributed.component';
import {ColumnRangeComponent} from './charts/apex/column/column-range/column-range.component';
import {BarComponent} from './charts/apex/bar/bar.component';
import {BarBasicComponent} from './charts/apex/bar/bar-basic/bar-basic.component';
import {BarGroupedComponent} from './charts/apex/bar/bar-grouped/bar-grouped.component';
import {BarStackedComponent} from './charts/apex/bar/bar-stacked/bar-stacked.component';
import {BarStacked100Component} from './charts/apex/bar/bar-stacked100/bar-stacked100.component';
import {BarNegativeValuesComponent} from './charts/apex/bar/bar-negative-values/bar-negative-values.component';
import {BarReversedComponent} from './charts/apex/bar/bar-reversed/bar-reversed.component';
import {BarCustomDataLabelsComponent} from './charts/apex/bar/bar-custom-data-labels/bar-custom-data-labels.component';
import {BarPatternedComponent} from './charts/apex/bar/bar-patterned/bar-patterned.component';
import {BarImagesComponent} from './charts/apex/bar/bar-images/bar-images.component';
import {MixedComponent} from './charts/apex/mixed/mixed.component';
import {MixedLineColumnComponent} from './charts/apex/mixed/mixed-line-column/mixed-line-column.component';
import {MixedMultipleYAxisComponent} from './charts/apex/mixed/mixed-multiple-y-axis/mixed-multiple-y-axis.component';
import {MixedLineAreaComponent} from './charts/apex/mixed/mixed-line-area/mixed-line-area.component';
import {MixedLineColumnAreaComponent} from './charts/apex/mixed/mixed-line-column-area/mixed-line-column-area.component';
import {TimelineComponent} from './charts/apex/timeline/timeline.component';
import {TimelineBasicComponent} from './charts/apex/timeline/timeline-basic/timeline-basic.component';
import {TimelineDistributedComponent} from './charts/apex/timeline/timeline-distributed/timeline-distributed.component';
import {TimelineMultiSeriesComponent} from './charts/apex/timeline/timeline-multi-series/timeline-multi-series.component';
import {TimelineAdvancedComponent} from './charts/apex/timeline/timeline-advanced/timeline-advanced.component';
import {TimelineMultipleSeriesComponent} from './charts/apex/timeline/timeline-multiple-series/timeline-multiple-series.component';
import {CandlestickComponent} from './charts/apex/candlestick/candlestick.component';
import {CandlestickBasicComponent} from './charts/apex/candlestick/candlestick-basic/candlestick-basic.component';
import {CandlestickComboComponent} from './charts/apex/candlestick/candlestick-combo/candlestick-combo.component';
import {CandlestickCategoryComponent} from './charts/apex/candlestick/candlestick-category/candlestick-category.component';
import {CandlestickLineComponent} from './charts/apex/candlestick/candlestick-line/candlestick-line.component';
import {PieComponent} from './charts/apex/pie/pie.component';
import {PieSimpleComponent} from './charts/apex/pie/pie-simple/pie-simple.component';
import {PieDonutComponent} from './charts/apex/pie/pie-donut/pie-donut.component';
import {PieMonochromeComponent} from './charts/apex/pie/pie-monochrome/pie-monochrome.component';
import {PieGradientDonutComponent} from './charts/apex/pie/pie-gradient-donut/pie-gradient-donut.component';
import {SemiDonutComponent} from './charts/apex/pie/semi-donut/semi-donut.component';
import {DonutWithPatternComponent} from './charts/apex/pie/donut-with-pattern/donut-with-pattern.component';
import {RadarComponent} from './charts/apex/radar/radar.component';
import {RadarBasicComponent} from './charts/apex/radar/radar-basic/radar-basic.component';
import {RadarMultipleSeriesComponent} from './charts/apex/radar/radar-multiple-series/radar-multiple-series.component';
import {RadialbarComponent} from './charts/apex/radialbar/radialbar.component';
import {RadialbarBasicComponent} from './charts/apex/radialbar/radialbar-basic/radialbar-basic.component';
import {RadialbarMultipleComponent} from './charts/apex/radialbar/radialbar-multiple/radialbar-multiple.component';
import {RadialbarCustomAngleCircleComponent} from './charts/apex/radialbar/radialbar-custom-angle-circle/radialbar-custom-angle-circle.component';
import {RadialbarGradientComponent} from './charts/apex/radialbar/radialbar-gradient/radialbar-gradient.component';
import {RadialbarStrokedAngularGaugeComponent} from './charts/apex/radialbar/radialbar-stroked-angular-gauge/radialbar-stroked-angular-gauge.component';
import {RadialbarSemiCircleGaugeComponent} from './charts/apex/radialbar/radialbar-semi-circle-gauge/radialbar-semi-circle-gauge.component';
import {PolarAreaComponent} from './charts/apex/polar-area/polar-area.component';
import {PolarAreaBasicComponent} from './charts/apex/polar-area/polar-area-basic/polar-area-basic.component';
import {PolarAreaMonochromeComponent} from './charts/apex/polar-area/polar-area-monochrome/polar-area-monochrome.component';
import {BubbleComponent} from './charts/apex/bubble/bubble.component';
import {BubbleSimpleComponent} from './charts/apex/bubble/bubble-simple/bubble-simple.component';
import {Bubble3DComponent} from './charts/apex/bubble/bubble3-d/bubble3-d.component';
import {ScatterComponent} from './charts/apex/scatter/scatter.component';
import {ScatterBasicComponent} from './charts/apex/scatter/scatter-basic/scatter-basic.component';
import {ScatterDatetimeComponent} from './charts/apex/scatter/scatter-datetime/scatter-datetime.component';
import {ScatterImagesComponent} from './charts/apex/scatter/scatter-images/scatter-images.component';
import {HeatmapComponent} from './charts/apex/heatmap/heatmap.component';
import {HeatmapBasicComponent} from './charts/apex/heatmap/heatmap-basic/heatmap-basic.component';
import {HeatmapMultipleColorsComponent} from './charts/apex/heatmap/heatmap-multiple-colors/heatmap-multiple-colors.component';
import {HeatmapMultipleFlippedComponent} from './charts/apex/heatmap/heatmap-multiple-flipped/heatmap-multiple-flipped.component';
import {HeatmapColorRangeComponent} from './charts/apex/heatmap/heatmap-color-range/heatmap-color-range.component';
import {HeatmapRoundedComponent} from './charts/apex/heatmap/heatmap-rounded/heatmap-rounded.component';
import {TreemapComponent} from './charts/apex/treemap/treemap.component';
import {TreemapBasicComponent} from './charts/apex/treemap/treemap-basic/treemap-basic.component';
import {TreemapMultipleSeriesComponent} from './charts/apex/treemap/treemap-multiple-series/treemap-multiple-series.component';
import {TreemapColorRangeComponent} from './charts/apex/treemap/treemap-color-range/treemap-color-range.component';
import {TreemapDistributedComponent} from './charts/apex/treemap/treemap-distributed/treemap-distributed.component';
import {SparklinesComponent} from './charts/apex/sparklines/sparklines.component';
import {SparklinesBasicComponent} from './charts/apex/sparklines/sparklines-basic/sparklines-basic.component';
import {ChartjsComponent} from './charts/chartjs/chartjs.component';
import {ChartjsLineComponent} from './charts/chartjs/chartjs-line/chartjs-line.component';
import {ChartjsBarComponent} from './charts/chartjs/chartjs-bar/chartjs-bar.component';
import {ChartjsDoughnutComponent} from './charts/chartjs/chartjs-doughnut/chartjs-doughnut.component';
import {ChartjsRadarComponent} from './charts/chartjs/chartjs-radar/chartjs-radar.component';
import {ChartjsPieComponent} from './charts/chartjs/chartjs-pie/chartjs-pie.component';
import {ChartjsBubbleComponent} from './charts/chartjs/chartjs-bubble/chartjs-bubble.component';


import {AccordionComponent} from './bootstrap/accordion/accordion.component';
import {AccordionBasicComponent} from './bootstrap/accordion/accordion-basic/accordion-basic.component';
import {AccordionStaticComponent} from './bootstrap/accordion/accordion-static/accordion-static.component';
import {AccordionToggleComponent} from './bootstrap/accordion/accordion-toggle/accordion-toggle.component';
import {AccordionHeaderComponent} from './bootstrap/accordion/accordion-header/accordion-header.component';
import {AccordionPreventchangeComponent} from './bootstrap/accordion/accordion-preventchange/accordion-preventchange.component';
import {AccordionConfigComponent} from './bootstrap/accordion/accordion-config/accordion-config.component';

import {AlertComponent} from './bootstrap/alert/alert.component';
import {AlertCloseableComponent} from './bootstrap/alert/alert-closeable/alert-closeable.component';
import {AlertBasicComponent} from './bootstrap/alert/alert-basic/alert-basic.component';
import {AlertSlefclosingComponent} from './bootstrap/alert/alert-slefclosing/alert-slefclosing.component';
import {AlertCustomComponent} from './bootstrap/alert/alert-custom/alert-custom.component';
import {AlertConfigComponent} from './bootstrap/alert/alert-config/alert-config.component';

import {ButtonComponent} from './bootstrap/button/button.component';

import {ModalComponent} from './bootstrap/modal/modal.component';
import {BasicModalComponent} from './bootstrap/modal/basic-modal/basic-modal.component';
import {ModalComponentComponent} from './bootstrap/modal/modal-component/modal-component.component';
import {ModalOptionsComponent} from './bootstrap/modal/modal-options/modal-options.component';
import {ModalFocusComponent} from './bootstrap/modal/modal-focus/modal-focus.component';
import {ModalStackedComponent} from './bootstrap/modal/modal-stacked/modal-stacked.component';
import {ModalConfigComponent} from './bootstrap/modal/modal-config/modal-config.component';

import {BadgeComponent} from './bootstrap/badge/badge.component';

import {ButtonGroupComponent} from './bootstrap/button-group/button-group.component';

import {ListGroupComponent} from './bootstrap/list-group/list-group.component';

import {CarouselComponent} from './bootstrap/carousel/carousel.component';
import {CarouselBasicComponent} from './bootstrap/carousel/carousel-basic/carousel-basic.component';
import {CarouselNavigationComponent} from './bootstrap/carousel/carousel-navigation/carousel-navigation.component';
import {CarouselPauseComponent} from './bootstrap/carousel/carousel-pause/carousel-pause.component';
import {CarouselConfigComponent} from './bootstrap/carousel/carousel-config/carousel-config.component';

import {DatepickerComponent} from './bootstrap/datepicker/datepicker.component';
import {DatepickerBasicComponent} from './bootstrap/datepicker/datepicker-basic/datepicker-basic.component';
import {DatepickerPopupComponent} from './bootstrap/datepicker/datepicker-popup/datepicker-popup.component';
import {DatepickerMultipleComponent} from './bootstrap/datepicker/datepicker-multiple/datepicker-multiple.component';
import {DatepickerRangeComponent} from './bootstrap/datepicker/datepicker-range/datepicker-range.component';
import {DatepickerRangePopupComponent} from './bootstrap/datepicker/datepicker-range-popup/datepicker-range-popup.component';
import {DatepickerDisabledComponent} from './bootstrap/datepicker/datepicker-disabled/datepicker-disabled.component';
import {DatepickerAdapterComponent} from './bootstrap/datepicker/datepicker-adapter/datepicker-adapter.component';
import {DatepickerI18nComponent} from './bootstrap/datepicker/datepicker-i18n/datepicker-i18n.component';
import {DatepickerCustomdayComponent} from './bootstrap/datepicker/datepicker-customday/datepicker-customday.component';
import {DatepickerCustommonthComponent} from './bootstrap/datepicker/datepicker-custommonth/datepicker-custommonth.component';
import {DatepickerFootertemplateComponent} from './bootstrap/datepicker/datepicker-footertemplate/datepicker-footertemplate.component';
import {DatepickerPositiontargetComponent} from './bootstrap/datepicker/datepicker-positiontarget/datepicker-positiontarget.component';
import {DatepickerKeyboardComponent} from './bootstrap/datepicker/datepicker-keyboard/datepicker-keyboard.component';
import {DatepickerConfigComponent} from './bootstrap/datepicker/datepicker-config/datepicker-config.component';

import {DropdownComponent} from './bootstrap/dropdown/dropdown.component';
import {DropdownBasicComponent} from './bootstrap/dropdown/dropdown-basic/dropdown-basic.component';
import {DropdownManualComponent} from './bootstrap/dropdown/dropdown-manual/dropdown-manual.component';
import {DropdownSplitComponent} from './bootstrap/dropdown/dropdown-split/dropdown-split.component';
import {DropdownFormComponent} from './bootstrap/dropdown/dropdown-form/dropdown-form.component';
import {DropdownContainerComponent} from './bootstrap/dropdown/dropdown-container/dropdown-container.component';
import {DropdownNavbarComponent} from './bootstrap/dropdown/dropdown-navbar/dropdown-navbar.component';
import {DropdownConfigComponent} from './bootstrap/dropdown/dropdown-config/dropdown-config.component';

import {MediaObjectComponent} from './bootstrap/media-object/media-object.component';

import {NavComponent} from './bootstrap/nav/nav.component';
import {NavMarkupComponent} from './bootstrap/nav/nav-markup/nav-markup.component';
import {NavVerticalComponent} from './bootstrap/nav/nav-vertical/nav-vertical.component';
import {NavSelectionComponent} from './bootstrap/nav/nav-selection/nav-selection.component';
import {NavKeepContentComponent} from './bootstrap/nav/nav-keep-content/nav-keep-content.component';
import {NavDynamicComponent} from './bootstrap/nav/nav-dynamic/nav-dynamic.component';
import {NavCustomStyleComponent} from './bootstrap/nav/nav-custom-style/nav-custom-style.component';
import {NavConfigComponent} from './bootstrap/nav/nav-config/nav-config.component';
import {NavBasicComponent} from './bootstrap/nav/nav-basic/nav-basic.component';

import {PaginationComponent} from './bootstrap/pagination/pagination.component';
import {PaginationBasicComponent} from './bootstrap/pagination/pagination-basic/pagination-basic.component';
import {PaginationAdvancedComponent} from './bootstrap/pagination/pagination-advanced/pagination-advanced.component';
import {PaginationCustomizationComponent} from './bootstrap/pagination/pagination-customization/pagination-customization.component';
import {PaginationSizeComponent} from './bootstrap/pagination/pagination-size/pagination-size.component';
import {PaginationJustifyComponent} from './bootstrap/pagination/pagination-justify/pagination-justify.component';
import {PaginationDisabledComponent} from './bootstrap/pagination/pagination-disabled/pagination-disabled.component';
import {PaginationConfigComponent} from './bootstrap/pagination/pagination-config/pagination-config.component';

import {PopoverComponent} from './bootstrap/popover/popover.component';
import {PopoverBasicComponent} from './bootstrap/popover/popover-basic/popover-basic.component';
import {PopoverTplcontentComponent} from './bootstrap/popover/popover-tplcontent/popover-tplcontent.component';
import {PopoverTriggersComponent} from './bootstrap/popover/popover-triggers/popover-triggers.component';
import {PopoverAutocloseComponent} from './bootstrap/popover/popover-autoclose/popover-autoclose.component';
import {PopoverTplwithcontextComponent} from './bootstrap/popover/popover-tplwithcontext/popover-tplwithcontext.component';
import {PopoverDelayComponent} from './bootstrap/popover/popover-delay/popover-delay.component';
import {PopoverVisibilityComponent} from './bootstrap/popover/popover-visibility/popover-visibility.component';
import {PopoverContainerComponent} from './bootstrap/popover/popover-container/popover-container.component';
import {PopoverCustomclassComponent} from './bootstrap/popover/popover-customclass/popover-customclass.component';
import {PopoverConfigComponent} from './bootstrap/popover/popover-config/popover-config.component';

import {ProgressbarComponent} from './bootstrap/progressbar/progressbar.component';
import {ProgressbarBasicComponent} from './bootstrap/progressbar/progressbar-basic/progressbar-basic.component';
import {ProgressbarTexttypesComponent} from './bootstrap/progressbar/progressbar-texttypes/progressbar-texttypes.component';
import {ProgressbarShowvalueComponent} from './bootstrap/progressbar/progressbar-showvalue/progressbar-showvalue.component';
import {ProgressbarStripedComponent} from './bootstrap/progressbar/progressbar-striped/progressbar-striped.component';
import {ProgressbarLabelsComponent} from './bootstrap/progressbar/progressbar-labels/progressbar-labels.component';
import {ProgressbarHeightComponent} from './bootstrap/progressbar/progressbar-height/progressbar-height.component';
import {ProgressbarConfigComponent} from './bootstrap/progressbar/progressbar-config/progressbar-config.component';

import {RatingComponent} from './bootstrap/rating/rating.component';
import {RatingBasicComponent} from './bootstrap/rating/rating-basic/rating-basic.component';
import {RatingEventsComponent} from './bootstrap/rating/rating-events/rating-events.component';
import {RatingTemplateComponent} from './bootstrap/rating/rating-template/rating-template.component';
import {RatingDecimalComponent} from './bootstrap/rating/rating-decimal/rating-decimal.component';
import {RatingFormComponent} from './bootstrap/rating/rating-form/rating-form.component';
import {RatingConfigComponent} from './bootstrap/rating/rating-config/rating-config.component';

import {TableComponent} from './bootstrap/table/table.component';
import {TableBasicComponent} from './bootstrap/table/table-basic/table-basic.component';
import {TableSortableComponent} from './bootstrap/table/table-sortable/table-sortable.component';
import {TableFilteringComponent} from './bootstrap/table/table-filtering/table-filtering.component';
import {TablePaginationComponent} from './bootstrap/table/table-pagination/table-pagination.component';
import {TableCompleteComponent} from './bootstrap/table/table-complete/table-complete.component';

import {TimepickerComponent} from './bootstrap/timepicker/timepicker.component';
import {TimepickerBasicComponent} from './bootstrap/timepicker/timepicker-basic/timepicker-basic.component';
import {TimepickerMeridianComponent} from './bootstrap/timepicker/timepicker-meridian/timepicker-meridian.component';
import {TimepickerSecondsComponent} from './bootstrap/timepicker/timepicker-seconds/timepicker-seconds.component';
import {TimepickerSpinnersComponent} from './bootstrap/timepicker/timepicker-spinners/timepicker-spinners.component';
import {TimepickerStepsComponent} from './bootstrap/timepicker/timepicker-steps/timepicker-steps.component';
import {TimepickerValidationComponent} from './bootstrap/timepicker/timepicker-validation/timepicker-validation.component';
import {TimepickerAdapterComponent} from './bootstrap/timepicker/timepicker-adapter/timepicker-adapter.component';
import {TimepickerI18nComponent} from './bootstrap/timepicker/timepicker-i18n/timepicker-i18n.component';
import {TimepickerConfigComponent} from './bootstrap/timepicker/timepicker-config/timepicker-config.component';

import {ToastComponent} from './bootstrap/toast/toast.component';
import {ToastInlineComponent} from './bootstrap/toast/toast-inline/toast-inline.component';
import {ToastCustomComponent} from './bootstrap/toast/toast-custom/toast-custom.component';
import {ToastCloseableComponent} from './bootstrap/toast/toast-closeable/toast-closeable.component';
import {ToastPreventAutohideComponent} from './bootstrap/toast/toast-prevent-autohide/toast-prevent-autohide.component';
import {ToastGlobalComponent} from './bootstrap/toast/toast-global/toast-global.component';
import {ToastsContainer} from './bootstrap/toast/toast-global/toasts-container.component';

import {TooltipComponent} from './bootstrap/tooltip/tooltip.component';
import {TooltipBasicComponent} from './bootstrap/tooltip/tooltip-basic/tooltip-basic.component';
import {TooltipTplcontentComponent} from './bootstrap/tooltip/tooltip-tplcontent/tooltip-tplcontent.component';
import {TooltipTriggersComponent} from './bootstrap/tooltip/tooltip-triggers/tooltip-triggers.component';
import {TooltipAutocloseComponent} from './bootstrap/tooltip/tooltip-autoclose/tooltip-autoclose.component';
import {TooltipTplwithcontextComponent} from './bootstrap/tooltip/tooltip-tplwithcontext/tooltip-tplwithcontext.component';
import {TooltipDelayComponent} from './bootstrap/tooltip/tooltip-delay/tooltip-delay.component';
import {TooltipContainerComponent} from './bootstrap/tooltip/tooltip-container/tooltip-container.component';
import {TooltipCustomclassComponent} from './bootstrap/tooltip/tooltip-customclass/tooltip-customclass.component';
import {TooltipConfigComponent} from './bootstrap/tooltip/tooltip-config/tooltip-config.component';

import {TypeaheadComponent} from './bootstrap/typeahead/typeahead.component';
import {TypeaheadBasicComponent} from './bootstrap/typeahead/typeahead-basic/typeahead-basic.component';
import {TypeaheadFocusComponent} from './bootstrap/typeahead/typeahead-focus/typeahead-focus.component';
import {TypeaheadFormatComponent} from './bootstrap/typeahead/typeahead-format/typeahead-format.component';
import {TypeaheadHttpComponent} from './bootstrap/typeahead/typeahead-http/typeahead-http.component';
import {TypeaheadTemplateComponent} from './bootstrap/typeahead/typeahead-template/typeahead-template.component';
import {TypeaheadPreventManualEntryComponent} from './bootstrap/typeahead/typeahead-prevent-manual-entry/typeahead-prevent-manual-entry.component';
import {TypeaheadConfigComponent} from './bootstrap/typeahead/typeahead-config/typeahead-config.component';

import {CardsComponent} from './bootstrap/cards/cards.component';
import {TypographyComponent} from './bootstrap/typography/typography.component';
import {GridComponent} from './bootstrap/grid/grid.component';


import {DzmtAutocompleteComponent} from './material/dzmt-autocomplete/dzmt-autocomplete.component';
import {DzmtAutocompleteDisplayComponent} from './material/dzmt-autocomplete/dzmt-autocomplete-display/dzmt-autocomplete-display.component';
import {DzmtAutocompleteFilterComponent} from './material/dzmt-autocomplete/dzmt-autocomplete-filter/dzmt-autocomplete-filter.component';
import {DzmtAutocompleteFirstActiveComponent} from './material/dzmt-autocomplete/dzmt-autocomplete-first-active/dzmt-autocomplete-first-active.component';
import {DzmtAutocompleteOptgroupComponent} from './material/dzmt-autocomplete/dzmt-autocomplete-optgroup/dzmt-autocomplete-optgroup.component';
import {DzmtAutocompleteOverviewComponent} from './material/dzmt-autocomplete/dzmt-autocomplete-overview/dzmt-autocomplete-overview.component';
import {DzmtAutocompletePlaneComponent} from './material/dzmt-autocomplete/dzmt-autocomplete-plane/dzmt-autocomplete-plane.component';
import {DzmtAutocompleteSimpleComponent} from './material/dzmt-autocomplete/dzmt-autocomplete-simple/dzmt-autocomplete-simple.component';

import {DzmtBadgeComponent} from './material/dzmt-badge/dzmt-badge.component';
import {DzmtBottomSheetComponent} from './material/dzmt-bottom-sheet/dzmt-bottom-sheet.component';

import {DzmtButtonComponent} from './material/dzmt-button/dzmt-button.component';
import {DzmtButtonBasicComponent} from './material/dzmt-button/dzmt-button-basic/dzmt-button-basic.component';
import {DzmtButtonVarietiesComponent} from './material/dzmt-button/dzmt-button-varieties/dzmt-button-varieties.component';

import {DzmtButtonToggleComponent} from './material/dzmt-button-toggle/dzmt-button-toggle.component';
import {ButtonToggleAppearanceComponent} from './material/dzmt-button-toggle/button-toggle-appearance/button-toggle-appearance.component';
import {ButtonExclusiveSelectionComponent} from './material/dzmt-button-toggle/button-exclusive-selection/button-exclusive-selection.component';
import {ButtonWithFormsComponent} from './material/dzmt-button-toggle/button-with-forms/button-with-forms.component';
import {ButtonBasicTogglesComponent} from './material/dzmt-button-toggle/button-basic-toggles/button-basic-toggles.component';

import {DzmtCardComponent} from './material/dzmt-card/dzmt-card.component';

import {CardMultipleSectionsComponent} from './material/dzmt-card/card-multiple-sections/card-multiple-sections.component';
import {CardBasicComponent} from './material/dzmt-card/card-basic/card-basic.component';

import {DzmtCheckboxComponent} from './material/dzmt-checkbox/dzmt-checkbox.component';
import {ConfigurableCheckboxComponent} from './material/dzmt-checkbox/configurable-checkbox/configurable-checkbox.component';
import {BasicCheckboxComponent} from './material/dzmt-checkbox/basic-checkbox/basic-checkbox.component';

import {DzmtChipsComponent} from './material/dzmt-chips/dzmt-chips.component';
import {ChipsAutocompleteComponent} from './material/dzmt-chips/chips-autocomplete/chips-autocomplete.component';
import {ChipsDragDropComponent} from './material/dzmt-chips/chips-drag-drop/chips-drag-drop.component';
import {ChipsWithInputComponent} from './material/dzmt-chips/chips-with-input/chips-with-input.component';
import {ChipsBasicComponent} from './material/dzmt-chips/chips-basic/chips-basic.component';
import {ChipsStackedComponent} from './material/dzmt-chips/chips-stacked/chips-stacked.component';

import {DzmtDatepickerComponent} from './material/dzmt-datepicker/dzmt-datepicker.component';
import {ComparisonRangesComponent} from './material/dzmt-datepicker/comparison-ranges/comparison-ranges.component';
import {FormsIntegrationComponent} from './material/dzmt-datepicker/forms-integration/forms-integration.component';
import {BasicDateRangeComponent} from './material/dzmt-datepicker/basic-date-range/basic-date-range.component';
import {RangeCustomSelectionStrategyComponent} from './material/dzmt-datepicker/range-custom-selection-strategy/range-custom-selection-strategy.component';
import {DatepickerActionButtonsComponent} from './material/dzmt-datepicker/datepicker-action-buttons/datepicker-action-buttons.component';
import {DatepickerOpenMethodComponent} from './material/dzmt-datepicker/datepicker-open-method/datepicker-open-method.component';
import {DatepickerPaletteColorsComponent} from './material/dzmt-datepicker/datepicker-palette-colors/datepicker-palette-colors.component';
import {DatepickerCustomCalendarHeaderComponent} from './material/dzmt-datepicker/datepicker-custom-calendar-header/datepicker-custom-calendar-header.component';
import {DatepickerCustomDateClassesComponent} from './material/dzmt-datepicker/datepicker-custom-date-classes/datepicker-custom-date-classes.component';
import {DisabledDatepickerComponent} from './material/dzmt-datepicker/disabled-datepicker/disabled-datepicker.component';
import {InputChangeEventsComponent} from './material/dzmt-datepicker/input-change-events/input-change-events.component';
import {DatepickerFilterValidationComponent} from './material/dzmt-datepicker/datepicker-filter-validation/datepicker-filter-validation.component';
import {DatepickerMinMaxValidationComponent} from './material/dzmt-datepicker/datepicker-min-max-validation/datepicker-min-max-validation.component';
import {BasicDatepickerComponent} from './material/dzmt-datepicker/basic-datepicker/basic-datepicker.component';
import {DatepickerStartDateComponent} from './material/dzmt-datepicker/datepicker-start-date/datepicker-start-date.component';
import {DatepickerTouchUiComponent} from './material/dzmt-datepicker/datepicker-touch-ui/datepicker-touch-ui.component';
import {DatepickerSelectedValueComponent} from './material/dzmt-datepicker/datepicker-selected-value/datepicker-selected-value.component';

import {DzmtDialogComponent} from './material/dzmt-dialog/dzmt-dialog.component';
import {
  HeaderScrollbarActionComponent,
  DialogContentExampleDialog
} from './material/dzmt-dialog/header-scrollbar-action/header-scrollbar-action.component';
import {
  InjectingDataComponent,
  DialogDataExampleDialog
} from './material/dzmt-dialog/injecting-data/injecting-data.component';
import {
  DialogElementsComponent,
  DialogElementsExampleDialog
} from './material/dzmt-dialog/dialog-elements/dialog-elements.component';
import {
  DialogFromMenuComponent,
  DialogFromMenuExampleDialog
} from './material/dzmt-dialog/dialog-from-menu/dialog-from-menu.component';
import {
  DialogOverviewComponent,
  DialogOverviewExampleDialog
} from './material/dzmt-dialog/dialog-overview/dialog-overview.component';

import {DzmtDividerComponent} from './material/dzmt-divider/dzmt-divider.component';

import {DzmtExpansionComponent} from './material/dzmt-expansion/dzmt-expansion.component';
import {ExpandCollapseAllTogglesComponent} from './material/dzmt-expansion/expand-collapse-all-toggles/expand-collapse-all-toggles.component';
import {BasicExpansionPanelComponent} from './material/dzmt-expansion/basic-expansion-panel/basic-expansion-panel.component';
import {ExpansionAsAccordionComponent} from './material/dzmt-expansion/expansion-as-accordion/expansion-as-accordion.component';

import {DzmtFormFieldComponent} from './material/dzmt-form-field/dzmt-form-field.component';
import {AppearanceVariantsComponent} from './material/dzmt-form-field/appearance-variants/appearance-variants.component';
import {FieldWithErrorMessagesComponent} from './material/dzmt-form-field/field-with-error-messages/field-with-error-messages.component';
import {FieldWithHintsComponent} from './material/dzmt-form-field/field-with-hints/field-with-hints.component';
import {FieldWithLabelComponent} from './material/dzmt-form-field/field-with-label/field-with-label.component';
import {SimpleFormFieldComponent} from './material/dzmt-form-field/simple-form-field/simple-form-field.component';
import {FieldWithPrefixSuffixComponent} from './material/dzmt-form-field/field-with-prefix-suffix/field-with-prefix-suffix.component';
import {FieldThemingComponent} from './material/dzmt-form-field/field-theming/field-theming.component';

import {DzmtGridListComponent} from './material/dzmt-grid-list/dzmt-grid-list.component';
import {DynamicGridListComponent} from './material/dzmt-grid-list/dynamic-grid-list/dynamic-grid-list.component';
import {BasicGridListComponent} from './material/dzmt-grid-list/basic-grid-list/basic-grid-list.component';

import {DzmtIconComponent} from './material/dzmt-icon/dzmt-icon.component';
import {SvgIconComponent} from './material/dzmt-icon/svg-icon/svg-icon.component';

import {DzmtInputComponent} from './material/dzmt-input/dzmt-input.component';
import {InputWithClearButtonComponent} from './material/dzmt-input/input-with-clear-button/input-with-clear-button.component';
import {InputErrorStateMatcherComponent} from './material/dzmt-input/input-error-state-matcher/input-error-state-matcher.component';
import {InputWithErrorMessageComponent} from './material/dzmt-input/input-with-error-message/input-with-error-message.component';
import {InputsInFormComponent} from './material/dzmt-input/inputs-in-form/inputs-in-form.component';
import {InputsWithHintsComponent} from './material/dzmt-input/inputs-with-hints/inputs-with-hints.component';
import {InputsBasicComponent} from './material/dzmt-input/inputs-basic/inputs-basic.component';
import {InputsWithPrefixesSuffixesComponent} from './material/dzmt-input/inputs-with-prefixes-suffixes/inputs-with-prefixes-suffixes.component';

import {DzmtListComponent} from './material/dzmt-list/dzmt-list.component';
import {BasicListComponent} from './material/dzmt-list/basic-list/basic-list.component';
import {ListWithSectionsComponent} from './material/dzmt-list/list-with-sections/list-with-sections.component';
import {ListWithSelectionComponent} from './material/dzmt-list/list-with-selection/list-with-selection.component';
import {ListWithSingleSelectionComponent} from './material/dzmt-list/list-with-single-selection/list-with-single-selection.component';

import {DzmtMenuComponent} from './material/dzmt-menu/dzmt-menu.component';
import {MenuWithIconsComponent} from './material/dzmt-menu/menu-with-icons/menu-with-icons.component';
import {NestedMenuComponent} from './material/dzmt-menu/nested-menu/nested-menu.component';
import {BasicMenuComponent} from './material/dzmt-menu/basic-menu/basic-menu.component';
import {MenuPositioningComponent} from './material/dzmt-menu/menu-positioning/menu-positioning.component';

import {DzmtPaginatorComponent} from './material/dzmt-paginator/dzmt-paginator.component';
import {ConfigurablePaginatorComponent} from './material/dzmt-paginator/configurable-paginator/configurable-paginator.component';
import {BasicPaginatorComponent} from './material/dzmt-paginator/basic-paginator/basic-paginator.component';

import {DzmtProgressBarComponent} from './material/dzmt-progress-bar/dzmt-progress-bar.component';
import {BufferProgressBarComponent} from './material/dzmt-progress-bar/buffer-progress-bar/buffer-progress-bar.component';
import {ConfigurableProgressBarComponent} from './material/dzmt-progress-bar/configurable-progress-bar/configurable-progress-bar.component';
import {DeterminateProgressBarComponent} from './material/dzmt-progress-bar/determinate-progress-bar/determinate-progress-bar.component';
import {IndeterminateProgressBarComponent} from './material/dzmt-progress-bar/indeterminate-progress-bar/indeterminate-progress-bar.component';
import {QueryProgressBarComponent} from './material/dzmt-progress-bar/query-progress-bar/query-progress-bar.component';
import {DzmtProgressSpinnerComponent} from './material/dzmt-progress-spinner/dzmt-progress-spinner.component';
import {ConfigurableProgressSpinnerComponent} from './material/dzmt-progress-spinner/configurable-progress-spinner/configurable-progress-spinner.component';
import {BasicProgressSpinnerComponent} from './material/dzmt-progress-spinner/basic-progress-spinner/basic-progress-spinner.component';

import {DzmtRadioComponent} from './material/dzmt-radio/dzmt-radio.component';
import {RadiosWithNgModelComponent} from './material/dzmt-radio/radios-with-ng-model/radios-with-ng-model.component';
import {RadiosBasicComponent} from './material/dzmt-radio/radios-basic/radios-basic.component';

import {DzmtRippleComponent} from './material/dzmt-ripple/dzmt-ripple.component';

import {DzmtSelectComponent} from './material/dzmt-select/dzmt-select.component';
import {CustomTriggerTextComponent} from './material/dzmt-select/custom-trigger-text/custom-trigger-text.component';
import {DisabledSelectComponent} from './material/dzmt-select/disabled-select/disabled-select.component';
import {CustomErrorStateMatcherComponent} from './material/dzmt-select/custom-error-state-matcher/custom-error-state-matcher.component';
import {SelectInFormComponent} from './material/dzmt-select/select-in-form/select-in-form.component';
import {SelectFormFieldFeaturesComponent} from './material/dzmt-select/select-form-field-features/select-form-field-features.component';
import {InitialValueNoFormComponent} from './material/dzmt-select/initial-value-no-form/initial-value-no-form.component';
import {MultipleSelectionComponent} from './material/dzmt-select/multiple-selection/multiple-selection.component';
import {NoOptionRippleComponent} from './material/dzmt-select/no-option-ripple/no-option-ripple.component';
import {OptionGroupsComponent} from './material/dzmt-select/option-groups/option-groups.component';
import {BasicSelectComponent} from './material/dzmt-select/basic-select/basic-select.component';
import {CustomPanelStylingComponent} from './material/dzmt-select/custom-panel-styling/custom-panel-styling.component';
import {SelectInReactiveFormComponent} from './material/dzmt-select/select-in-reactive-form/select-in-reactive-form.component';
import {SelectWithResetOptionComponent} from './material/dzmt-select/select-with-reset-option/select-with-reset-option.component';
import {TwoWayValueBindingComponent} from './material/dzmt-select/two-way-value-binding/two-way-value-binding.component';

import {DzmtSidenavComponent} from './material/dzmt-sidenav/dzmt-sidenav.component';
import {AutosizeSidenavComponent} from './material/dzmt-sidenav/autosize-sidenav/autosize-sidenav.component';
import {DrawerExplicitBackdropSettingComponent} from './material/dzmt-sidenav/drawer-explicit-backdrop-setting/drawer-explicit-backdrop-setting.component';

import {DzmtSlideToggleComponent} from './material/dzmt-slide-toggle/dzmt-slide-toggle.component';
import {ConfigurableSlideToggleComponent} from './material/dzmt-slide-toggle/configurable-slide-toggle/configurable-slide-toggle.component';
import {SlideToggleWithFormsComponent} from './material/dzmt-slide-toggle/slide-toggle-with-forms/slide-toggle-with-forms.component';
import {SlideToggleBasicComponent} from './material/dzmt-slide-toggle/slide-toggle-basic/slide-toggle-basic.component';

import {DzmtSliderComponent} from './material/dzmt-slider/dzmt-slider.component';
import {ConfigurableSliderComponent} from './material/dzmt-slider/configurable-slider/configurable-slider.component';
import {CustomThumbLabelFormattingComponent} from './material/dzmt-slider/custom-thumb-label-formatting/custom-thumb-label-formatting.component';
import {SliderBasicComponent} from './material/dzmt-slider/slider-basic/slider-basic.component';

import {DzmtSnackBarComponent} from './material/dzmt-snack-bar/dzmt-snack-bar.component';
import {SnackBarCustomComponentComponent} from './material/dzmt-snack-bar/snack-bar-custom-component/snack-bar-custom-component.component';
import {BasicSnackBarComponent} from './material/dzmt-snack-bar/basic-snack-bar/basic-snack-bar.component';
import {SnackBarConfigurableComponent} from './material/dzmt-snack-bar/snack-bar-configurable/snack-bar-configurable.component';

import {DzmtSortComponent} from './material/dzmt-sort/dzmt-sort.component';

import {DzmtStepperComponent} from './material/dzmt-stepper/dzmt-stepper.component';
import {EditableStepsComponent} from './material/dzmt-stepper/editable-steps/editable-steps.component';
import {DisplaysErrorsInStepsComponent} from './material/dzmt-stepper/displays-errors-in-steps/displays-errors-in-steps.component';
import {LabelBottomPositionComponent} from './material/dzmt-stepper/label-bottom-position/label-bottom-position.component';
import {OptionalStepsComponent} from './material/dzmt-stepper/optional-steps/optional-steps.component';
import {StepperOverviewComponent} from './material/dzmt-stepper/stepper-overview/stepper-overview.component';
import {StepperCustomizedStatesComponent} from './material/dzmt-stepper/stepper-customized-states/stepper-customized-states.component';
import {StepperVerticalComponent} from './material/dzmt-stepper/stepper-vertical/stepper-vertical.component';

import {DzmtTableComponent} from './material/dzmt-table/dzmt-table.component';
import {BasicTableComponent} from './material/dzmt-table/basic-table/basic-table.component';
import {DynamicallyChangingColumnsDisplayedComponent} from './material/dzmt-table/dynamically-changing-columns-displayed/dynamically-changing-columns-displayed.component';
import {TableExpandableRowsComponent} from './material/dzmt-table/table-expandable-rows/table-expandable-rows.component';
import {TableWithFilteringComponent} from './material/dzmt-table/table-with-filtering/table-with-filtering.component';
import {TableWithDisplayFlexComponent} from './material/dzmt-table/table-with-display-flex/table-with-display-flex.component';
import {FooterRowTableComponent} from './material/dzmt-table/footer-row-table/footer-row-table.component';
import {RetrievingDataThroughHttpComponent} from './material/dzmt-table/retrieving-data-through-http/retrieving-data-through-http.component';
import {MultipleHeaderFooterRowsComponent} from './material/dzmt-table/multiple-header-footer-rows/multiple-header-footer-rows.component';
import {DataTableSortingPaginationFilteringComponent} from './material/dzmt-table/data-table-sorting-pagination-filtering/data-table-sorting-pagination-filtering.component';
import {TableWithPaginationComponent} from './material/dzmt-table/table-with-pagination/table-with-pagination.component';
import {TableWithReOrderableColumnsComponent} from './material/dzmt-table/table-with-re-orderable-columns/table-with-re-orderable-columns.component';
import {TableContextPropertiesComponent} from './material/dzmt-table/table-context-properties/table-context-properties.component';
import {TableWithSelectionComponent} from './material/dzmt-table/table-with-selection/table-with-selection.component';
import {TableWithSortingComponent} from './material/dzmt-table/table-with-sorting/table-with-sorting.component';
import {TableWithStickyColumnsComponent} from './material/dzmt-table/table-with-sticky-columns/table-with-sticky-columns.component';
import {TableWithToggleAbleStickyHeadersFootersColumnsComponent} from './material/dzmt-table/table-with-toggle-able-sticky-headers-footers-columns/table-with-toggle-able-sticky-headers-footers-columns.component';
import {TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent} from './material/dzmt-table/table-flex-with-toggle-able-sticky-headers-footers-columns/table-flex-with-toggle-able-sticky-headers-footers-columns.component';
import {TableStickyFooterComponent} from './material/dzmt-table/table-sticky-footer/table-sticky-footer.component';
import {TableStickyHeaderComponent} from './material/dzmt-table/table-sticky-header/table-sticky-header.component';
import {TableWithConfigurationsInterfaceComponent} from './material/dzmt-table/table-with-configurations-interface/table-with-configurations-interface.component';
import {TableWithSimpleTextHeaderFooterComponent} from './material/dzmt-table/table-with-simple-text-header-footer/table-with-simple-text-header-footer.component';

import {DzmtTabsComponent} from './material/dzmt-tabs/dzmt-tabs.component';
import {AlignedLabelsComponent} from './material/dzmt-tabs/aligned-labels/aligned-labels.component';
import {TabGroupAnimationsComponent} from './material/dzmt-tabs/tab-group-animations/tab-group-animations.component';
import {AsynchronouslyLoadingTabContentsComponent} from './material/dzmt-tabs/asynchronously-loading-tab-contents/asynchronously-loading-tab-contents.component';
import {BasicTabGroupComponent} from './material/dzmt-tabs/basic-tab-group/basic-tab-group.component';
import {TabsWithCustomLabelTemplateComponent} from './material/dzmt-tabs/tabs-with-custom-label-template/tabs-with-custom-label-template.component';
import {TabsWithDynamicallyChangingTabsComponent} from './material/dzmt-tabs/tabs-with-dynamically-changing-tabs/tabs-with-dynamically-changing-tabs.component';
import {TabsWithDynamicHeightComponent} from './material/dzmt-tabs/tabs-with-dynamic-height/tabs-with-dynamic-height.component';
import {TabsWithHeadersOnBottomComponent} from './material/dzmt-tabs/tabs-with-headers-on-bottom/tabs-with-headers-on-bottom.component';
import {TabsWithContentLoadedLazilyComponent} from './material/dzmt-tabs/tabs-with-content-loaded-lazily/tabs-with-content-loaded-lazily.component';
import {TabsWithStretchedLabelsComponent} from './material/dzmt-tabs/tabs-with-stretched-labels/tabs-with-stretched-labels.component';
import {TabsWithThemeOptionsComponent} from './material/dzmt-tabs/tabs-with-theme-options/tabs-with-theme-options.component';
import {BasicUseOfTabNavBarComponent} from './material/dzmt-tabs/basic-use-of-tab-nav-bar/basic-use-of-tab-nav-bar.component';

import {DzmtTooltipComponent} from './material/dzmt-tooltip/dzmt-tooltip.component';
import {TooltipAutoHidingComponent} from './material/dzmt-tooltip/tooltip-auto-hiding/tooltip-auto-hiding.component';
import {TooltipWithCustomClassComponent} from './material/dzmt-tooltip/tooltip-with-custom-class/tooltip-with-custom-class.component';
import {TooltipWithShowHideDelayComponent} from './material/dzmt-tooltip/tooltip-with-show-hide-delay/tooltip-with-show-hide-delay.component';
import {TooltipCanBeDisabledComponent} from './material/dzmt-tooltip/tooltip-can-be-disabled/tooltip-can-be-disabled.component';
import {TooltipManuallyShowHideComponent} from './material/dzmt-tooltip/tooltip-manually-show-hide/tooltip-manually-show-hide.component';
import {TooltipWithChangingMessageComponent} from './material/dzmt-tooltip/tooltip-with-changing-message/tooltip-with-changing-message.component';
import {TooltipWithHideShowDelayComponent} from './material/dzmt-tooltip/tooltip-with-hide-show-delay/tooltip-with-hide-show-delay.component';
import {BasicTooltipComponent} from './material/dzmt-tooltip/basic-tooltip/basic-tooltip.component';
import {TooltipWithCustomPositionComponent} from './material/dzmt-tooltip/tooltip-with-custom-position/tooltip-with-custom-position.component';

import {DzmtTreeComponent} from './material/dzmt-tree/dzmt-tree.component';
import {TreeWithCheckboxesComponent} from './material/dzmt-tree/tree-with-checkboxes/tree-with-checkboxes.component';
import {TreeWithDynamicDataComponent} from './material/dzmt-tree/tree-with-dynamic-data/tree-with-dynamic-data.component';
import {TreeWithFlatNodesComponent} from './material/dzmt-tree/tree-with-flat-nodes/tree-with-flat-nodes.component';
import {TreeWithPartiallyLoadedDataComponent} from './material/dzmt-tree/tree-with-partially-loaded-data/tree-with-partially-loaded-data.component';
import {TreeWithNestedNodesComponent} from './material/dzmt-tree/tree-with-nested-nodes/tree-with-nested-nodes.component';

import {DzmtToolbarComponent} from './material/dzmt-toolbar/dzmt-toolbar.component';
import {BasicToolbarComponent} from './material/dzmt-toolbar/basic-toolbar/basic-toolbar.component';
import {MultiRowToolbarComponent} from './material/dzmt-toolbar/multi-row-toolbar/multi-row-toolbar.component';
import {ToolbarOverviewComponent} from './material/dzmt-toolbar/toolbar-overview/toolbar-overview.component';

import {NestableComponent} from './plugins/nestable/nestable.component';
import {LightGalleryComponent} from './plugins/light-gallery/light-gallery.component';

import {WidgetComponent} from './widget/widget.component';
import {Timeline1Component} from './elements/widget/timeline1/timeline1.component';
import {Timeline2Component} from './elements/widget/timeline2/timeline2.component';
import {Notifications1Component} from './elements/widget/notifications1/notifications1.component';
import {Notifications2Component} from './elements/widget/notifications2/notifications2.component';
import {MessageComponent} from './elements/widget/message/message.component';
import {TodolistComponent} from './elements/widget/todolist/todolist.component';
import {PieChart1Component} from './elements/widget/charts/pie-chart1/pie-chart1.component';
import {BarChart1Component} from './elements/widget/charts/bar-chart1/bar-chart1.component';
import {BarChart2Component} from './elements/widget/charts/bar-chart2/bar-chart2.component';
import {AreaChart1Component} from './elements/widget/charts/area-chart1/area-chart1.component';
import {VisitorActivityComponent} from './elements/widget/visitor-activity/visitor-activity.component';
import {VisitorActivityDayComponent} from './elements/widget/visitor-activity/visitor-activity-day/visitor-activity-day.component';
import {VisitorActivityMonthComponent} from './elements/widget/visitor-activity/visitor-activity-month/visitor-activity-month.component';
import {VisitorActivityYearComponent} from './elements/widget/visitor-activity/visitor-activity-year/visitor-activity-year.component';
import {ChartjsActiveUsersComponent} from './elements/widget/charts/chartjs-active-users/chartjs-active-users.component';
import {BloodPressureComponent} from './elements/widget/charts/blood-pressure/blood-pressure.component';
import {HeartRateComponent} from './elements/widget/charts/heart-rate/heart-rate.component';
import {GlucoseRateComponent} from './elements/widget/charts/glucose-rate/glucose-rate.component';
import {ClolesterolComponent} from './elements/widget/charts/clolesterol/clolesterol.component';
import {BarChart3Component} from './elements/widget/charts/bar-chart3/bar-chart3.component';
import {AreaChart2Component} from './elements/widget/charts/area-chart2/area-chart2.component';
import {BarChart4Component} from './elements/widget/charts/bar-chart4/bar-chart4.component';
import {BarChart5Component} from './elements/widget/charts/bar-chart5/bar-chart5.component';
import {AreaChart3Component} from './elements/widget/charts/area-chart3/area-chart3.component';
import {BarChart6Component} from './elements/widget/charts/bar-chart6/bar-chart6.component';
import {MarketNowComponent} from './elements/widget/charts/market-now/market-now.component';
import {SalesAnalysisComponent} from './elements/widget/charts/sales-analysis/sales-analysis.component';
import {TopProducts1Component} from './elements/widget/charts/top-products1/top-products1.component';
import {TopProducts2Component} from './elements/widget/charts/top-products2/top-products2.component';
import {WeeklySalesComponent} from './elements/widget/charts/weekly-sales/weekly-sales.component';
import {SalesStatusComponent} from './elements/widget/charts/sales-status/sales-status.component';
import {AllSales1Component} from './elements/widget/charts/all-sales1/all-sales1.component';
import {AllSales2Component} from './elements/widget/charts/all-sales2/all-sales2.component';

import {ElementsComponent} from './forms/elements/elements.component';
import {FormValidateComponent} from './forms/form-validate/form-validate.component';

import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {Login2Component} from './pages/login2/login2.component';
import {LockScreenComponent} from './pages/lock-screen/lock-screen.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {Error400Component} from './pages/error400/error400.component';
import {Error403Component} from './pages/error403/error403.component';
import {Error404Component} from './pages/error404/error404.component';
import {Error500Component} from './pages/error500/error500.component';
import {Error503Component} from './pages/error503/error503.component';
import {
  IKeyboardLayouts, KeyboardClassKey,
  keyboardLayouts,
  MAT_KEYBOARD_LAYOUTS,
  MatKeyboardModule
} from 'angular-onscreen-material-keyboard';
import {SwitcherComponent} from './switcher/switcher.component';
import {CodeInputModule} from "angular-code-input";
import { UsersComponent } from './users/users.component';
import { ParametreComponent } from './parametre/parametre.component';
import {AuthGuard} from "./shared/guard/auth-guard.service";
import {AuthService} from "./shared/service/auth.service";
import {LoginGuardService} from "./shared/guard/login-guard.service";
import {LocalStorageService} from "ngx-webstorage";
import {HttpClientInterceptor} from "./shared/http-client-interceptor";

const customLayouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  numeric_keyboard: {
    name: 'Awesome layout',
    keys: [[['1'], ['2'], ['3'],], [['4'], ['5'], ['6'],],
      [['7'], ['8'], ['9'],],
      [[KeyboardClassKey.Bksp, KeyboardClassKey.Bksp], ['0'],]],
    lang: ['pl-PL']
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NgbdSortableHeader,

    AdminComponent,
    LoadingComponent,
    NavHeaderComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,

    LightComponent,
    DarkComponent,
    GraphDailyTargetIncomeComponent,
    GraphOrdersComponent,
    GraphCustomersComponent,
    GraphMenuComponent,
    GraphCustomerMapComponent,
    DailyTrendingMenusComponent,
    RecentOrderRequestComponent,
    DailyComponent,
    MonthlyComponent,
    WeeklyComponent,

    OrdersListComponent,

    OrderDetailComponent,
    GraphFoodComponent,
    GraphDrinkComponent,

    CustomersComponent,

    AnalyticsComponent,
    LoyalCustomersComponent,
    BestSelerMenusComponent,
    GraphRevenueComponent,
    GraphCustomerMap1Component,
    GraphSalesSummaryComponent,
    MostFavoritesItemsComponent,
    FoodItemsComponent,

    ReviewsComponent,

    ProfileComponent,
    UserStatisticsComponent,
    InterestComponent,
    LatestNewsComponent,
    HighlightsComponent,

    PostDetailsComponent,

    ComposeComponent,
    InboxComponent,
    ReadComponent,

    CalenderComponent,

    ProductGridComponent,
    ProductListComponent,
    ProductDetailComponent,
    OrderComponent,
    CheckoutComponent,
    InvoiceComponent,
    EcomCustomersComponent,

    ApexComponent,
    LineComponent,
    BasicLineChartComponent,
    LineChartWithDatalabelsComponent,
    ZoomableTimeseriesComponent,
    LineWithAnnotationsComponent,
    SyncingChartsComponent,
    BrushChartComponent,
    SteplineChartComponent,
    GradientLineChartComponent,
    MissingOrNullValuesComponent,
    DashedLineChartComponent,
    AreaComponent,
    AreaBasicComponent,
    AreaNegativeComponent,
    AreaGithubStyleComponent,
    AreaSplineComponent,
    AreaStackedComponent,
    AreaIrregularTimeseriesComponent,
    AreaMissingOrNullValuesComponent,
    ColumnComponent,
    ColumnBasicComponent,
    ColumnDataLabelsComponent,
    ColumnStackedComponent,
    ColumnStacked100Component,
    ColumnRotatedLabelsComponent,
    ColumnNegativeValuesComponent,
    ColumnLoadedChartComponent,
    ColumnDistributedComponent,
    ColumnRangeComponent,
    BarComponent,
    BarBasicComponent,
    BarGroupedComponent,
    BarStackedComponent,
    BarStacked100Component,
    BarNegativeValuesComponent,
    BarReversedComponent,
    BarCustomDataLabelsComponent,
    BarPatternedComponent,
    BarImagesComponent,
    MixedComponent,
    MixedLineColumnComponent,
    MixedMultipleYAxisComponent,
    MixedLineAreaComponent,
    MixedLineColumnAreaComponent,
    TimelineComponent,
    TimelineBasicComponent,
    TimelineDistributedComponent,
    TimelineMultiSeriesComponent,
    TimelineAdvancedComponent,
    TimelineMultipleSeriesComponent,
    CandlestickComponent,
    CandlestickBasicComponent,
    CandlestickComboComponent,
    CandlestickCategoryComponent,
    CandlestickLineComponent,
    PieComponent,
    PieSimpleComponent,
    PieDonutComponent,
    PieMonochromeComponent,
    PieGradientDonutComponent,
    SemiDonutComponent,
    DonutWithPatternComponent,
    RadarComponent,
    RadarBasicComponent,
    RadarMultipleSeriesComponent,
    RadialbarComponent,
    RadialbarBasicComponent,
    RadialbarMultipleComponent,
    RadialbarCustomAngleCircleComponent,
    RadialbarGradientComponent,
    RadialbarStrokedAngularGaugeComponent,
    RadialbarSemiCircleGaugeComponent,
    PolarAreaComponent,
    PolarAreaBasicComponent,
    PolarAreaMonochromeComponent,
    BubbleComponent,
    BubbleSimpleComponent,
    Bubble3DComponent,
    ScatterComponent,
    ScatterBasicComponent,
    ScatterDatetimeComponent,
    ScatterImagesComponent,
    HeatmapComponent,
    HeatmapBasicComponent,
    HeatmapMultipleColorsComponent,
    HeatmapMultipleFlippedComponent,
    HeatmapColorRangeComponent,
    HeatmapRoundedComponent,
    TreemapComponent,
    TreemapBasicComponent,
    TreemapMultipleSeriesComponent,
    TreemapColorRangeComponent,
    TreemapDistributedComponent,
    SparklinesComponent,
    SparklinesBasicComponent,
    ChartjsComponent,
    ChartjsLineComponent,
    ChartjsBarComponent,
    ChartjsDoughnutComponent,
    ChartjsRadarComponent,
    ChartjsPieComponent,
    ChartjsBubbleComponent,


    AccordionComponent,
    AccordionBasicComponent,
    AccordionStaticComponent,
    AccordionToggleComponent,
    AccordionHeaderComponent,
    AccordionPreventchangeComponent,
    AccordionConfigComponent,

    AlertComponent,
    AlertCloseableComponent,
    AlertBasicComponent,
    AlertSlefclosingComponent,
    AlertCustomComponent,
    AlertConfigComponent,


    ButtonComponent,

    ModalComponent,
    BasicModalComponent,
    ModalComponentComponent,
    ModalOptionsComponent,
    ModalFocusComponent,
    ModalStackedComponent,
    ModalConfigComponent,

    BadgeComponent,

    ButtonGroupComponent,

    ListGroupComponent,

    CarouselComponent,
    CarouselBasicComponent,
    CarouselNavigationComponent,
    CarouselPauseComponent,
    CarouselConfigComponent,

    DatepickerComponent,
    DatepickerBasicComponent,
    DatepickerPopupComponent,
    DatepickerMultipleComponent,
    DatepickerRangeComponent,
    DatepickerRangePopupComponent,
    DatepickerDisabledComponent,
    DatepickerAdapterComponent,
    DatepickerI18nComponent,
    DatepickerCustomdayComponent,
    DatepickerCustommonthComponent,
    DatepickerFootertemplateComponent,
    DatepickerPositiontargetComponent,
    DatepickerKeyboardComponent,
    DatepickerConfigComponent,

    DropdownComponent,
    DropdownBasicComponent,
    DropdownManualComponent,
    DropdownSplitComponent,
    DropdownFormComponent,
    DropdownContainerComponent,
    DropdownNavbarComponent,
    DropdownConfigComponent,

    MediaObjectComponent,

    NavComponent,
    NavMarkupComponent,
    NavVerticalComponent,
    NavSelectionComponent,
    NavKeepContentComponent,
    NavDynamicComponent,
    NavCustomStyleComponent,
    NavConfigComponent,
    NavBasicComponent,

    PaginationComponent,
    PaginationBasicComponent,
    PaginationAdvancedComponent,
    PaginationCustomizationComponent,
    PaginationSizeComponent,
    PaginationJustifyComponent,
    PaginationDisabledComponent,
    PaginationConfigComponent,

    PopoverComponent,
    PopoverBasicComponent,
    PopoverTplcontentComponent,
    PopoverTriggersComponent,
    PopoverAutocloseComponent,
    PopoverTplwithcontextComponent,
    PopoverDelayComponent,
    PopoverVisibilityComponent,
    PopoverContainerComponent,
    PopoverCustomclassComponent,
    PopoverConfigComponent,

    ProgressbarComponent,
    ProgressbarBasicComponent,
    ProgressbarTexttypesComponent,
    ProgressbarShowvalueComponent,
    ProgressbarStripedComponent,
    ProgressbarLabelsComponent,
    ProgressbarHeightComponent,
    ProgressbarConfigComponent,

    RatingComponent,
    RatingBasicComponent,
    RatingEventsComponent,
    RatingTemplateComponent,
    RatingDecimalComponent,
    RatingFormComponent,
    RatingConfigComponent,

    TableComponent,
    TableBasicComponent,
    TableSortableComponent,
    TableFilteringComponent,
    TablePaginationComponent,
    TableCompleteComponent,

    TimepickerComponent,
    TimepickerBasicComponent,
    TimepickerMeridianComponent,
    TimepickerSecondsComponent,
    TimepickerSpinnersComponent,
    TimepickerStepsComponent,
    TimepickerValidationComponent,
    TimepickerAdapterComponent,
    TimepickerI18nComponent,
    TimepickerConfigComponent,

    ToastComponent,
    ToastInlineComponent,
    ToastCustomComponent,
    ToastCloseableComponent,
    ToastPreventAutohideComponent,
    ToastGlobalComponent,
    ToastsContainer,

    TooltipComponent,
    TooltipBasicComponent,
    TooltipTplcontentComponent,
    TooltipTriggersComponent,
    TooltipAutocloseComponent,
    TooltipTplwithcontextComponent,
    TooltipDelayComponent,
    TooltipContainerComponent,
    TooltipCustomclassComponent,
    TooltipConfigComponent,

    TypeaheadComponent,
    TypeaheadBasicComponent,
    TypeaheadFocusComponent,
    TypeaheadFormatComponent,
    TypeaheadHttpComponent,
    TypeaheadTemplateComponent,
    TypeaheadPreventManualEntryComponent,
    TypeaheadConfigComponent,

    CardsComponent,
    TypographyComponent,
    GridComponent,


    DzmtAutocompleteComponent,
    DzmtAutocompleteDisplayComponent,
    DzmtAutocompleteFilterComponent,
    DzmtAutocompleteFirstActiveComponent,
    DzmtAutocompleteOptgroupComponent,
    DzmtAutocompleteOverviewComponent,
    DzmtAutocompletePlaneComponent,
    DzmtAutocompleteSimpleComponent,

    DzmtBadgeComponent,

    DzmtBottomSheetComponent,
    DzmtButtonComponent,
    DzmtButtonBasicComponent,
    DzmtButtonVarietiesComponent,

    DzmtButtonToggleComponent,
    ButtonToggleAppearanceComponent,
    ButtonExclusiveSelectionComponent,
    ButtonWithFormsComponent,
    ButtonBasicTogglesComponent,

    DzmtCardComponent,
    CardMultipleSectionsComponent,
    CardBasicComponent,

    DzmtCheckboxComponent,
    ConfigurableCheckboxComponent,
    BasicCheckboxComponent,

    DzmtChipsComponent,
    ChipsAutocompleteComponent,
    ChipsDragDropComponent,
    ChipsWithInputComponent,
    ChipsBasicComponent,
    ChipsStackedComponent,

    DzmtDatepickerComponent,
    ComparisonRangesComponent,
    FormsIntegrationComponent,
    BasicDateRangeComponent,
    RangeCustomSelectionStrategyComponent,
    DatepickerActionButtonsComponent,
    DatepickerOpenMethodComponent,
    DatepickerPaletteColorsComponent,
    DatepickerCustomCalendarHeaderComponent,
    DatepickerCustomDateClassesComponent,
    DisabledDatepickerComponent,
    InputChangeEventsComponent,
    DatepickerFilterValidationComponent,
    DatepickerMinMaxValidationComponent,
    BasicDatepickerComponent,
    DatepickerStartDateComponent,
    DatepickerTouchUiComponent,
    DatepickerSelectedValueComponent,

    DzmtDialogComponent,
    HeaderScrollbarActionComponent,
    DialogContentExampleDialog,

    InjectingDataComponent,
    DialogDataExampleDialog,

    DialogElementsComponent,
    DialogElementsExampleDialog,

    DialogFromMenuComponent,
    DialogFromMenuExampleDialog,

    DialogOverviewComponent,
    DialogOverviewExampleDialog,

    DzmtDividerComponent,

    DzmtExpansionComponent,
    ExpandCollapseAllTogglesComponent,
    BasicExpansionPanelComponent,
    ExpansionAsAccordionComponent,

    DzmtFormFieldComponent,
    AppearanceVariantsComponent,
    FieldWithErrorMessagesComponent,
    FieldWithHintsComponent,
    FieldWithLabelComponent,
    SimpleFormFieldComponent,
    FieldWithPrefixSuffixComponent,
    FieldThemingComponent,

    DzmtGridListComponent,
    DynamicGridListComponent,
    BasicGridListComponent,

    DzmtIconComponent,
    SvgIconComponent,

    DzmtInputComponent,
    InputWithClearButtonComponent,
    InputErrorStateMatcherComponent,
    InputWithErrorMessageComponent,
    InputsInFormComponent,
    InputsWithHintsComponent,
    InputsBasicComponent,
    InputsWithPrefixesSuffixesComponent,

    DzmtListComponent,
    BasicListComponent,
    ListWithSectionsComponent,
    ListWithSelectionComponent,
    ListWithSingleSelectionComponent,

    DzmtMenuComponent,
    MenuWithIconsComponent,
    NestedMenuComponent,
    BasicMenuComponent,
    MenuPositioningComponent,

    DzmtPaginatorComponent,
    ConfigurablePaginatorComponent,
    BasicPaginatorComponent,

    DzmtProgressBarComponent,
    BufferProgressBarComponent,
    ConfigurableProgressBarComponent,
    DeterminateProgressBarComponent,
    IndeterminateProgressBarComponent,
    QueryProgressBarComponent,
    DzmtProgressSpinnerComponent,
    ConfigurableProgressSpinnerComponent,
    BasicProgressSpinnerComponent,

    DzmtRadioComponent,
    RadiosWithNgModelComponent,
    RadiosBasicComponent,

    DzmtRippleComponent,

    DzmtSelectComponent,
    CustomTriggerTextComponent,
    DisabledSelectComponent,
    CustomErrorStateMatcherComponent,
    SelectInFormComponent,
    SelectFormFieldFeaturesComponent,
    InitialValueNoFormComponent,
    MultipleSelectionComponent,
    NoOptionRippleComponent,
    OptionGroupsComponent,
    BasicSelectComponent,
    CustomPanelStylingComponent,
    SelectInReactiveFormComponent,
    SelectWithResetOptionComponent,
    TwoWayValueBindingComponent,

    DzmtSidenavComponent,
    AutosizeSidenavComponent,
    DrawerExplicitBackdropSettingComponent,

    DzmtSlideToggleComponent,
    ConfigurableSlideToggleComponent,
    SlideToggleWithFormsComponent,
    SlideToggleBasicComponent,

    DzmtSliderComponent,
    ConfigurableSliderComponent,
    CustomThumbLabelFormattingComponent,
    SliderBasicComponent,

    DzmtSnackBarComponent,
    SnackBarCustomComponentComponent,
    BasicSnackBarComponent,
    SnackBarConfigurableComponent,

    DzmtSortComponent,

    DzmtStepperComponent,
    EditableStepsComponent,
    DisplaysErrorsInStepsComponent,
    LabelBottomPositionComponent,
    OptionalStepsComponent,
    StepperOverviewComponent,
    StepperCustomizedStatesComponent,
    StepperVerticalComponent,

    DzmtTableComponent,
    BasicTableComponent,
    DynamicallyChangingColumnsDisplayedComponent,
    TableExpandableRowsComponent,
    TableWithFilteringComponent,
    TableWithDisplayFlexComponent,
    FooterRowTableComponent,
    RetrievingDataThroughHttpComponent,
    MultipleHeaderFooterRowsComponent,
    DataTableSortingPaginationFilteringComponent,
    TableWithPaginationComponent,
    TableWithReOrderableColumnsComponent,
    TableContextPropertiesComponent,
    TableWithSelectionComponent,
    TableWithSortingComponent,
    TableWithStickyColumnsComponent,
    TableWithToggleAbleStickyHeadersFootersColumnsComponent,
    TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent,
    TableStickyFooterComponent,
    TableStickyHeaderComponent,
    TableWithConfigurationsInterfaceComponent,
    TableWithSimpleTextHeaderFooterComponent,

    DzmtTabsComponent,
    AlignedLabelsComponent,
    TabGroupAnimationsComponent,
    AsynchronouslyLoadingTabContentsComponent,
    BasicTabGroupComponent,
    TabsWithCustomLabelTemplateComponent,
    TabsWithDynamicallyChangingTabsComponent,
    TabsWithDynamicHeightComponent,
    TabsWithHeadersOnBottomComponent,
    TabsWithContentLoadedLazilyComponent,
    TabsWithStretchedLabelsComponent,
    TabsWithThemeOptionsComponent,
    BasicUseOfTabNavBarComponent,

    DzmtTooltipComponent,
    TooltipAutoHidingComponent,
    TooltipWithCustomClassComponent,
    TooltipWithShowHideDelayComponent,
    TooltipCanBeDisabledComponent,
    TooltipManuallyShowHideComponent,
    TooltipWithChangingMessageComponent,
    TooltipWithHideShowDelayComponent,
    BasicTooltipComponent,
    TooltipWithCustomPositionComponent,

    DzmtTreeComponent,
    TreeWithCheckboxesComponent,
    TreeWithCheckboxesComponent,
    TreeWithDynamicDataComponent,
    TreeWithFlatNodesComponent,
    TreeWithPartiallyLoadedDataComponent,
    TreeWithNestedNodesComponent,

    DzmtToolbarComponent,
    BasicToolbarComponent,
    MultiRowToolbarComponent,
    ToolbarOverviewComponent,

    NestableComponent,
    LightGalleryComponent,

    WidgetComponent,
    Timeline1Component,
    Timeline2Component,
    Notifications1Component,
    Notifications2Component,
    MessageComponent,
    TodolistComponent,
    PieChart1Component,
    BarChart1Component,
    BarChart2Component,
    AreaChart1Component,
    VisitorActivityComponent,
    VisitorActivityDayComponent,
    VisitorActivityMonthComponent,
    VisitorActivityYearComponent,
    ChartjsActiveUsersComponent,
    BloodPressureComponent,
    HeartRateComponent,
    GlucoseRateComponent,
    ClolesterolComponent,
    BarChart3Component,
    AreaChart2Component,
    BarChart4Component,
    BarChart5Component,
    AreaChart3Component,
    BarChart6Component,
    MarketNowComponent,
    SalesAnalysisComponent,
    TopProducts1Component,
    TopProducts2Component,
    WeeklySalesComponent,
    SalesStatusComponent,
    AllSales1Component,
    AllSales2Component,

    ElementsComponent,
    FormValidateComponent,

    RegisterComponent,
    LoginComponent,
    Login2Component,
    LockScreenComponent,
    ForgotPasswordComponent,
    Error400Component,
    Error403Component,
    Error404Component,
    Error500Component,
    Error503Component,

    SwitcherComponent,
     UsersComponent,
     ParametreComponent,
  ],
  imports: [
    CodeInputModule.forRoot({
      codeLength: 4,
      isCharsCode: true,
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    MatKeyboardModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
    SharedService,
    AuthGuard,
    AuthService,
    LoginGuardService,
    LocalStorageService,
    {provide: MAT_KEYBOARD_LAYOUTS, useValue: customLayouts}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
