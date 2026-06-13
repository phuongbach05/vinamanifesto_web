const url = 'https://www.youtube.com/watch?v=bk_dJ5wYeUQ';
let videoId = '';
try {
  if (url.includes('youtube.com')) {
    const urlParams = new URLSearchParams(new URL(url).search);
    videoId = urlParams.get('v');
  } else if (url.includes('youtu.be')) {
    videoId = url.split('/').pop().split('?')[0];
  }
} catch (e) {
  console.error(e);
}
console.log("PARSED VIDEO ID:", videoId);
