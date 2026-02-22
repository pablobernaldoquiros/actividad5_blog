import { Component } from '@angular/core';
import { Inoticia } from '../../interfaces/inoticia';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  noticias: Inoticia[] = [
    {
      titulo: 'El Servicio Secreto mata a un joven de 21 años que se coló armado en la residencia de Trump en Mar-a-Lago',
      imagen: 'https://e01-phantom-elmundo.uecdn.es/ac3c0ab24b207db458ce6f0981363ad4/resize/1220/f/webp/assets/multimedia/imagenes/2026/02/22/17717816295251.jpg',
      texto: 'Aunque Trump suele pasar los fines de semana en su resort, en el momento del incidente se encontraba en la Casa Blanca',
      fecha: '2026-12-01'
    },
    {
      titulo: 'Muere un montañero de 63 años tras sufrir una caída en la vertiente segoviana de La Bola del Mundo',
      imagen: 'https://e01-phantom-elmundo.uecdn.es/fb7f87a81c5a7c05343d418a6bbaabdf/crop/262x0/1963x1134/resize/1220/f/webp/assets/multimedia/imagenes/2026/02/22/17717616290879.jpg',
      texto: 'El hombre se ha caído por una ladera y se ha golpeado finalmente contra un árbol este domingo',
      fecha: '2026-15-02'
    }
    
  
  ]

  


}
