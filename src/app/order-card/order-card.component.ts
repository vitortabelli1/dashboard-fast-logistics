import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TrackingService } from '../tracking.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
  imports: [CommonModule] // Adicione CommonModule aqui
})
export class OrderCardComponent implements OnChanges {
  @Input() orderId: string | null = null;
  order: any = null;
  statusMessage: string | null = null;

  constructor(private trackingService: TrackingService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['orderId'] && this.orderId) {
      this.fetchOrderDetails(this.orderId);
    }
  }

  fetchOrderDetails(orderId: string): void {
    this.trackingService.getOrderById(orderId).subscribe(
      (order: any) => {
        this.order = order;
        if (!order) {
          this.statusMessage = 'Ordem não encontrada.';
        }
      },
      (error: any) => {
        console.error('Erro ao buscar os detalhes do pedido:', error);
        this.statusMessage = 'Erro ao buscar os detalhes do pedido.';
      }
    );
  }
}
