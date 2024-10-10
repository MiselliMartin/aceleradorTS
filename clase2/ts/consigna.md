### Lista de reproducción musical

```typescript
interface Song {
  title: string;
  artist: string;
  duration: number; // en segundos
}

class Playlist {
  private songs: Song[] = [];

  addSong(song: Song): void {
    // Implementar
  }

  removeSong(title: string): void {
    // Implementar
  }

  getTotalDuration(): string {
    // Implementar: Devolver duración total en formato "hh:mm:ss"
  }

  getSongsByArtist(artist: string): Song[] {
    // Implementar
  }
}
```