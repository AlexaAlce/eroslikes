/// Random Videos Script
var videos = [
    "https://drive.google.com/u/0/uc?id=1WWX2rpcHq3lZ6j4owzOz6wg5dH5KIEpq&export=download",
    "https://drive.google.com/u/0/uc?id=1yV7USTBTcHzE2cDK-x0y0B4f5m1fdwj3&export=download",
    "https://drive.google.com/u/0/uc?id=1H8hOFW-eQLRAl8sj0TJ9CRF7_P95S5b4&export=download",
    "https://drive.google.com/u/0/uc?id=1NGCokoiiYN3T5oj7DyAYIYwfJ4ssu1gv&export=download",
    "https://drive.google.com/u/0/uc?id=1umNBlfBLanaE1wqZxPzeOXLmdaby96Yw&export=download",
    "https://drive.google.com/u/0/uc?id=1Rtj8bioEfIEjHTDEYD6nKVqJ5XCs136-&export=download",
    "https://drive.google.com/u/0/uc?id=1_2eaQoluUQT6fxr0Niribh-XVNJ79aOY&export=download",
    "https://drive.google.com/u/0/uc?id=1R_BxViTr9W71DHTvpHJCissUG5fgaO3v&export=download",
    "https://drive.google.com/u/0/uc?id=1mI3Z2PUlLyTh4Q43t5BuCbVVesAxNaZY&export=download",
    "https://drive.google.com/u/0/uc?id=1LikdXnmha7o9EVQbyU7Ug91UV7sZOEb8&export=download",
   	"https://drive.google.com/u/0/uc?id=1-zsTjl49qxjcvhbjrssaJk1RrRjEaepE&export=download",
  	"https://drive.google.com/u/0/uc?id=1K0pC_IcnCEiyuOV3PAGvcUj6GHE8aZYH&export=download",
    "https://drive.google.com/u/0/uc?id=1aB6b1brQGO-wLrKISOaq5oq48vhXi2Rz&export=download",
    "https://drive.google.com/u/0/uc?id=1yz8aB73AkHnaxMXwKb1IC79OAuOJ5hX6&export=download",
    "https://drive.google.com/u/0/uc?id=1boXibdNecZOY8DXPlEZ2wqBVBumi3OLz&export=download",
    "https://drive.google.com/u/0/uc?id=1qhBp_ULUjrIW3dAWddGMzskt9syFT29-&export=download",
    "https://drive.google.com/u/0/uc?id=1q1-COTL7ObB2T85mkr57vk3zUrWO8yI9&export=download",
    "https://drive.google.com/u/0/uc?id=1M3JoQE9HtT4-OXnfJfFgu1xJ1LhyN0Pv&export=download",
    "https://drive.google.com/u/0/uc?id=1JGtRMorVuvfJ50WKPYc0EPJ1ct1wIyZt&export=download",
    "https://drive.google.com/u/0/uc?id=1r6BUuKfKSxAXRa6J3iy5ubLnD88e5dca&export=download",
    "https://drive.google.com/u/0/uc?id=1939qrZgtzMgHCdbjRSp3AZZ4Y6COcTdV&export=download",
  	"https://drive.google.com/u/0/uc?id=1cphIu-HJ-_0SYTR9u9dTKc6DZklfHBWR&export=download",
    "https://drive.google.com/u/0/uc?id=1f7h2OzToPKvVNLeFE3fsZGT1sWgAfYTs&export=download",
    "https://drive.google.com/u/0/uc?id=1emRKQIJ-xUxYMgKbfLP8gOCPZGARVnBD&export=download",
    "https://drive.google.com/u/0/uc?id=16Ve7opexGXEKCSf1ulWwVqj19izcOXIW&export=download",
    "https://drive.google.com/u/0/uc?id=1Rhye-tk9a5eAsE8YW0r4yZH4iSuOIO08&export=download",

];
var playedVideos = [];

var videoId = getRandomInt(1, 19);
var elemVideo = document.getElementById('video');
elemVideo.setAttribute('src', '' + videos[videoId]);
var btn = document.getElementById('playRandom');

btn.addEventListener('click', playRandom);

function playRandom(e) {
    var nextId = getRandomInt(0, 26);

    if (nextId != videoId) {
        if (!playNext(nextId)) {
            playRandom(e);
        }
    } else {
        while (nextId == videoId) {
            nextId = getRandomInt(0, 26);
        }

        if (!playNext(nextId)) {
            playRandom(e);
        }
    }
}

/* gets random whole number between 0 and 9 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playNext(id) {
    // checks if the video has already been played
    for (var src in playedVideos) {
        if (src == videos[id]) {
            return false;
        }
    }

    elemVideo.setAttribute('src', '' + videos[id]);
    elemVideo.play();

    // adds src to arr of played videos
    playedVideos.push(videos[id]);

    /*
     * Everything from here on is optional depending on whether you want to
     * - iterate over the arr of videos and play each videos at least once before starting over or
     * - you want to stop playing videos after playing each at least once
     */

    // empties the played videos arr and allows you to start playing a new set of random videos
    if (playedVideos.length() == 26) {
        playedVideos = []; 
        // if you'd like to stop playing videos altogether at this, point delete the previous statement and display a prompt saying the playlist is over
        // or if you'd like to reset the playlist, then remove the event listener ('playRandom') and display a reset button that starts everything over from the beginning.
    }

    return true;
}

/// Open cam ///////////
document.querySelector('#play-button').onclick = function() {
  document.querySelector("#webcam1").style = "display: inline-block;"
    video.play();
  };
  
  //// Close Cam ///////
  document.querySelector('#stop-button').onclick = function() {
  document.querySelector("#webcam1").style = "display: none;"
    video.pause();
    localMediaStream.stop();
  };
  
  ///// Stop searching parthners //////
      function stopbut() {
        document.querySelector("#video").src = "https://video.twimg.com/ext_tw_video/1344029915331645446/pu/vid/400x400/K1jflDV5PWf6IxFZ.mp4"
    }
    
    /// Stream Webcam (only in your browser)//////
    const constraints = {
  video: true,
};


const video = document.querySelector("#webcam1");

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream;
});

////////// Volume Bar /////////////////
    function SetVolume(val)
    {
        var player = document.getElementById('video');
        console.log('Before: ' + player.volume);
        player.volume = val / 100;
        console.log('After: ' + player.volume);
    }
    ///////////////////// Autoclick button at start ///////////////////
      jQuery(function(){
   jQuery('#stop').click();
});
