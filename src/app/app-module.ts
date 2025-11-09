import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Header } from './header/header';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';
import { SideMenu } from './side-menu/side-menu';
import { StudentSubscription } from './student-subscription/student-subscription';
import { SubscriptionTable } from './subscription-table/subscription-table';

@NgModule({
  declarations: [
    App,
    Header,
    Dashboard,
    Profile,
    SideMenu,
    StudentSubscription,
    SubscriptionTable
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ChartsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App],
  exports: [
    Header,
    Dashboard,
    Profile,
    SideMenu
  ]
})
export class AppModule { }
