import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Map } from '../../classes/map';

@Injectable()
export class MapService {
	constructor(protected http: Http){

	}


	public distanceUrl="api/maps";
	public mode = "driving";



	getMap (origin: string, destination: string){
		// rather than return an observable, the asynchronicity is handled by google maps apis?
		return this.http.get(this.distanceUrl+'/?origin='+origin+"&destination="+destination).map(res=>res.json());

	};

}