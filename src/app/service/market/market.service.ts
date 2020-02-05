import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Market} from '../../models/market'


@Injectable({
  providedIn: 'root'
})
export class MarketService {
  readonly url: string = "http://localhost:8080/market";
  readonly MarketItem: string = "/item";
  readonly MarketItems: string = "/items";
  readonly AddMarketItem: string = "/insert";
  readonly UpdateMarketItem: string = "/update";
  constructor(private http: HttpClient) { }


  getMarketItem(name: string){
    let params = new HttpParams().set('marketItem', name);
    return this.http.get(`${this.url}${this.MarketItem}`,{ params});
  }
  getMarketItems(){
    return this.http.get(`${this.url}${this.MarketItems}`);
  }
  addMarketItem(market : Market){
    this.http.post(`${this.url}${this.AddMarketItem}`,market );
  }
  updateMarketItem(market:Market){
    this.http.put(`${this.url}${this.UpdateMarketItem}`,market );
  }
}
