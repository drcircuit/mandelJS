var actorMovie = {
    "Leonardo DiCaprio" : "The Revenant",
    "Christian Bale" : "The Dark Knight Rises",
    "Sylvester Stallone" : "Rocky"
};
if(actorMovie){
    var actorMovieArray = [];
    Object.keys(actorMovie).forEach(function(actor){
        actorMovieArray[actor] = function(){
            return {
                Movies: {
                    BestMovie: actorMovie[actor]
                }
            };
        }();
    });
}
console.log(actorMovieArray);

if(actorMovie){
    var actorMovieArray = [];
    Object.keys(actorMovie).forEach(function(actor) {
        actorMovieArray.push(function(){
            return {
                Actor: actor,
                Movies: {
                    BestMovie: actorMovie[actor]
                }
            };
        }());
    });
}
console.log(actorMovieArray);

/**
 * Created by Espen on 3/6/2016.
 */
