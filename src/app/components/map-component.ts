import {Component, OnInit} from "@angular/core";
import {Map} from "../../classes/map";
import {MapService} from "../services/map-service";

@Component({
	selector: "map-component",
	templateUrl: "../templates/map.html"
})

export class MapComponent implements OnInit {

	constructor(private mapService: MapService){}

	public location1: string = "";
	public location2: string = "";

	ngOnInit() : void {

		let data = this.mapService.getMap(this.location1, this.location2);

	}

}