type media = {id: number, src: string, duration: number, type: string};
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/media');
      const mediaData = await response.json();
      let mediaIndex = 0;
        console.log(mediaData[mediaIndex])
        const mediaDataArray: media[] = Object.values(mediaData);
        const mediaContainer = document.getElementById('mediaContainer');
        const showMedia = (index: number) =>{

            if (!mediaContainer) return;
            if (mediaDataArray[mediaIndex].type === 'image') {
                const img = document.createElement('img');
                img.src = mediaDataArray[mediaIndex].src;
                mediaContainer.innerHTML = '';
                mediaContainer.appendChild(img);
            } else if (mediaDataArray[mediaIndex].type === 'video') {
                const video = document.createElement('video');
                video.src = mediaDataArray[mediaIndex].src;
                video.autoplay = true; 
                video.loop = true; 
                mediaContainer.appendChild(video);
            }
      
            setTimeout(() => {
                mediaIndex = (mediaIndex + 1) % mediaData.length;
                showMedia(mediaIndex);
            }, mediaData[mediaIndex].duration);
        }
        
        showMedia(mediaIndex);
    } catch (error) {
      console.error('Error loading media:', error);
    }
  });
  