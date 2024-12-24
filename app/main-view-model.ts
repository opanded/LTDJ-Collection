import { Observable } from '@nativescript/core';
import { Track } from './models/album';
import { albums } from './data/albums';

export class MainViewModel extends Observable {
    private _currentTrack: Track;

    constructor() {
        super();
        // 直接加载丁家坡2023
        this._currentTrack = albums[1].tracks[0];
    }

    get currentTrack(): Track {
        return this._currentTrack;
    }
}