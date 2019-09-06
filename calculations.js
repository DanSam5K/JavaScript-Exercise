import { numberOfSeasons, numberOfEpisodes } from './variables.js';

//calculate totalshowtime

let episodeTime = 45;
let commercialTime = 5;

let totalShowTime = (episodeTime + commercialTime) * numberOfEpisodes *numberOfSeasons;

export { totalShowTime };

