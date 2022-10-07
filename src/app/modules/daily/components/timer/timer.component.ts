import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Member } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styles: [
    `
      .progress-bar {
        transition: width 1s linear;
      }
    `,
  ],
})
export class TimerComponent implements OnInit {
  @Input() timePerMember = 0;
  @Input() totalTime = 0;
  @Output() onNext: EventEmitter<Member> = new EventEmitter();
  @Output() onFinish: EventEmitter<number> = new EventEmitter();

  actualMemberTime = 0;
  actualTime = 0;
  actualMember: Member = {
    name: 'default',
    isTalking: true,
    timeSpent: this.actualMemberTime,
  };
  index = 0;
  images = [
    'https://media.giphy.com/media/EZICHGrSD5QEFCxMiC/giphy.gif',
    'https://media2.giphy.com/media/tmQrpA8zpG4a16SSxm/giphy.gif?cid=ecf05e477kfaxov1plst8ul1t7cw1nqgg884zogu6umcoc62&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/l2JHVUriDGEtWOx0c/giphy.gif?cid=ecf05e47dtdu4sr00ri151xhkrij2ocigtakgkmihrz8ozbp&rid=giphy.gif&ct=g',
    'https://i.gifer.com/3Rdk.gif',
    'https://media0.giphy.com/media/RkzJzW4xUm0X6/200w.gif?cid=82a1493b4oleoinlj6nvvko9q6nl01bwijm7p1j8x79o1g69&rid=200w.gif&ct=g',
    'https://i.pinimg.com/originals/a9/ec/b8/a9ecb81b915236f79cea7a8b22befc1a.gif',
    'https://media3.giphy.com/media/l0MYOUI5XfRk4LLWM/giphy.gif?cid=ecf05e47qj2p361mtvuyy5l5l3fspr9xzegwhukbcotgwr9k&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/229Pljon180JF07BaX/giphy.gif?cid=ecf05e47qj2p361mtvuyy5l5l3fspr9xzegwhukbcotgwr9k&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/l41JP67uBy95EI3hm/giphy.gif?cid=ecf05e47e3f99gy3t8bvwpqlwsj57njqpd6z26uknu76k304&rid=giphy.gif&ct=g',
  ];
  randomImage = this.getRandomImage();
  memberProgressWidth = '0%';
  members: Member[] = [];
  strings = [
    'Tell us something %!',
    'How was your day yesterday %?',
    "%, What's up?",
    'I have a felling that % is going to tell us something interesting...',
    'We are attentive %',
    '% had a great day yesterday!',
    'We are all ears %',
    '%, tell us your affairs',
    'Tell us about yourself %',
  ];
  randomString = this.getRandomString();
  timerInterval?: ReturnType<typeof setTimeout>;
  totalProgressWidth = '0%';

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.members = this.storageService.getMembers();
    this.start();
  }

  start() {
    this.timerInterval = setInterval(() => {
      this.actualMemberTime++;
      this.actualTime++;
      this.setWidth();
    }, 1000);

    this.setupNewTalker();
  }

  setupNewTalker() {
    this.actualMember = this.members[this.index];
    this.randomImage = this.getRandomImage();
    this.randomString = this.getRandomString();
    this.actualMember.isTalking = true;
  }

  next() {
    this.actualMember.timeSpent = this.actualMemberTime;
    this.actualMember.isTalking = false;
    this.onNext.emit(this.actualMember);

    this.actualMemberTime = 0;

    this.setWidth();

    this.index++;
    if (this.members.length > this.index) {
      this.setupNewTalker();
    } else {
      clearInterval(this.timerInterval!);
      this.onFinish.emit(this.actualTime);
    }
  }

  setWidth() {
    this.memberProgressWidth =
      this.actualMemberTime / (this.timePerMember / 100) + '%';
    this.totalProgressWidth = this.actualTime / (this.totalTime / 100) + '%';
  }

  getRandomImage(): string {
    return this.getRandomElement(this.images);
  }

  getRandomString(): string {
    return this.getRandomElement(this.strings);
  }

  getRandomElement<T>(array: Array<T>): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
