import { Observable } from '@nativescript/core';
import { Album, Track } from '../models/album';
import { albums } from '../data/albums';
import { TagService } from '../services/tag.service';
import { PlayerService } from '../services/player.service';
import { AnimationService } from '../services/animation.service';

export class MainViewModel extends Observable {
  private _albums: Album[] = albums;
  private _searchQuery: string = '';
  private _selectedAlbum: Album | null = null;
  private _selectedTrack: Track | null = null;
  
  private tagService: TagService;
  private playerService: PlayerService;

  constructor() {
    super();
    this.tagService = new TagService();
    this.playerService = new PlayerService();
  }

  // ... 保留原有的 albums, filteredAlbums, searchQuery 相关代码 ...

  get tags() {
    return this.tagService.tags;
  }

  get currentTrack() {
    return this.playerService.currentTrack;
  }

  get isPlaying() {
    return this.playerService.isPlaying;
  }

  onTrackTap(args: any) {
    const track = this.selectedAlbum?.tracks[args.index];
    if (track) {
      this._selectedTrack = track;
      this.playerService.play(track);
      this.notifyPropertyChange('selectedTrack', track);
    }
  }

  togglePlay() {
    if (this.playerService.isPlaying) {
      this.playerService.pause();
    } else {
      this.playerService.resume();
    }
  }

  stop() {
    this.playerService.stop();
  }

  onTagTap(args: any) {
    const tag = this.tags[args.index];
    this._albums = this.tagService.getAlbumsByTag(tag.name);
    this.notifyPropertyChange('filteredAlbums', this.filteredAlbums);
  }
}