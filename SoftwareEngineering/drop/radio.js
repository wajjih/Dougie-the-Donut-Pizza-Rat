// Create a new JS file and create a Radio object.
// Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. The name property should be a string and the songs property should be an array of song objects.
// Each song object should have two properties: title and artist
// Create a method on your Radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
 
const Radio = {
    stations: [
        {
            name: '1',
            song: {
                title: 'Tyler Herro',
                artist: 'Jack Harlow'
        }
    },   
        {
            name: '2',
            song: {
                title: 'Lose Yourself',
                artist: 'Eminem'
        }
    },
        {
            name: '3',
            song: {
                title: 'Rap Star',
                artist: 'Polo G'
        }
    }
        

 ],
    
    random: function(){
        let chosenStation;
        let check = Math.floor(Math.random()*this.stations.length)
        chosenStation = this.stations[check]
        console.log("Now Playing: " + chosenStation.song.title + ', by ' + chosenStation.song.artist)
    }

}
Radio.random()