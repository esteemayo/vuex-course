import http from './httpService';

export function getRandomNumber() {
  return http.get('/');
}
