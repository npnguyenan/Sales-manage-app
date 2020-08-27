// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from '../weather.service';

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css'],
//   providers: [WeatherService]
// })
// export class WeatherComponent implements OnInit {
//   txtCityName = '';
//   cityName = '';
//   temperature = null;
//   humidity = null;
//   list = [];
//   iconUrl = '';
//   constructor(private weatherService: WeatherService) { }
//   ngOnInit(): void {
//   }
//   enterPress() {
//     this.getWeather();
//   }
//   async getWeather() {
//     let api = await this.weatherService.getApi(this.txtCityName);
//     this.cityName = await api[0].name;
//     this.temperature = await api[0].main.temp;
//     this.humidity = await api[0].main.humidity;
//     this.iconUrl = 'http://openweathermap.org/img/w/' + await api[0].weather[0].icon + '.png';
//     console.log(api);
//     // this.weatherService.getApi(this.txtCityName)
//     //   .then(temp => {

//     //     this.list = temp,
//     //       this.iconUrl = 'http://openweathermap.org/img/w/' + this.list[0].weather[0].icon + '.png'
//     //     this.temperature = this.list[0].main.temp
//     //     this.humidity = this.list[0].main.humidity
//     //     this.cityName = this.list[0].name
//     //   })
//     //   .catch(err => console.log(err));

//     //   this.weatherService.getApi(this.txtCityName)
//     //   .then(temp => {

//     //     this.list = temp,
//     //       this.iconUrl = 'http://openweathermap.org/img/w/' + this.list[0].weather[0].icon + '.png'
//     //     this.temperature = this.list[0].main.temp
//     //     this.humidity = this.list[0].main.humidity
//     //     this.cityName = this.list[0].name
//     //   })
//     //   .catch(err => console.log(err));
//   }

// }
