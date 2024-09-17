import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private apiUrl = 'assets/api/produtos.json';

  constructor(private http: HttpClient) { }

  // Método para buscar um pedido específico pelo ID
  getOrderById(orderId: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((orders: any[]) => orders.find(order => order.id === orderId))
    );
  }
}
