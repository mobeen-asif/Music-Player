const audio = document.querySelector("audio");
const play = document.querySelector("#play");
const img = document.querySelector("img");
const songName = document.querySelector("#song-name");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let progress = document.querySelector(".progress");
let total_duration = document.querySelector("#duration");
let current_time = document.querySelector("#current-time");
const progress_div = document.querySelector(".progress-div");
const songs = [
  {
    name: "pull me out of this",
    img: "./Assets/img-1.jpg",
    url: "./Songs/song-1.mp3",
  },
  {
    name: "backseat",
    img: "./Assets/img-2.jpg",
    url: "./Songs/song-2.mp3",
  },
  {
    name: "peace u need",
    img: "./Assets/img-3.jpg",
    url: "./Songs/song-3.mp3",
  },
  {
    name: "the sun",
    img: "./Assets/img-4.jpeg",
    url: "./Songs/song-4.mp3",
  },
  {
    name: "me (heavy)",
    img: "./Assets/img-5.jpeg",
    url: "./Songs/song-5.mp3",
  },
  {
    name: "these are my friends",
    img: "./Assets/img-6.jpeg",
    url: "./Songs/song-6.mp3",
  },
  {
    name: "loving arms",
    img: "./Assets/img-7.jpeg",
    url: "./Songs/song-7.mp3",
  },
  {
    name: "envelops me",
    img: "./Assets/img-8.jpeg",
    url: "./Songs/song-8.mp3",
  },
  {
    name: "last year",
    img: "./Assets/img-9.jpeg",
    url: "./Songs/song-9.mp3",
  },
  {
    name: "lights out",
    img: "./Assets/img-10.jpeg",
    url: "./Songs/song-10.mp3",
  },
  {
    name: "u don't want 2",
    img: "./Assets/img-11.jpeg",
    url: "./Songs/song-11.mp3",
  },
  {
    name: "better with time",
    img: "./Assets/img-12.jpeg",
    url: "./Songs/song-12.mp3",
  },
  {
    name: "adore u",
    img: "./Assets/img-13.jpeg",
    url: "./Songs/song-13.mp3",
  },
  {
    name: "ten",
    img: "./Assets/img-14.jpeg",
    url: "./Songs/song-14.mp3",
  },
  {
    name: "glow",
    img: "./Assets/img-15.jpeg",
    url: "./Songs/song-15.mp3",
  },
  {
    name: "i've been lost",
    img: "./Assets/img-16.jpeg",
    url: "./Songs/song-16.mp3",
  },
  {
    name: "see yourself in my eyes",
    img: "./Assets/img-17.jpeg",
    url: "./Songs/song-17.mp3",
  },
  {
    name: "strong",
    img: "./Assets/img-18.jpeg",
    url: "./Songs/song-18.mp3",
  },
];

let activeSong = false;
let songIndex = 0;

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

const loadSongs = (songs) => {
  songName.textContent = songs.name;
  audio.src = songs.url;
  img.src = songs.img;
};

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

audio.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;
  let min_duration = Math.floor(duration / 60);
  let sec_duration = Math.floor(duration % 60);
  if (sec_duration < 10) {
    sec_duration = `0${sec_duration}`;
  }
  let max_duration = `${min_duration}:${sec_duration}`;
  if (duration) {
    total_duration.textContent = `${max_duration}`;
  }
  let min_currentTime = Math.floor(currentTime / 60);
  let sec_currentTime = Math.floor(currentTime % 60);
  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTime}`;
  }
  let max_currentTime = `${min_currentTime}:${sec_currentTime}`;
  current_time.textContent = `${max_currentTime}`;
});

progress_div.addEventListener("click", (event) => {
  const { duration } = audio;
  let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = move_progress;
});
loadSongs(songs[songIndex]);
audio.addEventListener("ended", nextSong);
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
