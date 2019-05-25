document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('download').addEventListener("click", function(){
    downloadVideos();
  });
})

async function downloadVideos(){
  let url = 'https://video1.yocoolnet.com/files/mp4/S/G/L/SGLPy';

  let min = parseInt(document.getElementById('min').value);
  let max = parseInt(document.getElementById('max').value);

  for(let i = min; i <= max; i++){
    let finalUrl = url + i + '.ts';
    let popout = window.open(finalUrl);
    popout.setTimeout(function(){
      popout.close();
    }, 350)
    await pause(350);
  }
}

function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}