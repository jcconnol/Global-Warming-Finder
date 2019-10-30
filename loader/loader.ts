import * as performRequest from './PerformRequest';

document.body.textContent = performRequest().getWeather('https://api.darksky.net/forecast/88320e4d95c5cc9081084e3ae49dfecd/37.8267,-122.4233');
