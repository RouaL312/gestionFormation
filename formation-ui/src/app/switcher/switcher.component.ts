import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {
    
    
    themename!: string;
    themedir!: string;
    attributeVal!: any;
    event!: Event;
  
  
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      
      this.route.queryParams
      .subscribe(params => {
        // console.log(params);
        
        if(params.direction =="undefined" || params.direction == "" || params.direction == null) {
            this.themedir = 'ltr';
        } else {
            this.themedir = params.direction;
        }
        
        if(params.themename !="" && (params.themename <= 5 && params.themename > 0)) {
            this.themename = 'dezThemeSet'+params.themename;
            this.themeDemoSettings(this.themename, this.themedir);
        }
        // console.log(this.themename);
        // console.log(this.themedir);
      });
  }
  
  
    toggleswitcher: boolean = true;
    togglesthemedemo: boolean = true;
  
    toggleswitcherwindow() {
		this.toggleswitcher = !this.toggleswitcher;
	}
    
    togglesthemedemowindow() {
		this.togglesthemedemo = !this.togglesthemedemo;
	}
    
    
    themeSettings(attributeName: any, event: any) {
        
        // console.log(event.target);
        // console.log(event);
        
        if(event.target === undefined) {
            this.attributeVal = event;
            } else {
            this.attributeVal = event.target.value;
        }
        
        
        
        document.body.setAttribute(attributeName, this.attributeVal);
        
        
        if(attributeName == 'direction') {
            document.getElementsByTagName('html')[0].setAttribute('dir', this.attributeVal);
            document.getElementsByTagName('html')[0].setAttribute('class', this.attributeVal);
        }
    }
    
    
    themeDemoSettings (theme: any, direction: any) {
    
    
        // alert(theme);
        // alert(direction);
        var dezThemeSet1 = {
            typography: "poppins",
            version: "light",
            layout: "vertical",
            primary: "color_1",
            headerBg: "color_1",
            navheaderBg: "color_12",
            sidebarBg: "color_12",
            sidebarStyle: "full",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
        };
        
        var dezThemeSet2 = {
            typography: "poppins",
            version: "light",
            layout: "vertical",
            primary: "color_9",
            headerBg: "color_1",
            navheaderBg: "color_9",
            sidebarBg: "color_9",
            sidebarStyle: "mini",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
        };
        
        
        var dezThemeSet3 = {
            typography: "poppins",
            version: "dark",
            layout: "vertical",
            primary: "color_7",
            headerBg: "color_1",
            navheaderBg: "color_7",
            sidebarBg: "color_7",
            sidebarStyle: "modern",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
        };
        
        var dezThemeSet4 = {
            typography: "poppins",
            version: "dark",
            layout: "vertical",
            primary: "color_1",
            headerBg: "color_1",
            navheaderBg: "color_1",
            sidebarBg: "color_1",
            sidebarStyle: "mini",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
        };
        
        var dezThemeSet5 = {
            typography: "poppins",
            version: "light",
            layout: "vertical",
            primary: "color_1",
            headerBg: "color_1",
            navheaderBg: "color_1",
            sidebarBg: "color_1",
            sidebarStyle: "mini",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
        };
        
        var dezThemeSet6 = {
            typography: "poppins",
            version: "light",
            layout: "horizontal",
            primary: "color_5",
            headerBg: "color_1",
            navheaderBg: "color_1",
            sidebarBg: "color_1",
            sidebarStyle: "full",
            sidebarPosition: "fixed",
            headerPosition: "static",
            containerLayout: "full",
        };
        
        var dezThemeSet7 = {
            typography: "poppins",
            version: "light",
            layout: "horizontal",
            primary: "color_2",
            headerBg: "color_1",
            navheaderBg: "color_1",
            sidebarBg: "color_2",
            sidebarStyle: "compact",
            sidebarPosition: "fixed",
            headerPosition: "static",
            containerLayout: "full",
        };
        
        var dezThemeSet8 = {
            typography: "poppins",
            version: "light",
            layout: "vertical",
            primary: "color_15",
            headerBg: "color_1",
            navheaderBg: "color_15",
            sidebarBg: "color_1",
            sidebarStyle: "overlay",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "wide-boxed",
        };
        
        var dezThemeSet9 = {
            typography: "poppins",
            version: "light",
            layout: "horizontal",
            primary: "color_14",
            headerBg: "color_14",
            navheaderBg: "color_14",
            sidebarBg: "color_1",
            sidebarStyle: "full",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
        };
        
        var dezThemeSet10 = {
            typography: "poppins",
            version: "light",
            layout: "vertical",
            primary: "color_8",
            headerBg: "color_1",
            navheaderBg: "color_8",
            sidebarBg: "color_8",
            sidebarStyle: "compact",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
        };
        
        var dezThemeSet11 = {
            typography: "poppins",
            version: "light",
            layout: "vertical",
            primary: "color_9",
            headerBg: "color_9",
            navheaderBg: "color_1",
            sidebarBg: "color_1",
            sidebarStyle: "full",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
        };
        var themeVar = eval(theme);
        
         document.body.setAttribute('data-typography', themeVar.typography);
         document.body.setAttribute('data-theme-version', themeVar.version);
         document.body.setAttribute('data-layout', themeVar.layout);
         document.body.setAttribute('data-primary', themeVar.primary);
         document.body.setAttribute('data-headerbg', themeVar.headerBg);
         document.body.setAttribute('data-nav-headerbg', themeVar.navheaderBg);
         document.body.setAttribute('data-sibebarbg', themeVar.sidebarBg);
         document.body.setAttribute('data-sidebar-style', themeVar.sidebarStyle);
         document.body.setAttribute('data-sidebar-position', themeVar.sidebarPosition);
         document.body.setAttribute('data-header-position', themeVar.headerPosition);
         document.body.setAttribute('data-container', themeVar.containerLayout);
         document.body.setAttribute('direction', direction);
            
        document.getElementsByTagName('html')[0].setAttribute('dir', direction);
        document.getElementsByTagName('html')[0].setAttribute('class', direction);

    
    
    }
    

}
