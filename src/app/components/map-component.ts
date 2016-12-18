import {Component, OnInit} from "@angular/core";
import {Map} from "../../classes/map";
import {MapService} from "../services/map-service";

@Component({
	selector: "map-component",
	templateUrl: "../templates/map.html"
})

export class MapComponent  {

	constructor(private mapService: MapService){}

	public location1: string = "";
	public location2: string = "";

	public distance: string = "";
	public duration: string = "";

	public beep: string = "";

	registerBeep(){
		this.beep = this.beep + " click";
	}

	getDrivingDistanceDuration() {

		this.beep = this.beep + " click";

		// data = response.json
		let data: any = this.mapService.getMap(this.location1, this.location2).subscribe(data =>{
			this.distance = data.rows[0].elements[0].distance.text;
			this.duration = data.rows[0].elements[0].duration.text;
		});




	}

}