import { NgModule } from '@angular/core';
import { TimePipe } from './pipes/time.pipe';
import { EmojiPipe } from './pipes/emoji.pipe';
import { TimetextPipe } from './pipes/timetext.pipe';
import { VariablePipe } from './pipes/variable.pipe';

@NgModule({
  declarations: [TimePipe, EmojiPipe, TimetextPipe, VariablePipe],
  exports: [TimePipe, EmojiPipe, TimetextPipe, VariablePipe],
  imports: [],
})
export class SharedModule {}
