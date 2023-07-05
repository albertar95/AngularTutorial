import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SubServerComponent } from './sub-server/sub-server.component';
import { DataBindingTestComponent } from './data-binding-test/data-binding-test.component';
import { DataBindingTestSubComponent } from './data-binding-test-sub/data-binding-test-sub.component';
import { CustomDropDown } from './Shared/CustomDropDown.directive';
import { ServiceAndDIComponent } from './service-and-di/service-and-di.component';
import { ServiceAndDISubComponent } from './service-and-disub/service-and-disub.component';
import { MyLoggingService } from './Services/Logging.Service';
import { PersistenceService } from './Services/Persistence.Service';
import { RoutingTutoComponent } from './routing-tuto/routing-tuto.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsHandlingComponent } from './forms-handling/forms-handling.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { SearchThisPipe } from './search-this.pipe';

const appRoutes = [{ path: '', component: HomeComponent }
  , { path: 'binding', component: DataBindingTestComponent }, {
    path: 'server', component: ServerComponent,
    children: [{ path: ':id/:name', component: SubServerComponent }]  },
  { path: 'service', component: ServiceAndDIComponent },
  { path: 'routing', component: RoutingTutoComponent },
  { path: 'forms', component: FormsHandlingComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SubServerComponent,
    ServerComponent,
    DataBindingTestComponent,
    DataBindingTestSubComponent,
    CustomDropDown,
    ServiceAndDIComponent,
    ServiceAndDISubComponent,
    RoutingTutoComponent,
    HomeComponent,
    NotFoundComponent,
    FormsHandlingComponent,
    FilterPipePipe,
    SearchThisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyLoggingService, PersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
