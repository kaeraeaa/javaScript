const playlist = {
    name: 'Плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    changeName(newName){
        return this.name = newName
    }
      }

  console.log(playlist);
  playlist.changeName('Супер плейліст');
  console.log(playlist);    