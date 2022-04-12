import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  playAudio(src: string) {
    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }
}

