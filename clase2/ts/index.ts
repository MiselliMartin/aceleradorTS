interface Song {
    title: string;
    artist: string;
    duration: number; // en segundos
  }
  
  class Playlist {
    private songs: Song[] = [];
  
    addSong(song: Song): void {
      this.songs.push(song)
    }
  
    removeSong(title: string): void {
      this.songs = this.songs.filter((song) => song.title !== title)
    }
  
    getTotalDuration(title: string): string {
        let targetSong = this.songs.find((song) => song.title === title) 

        if (!targetSong) {
            return "Ni idea bro";
          }

        let hours: any = Math.floor(targetSong.duration / 3600);
        hours = (hours < 10)? '0' + hours : hours;
        let minutes: any = Math.floor((targetSong.duration / 60) % 60);
        minutes = (minutes < 10)? '0' + minutes : minutes;
        let seconds: any = targetSong.duration % 60;
        seconds = (seconds < 10)? '0' + seconds : seconds;
        return `${hours}:${minutes}:${seconds}`
          
    }
  
    getSongsByArtist(artist: string): Song[] {
    let songByArtist: Song[] = this.songs.filter((song) => song.artist === artist)
    return songByArtist
    }
}

const playlist = new Playlist();

playlist.addSong({ title: "Seminare", artist: "Serú Girán", duration: 200 });
playlist.addSong({ title: "Por", artist: "Spinetta", duration: 150 });
playlist.addSong({ title: "Viernes 3am", artist: "Charly García", duration: 345 });
playlist.addSong({ title: "Cantata de puentes amarillos", artist: "Spinetta", duration: 315 });

console.log(playlist.getTotalDuration("Seminare"));
console.log(playlist.getTotalDuration("Por"));
console.log(playlist.getTotalDuration("Viernes 3am"));
console.log(playlist.getTotalDuration("Cantata de puentes amarillos"))
console.log(playlist.getSongsByArtist("Spinetta"));
playlist.removeSong("Por")

console.log(playlist.getTotalDuration("Por"));


