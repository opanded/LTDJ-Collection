import { Observable } from '@nativescript/core';
import { albums } from '../data/albums';

export class TagService extends Observable {
  private _tags: { name: string; count: number }[] = [];

  constructor() {
    super();
    this.generateTags();
  }

  private generateTags() {
    const tagCount = new Map<string, number>();
    
    albums.forEach(album => {
      album.tags.forEach(tag => {
        tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
      });
    });

    this._tags = Array.from(tagCount.entries()).map(([name, count]) => ({
      name,
      count
    }));
  }

  get tags() {
    return this._tags;
  }

  getAlbumsByTag(tag: string) {
    return albums.filter(album => album.tags.includes(tag));
  }
}