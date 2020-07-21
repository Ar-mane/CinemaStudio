import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getVilles() {
    return this.http.get(this.host + '/villes');
  }

  public getCinemas(ville) {
    return this.http.get(ville._links.cinemas.href);
  }

  public getSalles(cinema) {
    return this.http.get(cinema._links.salles.href);
  }

  public getProjections(salle) {
    let url = salle._links.projections.href.replace('{?projection}', '');
    return this.http.get(url + '?projection=p1');
  }

  public getTicketsPlaces(PLACE) {
    let url = PLACE._links.tickets.href.replace('{?projection}', '');
    return this.http.get(url + '?projection=ticketProj');
  }

  public payerTickets(dataForm) {
    return this.http.post(this.host + '/payerTickets', dataForm);
  }
}
