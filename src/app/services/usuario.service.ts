import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl  } from '@angular/platform-browser';
import { UserRickMorty } from '../model/userRickMorty.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly url = 'https://rickandmortyapi.com';
  private readonly path = '/api';
  sanitizedUrl: SafeUrl;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.sanitizedUrl);
  }

  getUsuarios(): Observable<UserRickMorty>{
    const headers= new HttpHeaders().set('accept', '*/*');
    return this.http.get<UserRickMorty>(`${this.url}${this.path}/character`, { headers });
  }

  getUsuario(): Observable<UserRickMorty> {

    const sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('https://rickandmortyapi.com');
    return this.http.get<UserRickMorty>(`${sanitizedUrl}${this.path}/serviceRecover`);
  }
}
