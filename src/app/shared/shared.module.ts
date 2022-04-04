import { NgModule } from '@angular/core';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [TimePipe],
  exports: [TimePipe],
  imports: [],
})
export class SharedModule {}
