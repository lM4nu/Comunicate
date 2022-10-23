import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  constructor() {}

  voz: any;

  public buscarVoz(idioma = 'es-AR') {
    const voces = speechSynthesis
      .getVoices()
      .filter((v) => v.lang.startsWith(idioma));
    console.log(`Encontré ${voces.length} voces para ${idioma}`);
    if (voces.length > 0) {
      this.voz = voces[0];
    } else {
      if (idioma.length == 5) this.buscarVoz(idioma.substring(0, 2));
    }
  }

  public hablar(input: string) {
    if (!('speechSynthesis' in window)) {
      alert('El servicio de texto a voz no está disponible en tu dispositivo');
      return;
    }
    if (this.voz == null) {
      this.buscarVoz();
    }
    const pronunciacion = new SpeechSynthesisUtterance(input);
    pronunciacion.voice = this.voz;
    speechSynthesis.speak(pronunciacion);
    console.log(`Diciendo ${input}`);
  }

  public decir(input: string): void {
    speechSynthesis.speak(new SpeechSynthesisUtterance(input));
  }
}
