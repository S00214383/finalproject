import { Component, OnInit } from '@angular/core';
import { WheaterData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private wheatherService: WeatherService){

  }
  
cityName : string = 'Sligo';

  weatherData  ?: WheaterData;
  
  ngOnInit(): void {
   
    this.getWeatherData(this.cityName);
  }


  onSubmit(){

    this.getWeatherData(this.cityName);
    this.cityName = '';

  }

  private getWeatherData(cityName : string)
  {
    this.wheatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
this.weatherData = response;

          console.log(response)
      }
    });

  }
  
}
