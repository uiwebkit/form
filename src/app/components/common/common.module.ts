import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppCodeComponent } from './code/code.component';
import { AppCodeTabsComponent } from './code-tabs/code-tabs.component';
import { MatListItem } from '@angular/material/list';

const Declarations = [AppCodeComponent, AppCodeTabsComponent];

@NgModule({
  imports: [CommonModule, MatTabsModule, MatTooltipModule, MatButtonModule, MatIconModule, MatListItem],
  declarations: Declarations,
  exports: Declarations,
})
export class AppCommonModule {}
