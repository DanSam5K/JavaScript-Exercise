// instead of declaring multiple variable, Creat Objects

let episode = {
    title: 'Dark Beginings',
    duration: 45,
    hasBeenWatched: true
};

// extracting data from episode object using .notation

let episodeTitle = episode.title;
let episodeDuration = espisode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;


//creating a class of objects and also creat new instances.

class Episode {
    constructor(title, duration, hasBeenWatched, minutesWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
//add logic
if(minutesWatched == 0) {
    this.watchedText = 'Not yet watched';
    this.continueWatching = false;
} else if(minutesWatched > 0 && minutesWatched < duration) {
    this.watchedText = 'Watching';
    this.continueWatching = true;
} else{
    this.WatchedText ='Wached'
    this.continueWatching= false;
}

        // if else statement conditions
if (minutesWatched === duration){
    this.hasBeenWatched = true;
 } else{
     this.hasBeenWatched = false;
 }

    }
}

//
let firstEpisode = new Episode('Dark Beginings', 45, true, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, false, 60);
let thirdEpisode = new Episode('The Unexpected Climax', 45, false, 0);

// array of object

let episodes = [firstEpisode, secondEpisode, thirdEpisode]





export  { episodes, episodeTitle, episodeDuration, episodeHasBeenWatched, firstEpisode, secondEpisode, thirdEpisode};

import { episodes } from './database.js';

for (let i = 0; i < episode.length; i++) {
    epsidoes[i].hasBeenWatched = true;
} //or

for (let i in episodes) {
    epsidoes[i].hasBeenWatched = true;
} //or


for (let episode of episodes) {
    epsidoes.hasBeenWatched = true;
}


//create functions and call it

const calculateAverageRating = (ratings) => {
    
    for(ratings.length === 0){
        return 0;
    }
    let sum = 0;
    for (let rating of ratings) {
        sum += rating;
    } 
    const result = sum/ratings.length;
    return results;
}

export { calculateAveragerating };





