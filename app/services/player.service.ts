import { Observable } from '@nativescript/core';
import { Track } from '../models/album';

export class PlayerService extends Observable {
  private _currentTrack: Track | null = null;
  private _isPlaying: boolean = false;
  private _progress: number = 0;

  get currentTrack() {
    return this._currentTrack;
  }

  get isPlaying() {
    return this._isPlaying;
  }

  get progress() {
    return this._progress;
  }

  play(track: Track) {
    this._currentTrack = track;
    this._isPlaying = true;
    this.notifyPropertyChange('currentTrack', track);
    this.notifyPropertyChange('isPlaying', true);
  }

  pause() {
    this._isPlaying = false;
    this.notifyPropertyChange('isPlaying', false);
  }

  resume() {
    if (this._currentTrack) {
      this._isPlaying = true;
      this.notifyPropertyChange('isPlaying', true);
    }
  }

  stop() {
    this._currentTrack = null;
    this._isPlaying = false;
    this._progress = 0;
    this.notifyPropertyChange('currentTrack', null);
    this.notifyPropertyChange('isPlaying', false);
    this.notifyPropertyChange('progress', 0);
  }
}