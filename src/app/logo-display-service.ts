import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogoDisplayService {
  public logo: string | undefined;

  constructor() {}
}
