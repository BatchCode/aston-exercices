import { Injectable } from '@angular/core';

declare var H: any;

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    public platform: any;
    public geocoder: any;

    public constructor() {
        this.platform = new H.service.Platform({
            "app_id": "APP-ID-HERE",
            "app_code": "APP-CODE-HERE"
        });
        this.geocoder = this.platform.getGeocodingService();
    }

    public getAddress(query: string) { }

    public getAddressFromLatLng(query: string) { }
}


