import { Component } from '@angular/core';
import { TrackingService } from '../tracking.service'; // Verifique o caminho correto
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  standalone: true,
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css', './media-queries.css'],
  imports: [CommonModule, ReactiveFormsModule] // Importações necessárias para formulários
})
export class TrackingComponent {
  trackingForm: FormGroup;
  order: any = null;
  statusMessage: string | null = null;

  constructor(private fb: FormBuilder, private trackingService: TrackingService) {
    // Criação do formulário com validação de campo obrigatório
    this.trackingForm = this.fb.group({
      orderNumber: ['', Validators.required]
    });
  }

  // Método para buscar a ordem pelo número
  searchOrder() {
    // Verifica se o formulário está inválido
    if (this.trackingForm.invalid) {
      this.statusMessage = 'Por favor, insira um ID de pedido válido.';
      this.order = null;
      return;
    }

    this.statusMessage = null;
    const orderNumber = this.trackingForm.get('orderNumber')?.value.trim(); // Obtém o valor do número do pedido

    // Chama o serviço para buscar a ordem
    this.trackingService.getOrderById(orderNumber).subscribe(
      (order: any) => {
        if (order) {
          this.order = order; // Armazena a ordem encontrada
        } else {
          this.order = null;
          this.statusMessage = 'Ordem não encontrada.'; // Mensagem de ordem não encontrada
        }
      },
      (error: any) => {
        console.error('Erro ao buscar os detalhes do pedido:', error);
        this.statusMessage = 'Erro ao buscar os detalhes do pedido.'; // Mensagem de erro
        this.order = null;
      }
    );
  }
}
