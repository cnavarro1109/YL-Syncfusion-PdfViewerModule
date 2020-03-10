import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { DocumentComponent } from './document/document.component';
import { Routes, RouterModule } from '@angular/router';

import { PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService  } from '@syncfusion/ej2-angular-pdfviewer';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';


// import the PdfViewer Module for the PDF Viewer component
// import { PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent }  from './app.component';

const appRoutes: Routes = [
  { path: 'document', component: DocumentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    ToolbarModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
