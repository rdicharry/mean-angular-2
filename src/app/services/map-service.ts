import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Map } from '../../classes/map';
import {Key} from "../../../key"

@Injectable()
export class MapService {
	constructor(protected http: Http){

	}


	public distanceUrl="https://maps.googleapis.com/maps/api/distancematrix/json?";
	public mode = "driving";
	private apiKey = Key.apiKey;



	getMap (origin: string, destination: string){
		// rather than return an observable, the asynchronicity is handled by google maps apis?
		return this.http.get(this.distanceUrl+'origins='+origin+"&destinations="+destination+"&key="+this.apiKey).map(res=>res.json());

	};

}