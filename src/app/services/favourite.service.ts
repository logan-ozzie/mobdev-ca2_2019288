import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'favouriteFilms';
 
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
 
  constructor(private storage: Storage) { }
 
  getAllFavouriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }
 
  isFavourite(episodeId) {
    return this.getAllFavouriteFilms().then(result => {
      return result && result.indexOf(episodeId) !== -1;
    });
  }
 
  favouriteFilm(episodeId) {
    return this.getAllFavouriteFilms().then(result => {
      if (result) {
        result.push(episodeId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [episodeId]);
      }
    });
  }
 
  unfavouriteFilm(episodeId) {
    return this.getAllFavouriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(episodeId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
}