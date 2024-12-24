export interface Album {
  id: string;
  title: string;
  releaseDate: string;
  artist: string;
  coverUrl: string;
  tags: string[];
  tracks: Track[];
}

export interface Track {
  id: string;
  title: string;
  lyrics: string;
  duration: string;
  artist: string;
  releaseDate: string;
  credits?: {
    originalSong?: string;
    originalArtist?: string;
    originalSource?: string;
    lyrics?: string;
    vocals?: string;
    mixing?: string;
  };
}