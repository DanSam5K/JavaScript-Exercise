class Show{
    constructor(title, numberOfseasons) {
        this.title = title;
        this.numberOfSeasons = numberOfSeasons;
        this.ratings = [];
        this.averageRating = 0;
    }
    addRating(rating) {
        this.rating.push(rating);
        let sum = 0;
        for (let rating of this.rating) {
            sum += rating;
        } 
        this.averageRating = sum / this.ratings.length;
    }
} 

export { show };

