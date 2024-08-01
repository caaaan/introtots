document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/media');
      const mediaData = await response.json();
        console.log(mediaData)
      const mediaContainer = document.getElementById('mediaContainer');
      if (!mediaContainer) return;
  
      if (mediaData.type === 'image') {
        const img = document.createElement('img');
        img.src = mediaData.src;
        mediaContainer.appendChild(img);
      } else if (mediaData.type === 'video') {
        const video = document.createElement('video');
        video.src = mediaData.src;
        video.autoplay = true; // Automatically start playing the video
        video.loop = true; // Optionally loop the video
        mediaContainer.appendChild(video);
      }
    } catch (error) {
      console.error('Error loading media:', error);
    }
  });
  