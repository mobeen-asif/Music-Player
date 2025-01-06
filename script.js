const audio = document.querySelector("audio");
const play = document.querySelector("#play");
const img = document.querySelector("img");
const songName = document.querySelector("#song-name");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let activeSong = false;

const playMusic = () => {
  activeSong = true;
  audio.play();
  play.classList.replace("ri-play-line", "ri-pause-line");
  img.classList.add("rotation");
};

const pauseMusic = () => {
  activeSong = false;
  audio.pause();
  play.classList.replace("ri-pause-line", "ri-play-line");
  img.classList.remove("rotation");
};

play.addEventListener("click", () => {
  activeSong ? pauseMusic() : playMusic();
});

const songs = [
  {
    name: "pull me out of this",
    img: "img-1",
    url: "song-1",
  },
  {
    name: "backseat",
    img: "img-2",
    url: "song-2",
  },
  {
    name: "peace u need",
    img: "img-3",
    url: "song-3",
  },
];

const loadSongs = (songs) => {
  songName.textContent = songs.name;
  audio.src = "./Songs/" + songs.url + ".mp3";
  img.src = "./Assets/" + songs.img + ".jpg";
};

let songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
