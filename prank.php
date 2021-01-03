<?php
$url = 'https://www.mediafire.com/file/lxj23wrd714ofcx/10000000_2597175397045075_5182945097183920128_n.mp4/file';
$content = file_get_contents($url);
$first_step = explode( '<div class="download_link" id="download_link">' , $content );
$second_step = explode("</div>" , $first_step[1] );

echo $second_step[0];
?>
<style>
    video {
        position: absolute;
        width: 100%
        height 100%;
    }
    a {
        display: none;
    }
</style>
<script type="text/javascript">
window.onload = function() {
var link = document.getElementById("downloadButton").getAttribute("href");
document.querySelector("#video").src = '' +link;
}
</script>

 <video width="100%" height="100%" src="" controls id="video" loop autoplay="autoplay">
    </video>