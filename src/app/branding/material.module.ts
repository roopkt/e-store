import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatLineModule,
    MatProgressSpinnerModule,

    
} from '@angular/material';

const MODULES = [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressSpinnerModule,
]

@NgModule({
    imports: MODULES,
    exports: MODULES,
})
export class EStoreMaterialModule { }