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
  
  weatherData  ?: WheaterData;
  
  ngOnInit(): void {
   
      this.wheatherService.getWeatherData('Bundoran')
      .subscribe({
        next: (response) => {
this.weatherData = response;

            console.log(response)
        }
      });

  }
  
}
