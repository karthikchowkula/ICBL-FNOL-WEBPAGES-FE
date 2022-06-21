import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SecureLocalStorageService {
  secretKey = "92b7ddd5-af63-459d-b392-15b3b57333ec";
  constructor() { }
  

  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(value:string){
    return CryptoJS.AES.decrypt(value, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    
  }
} 