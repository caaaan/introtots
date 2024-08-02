"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('/media');
        const mediaData = yield response.json();
        let mediaIndex = 0;
        console.log(mediaData[mediaIndex]);
        const mediaDataArray = Object.values(mediaData);
        const mediaContainer = document.getElementById('mediaContainer');
        const showMedia = (index) => {
            if (!mediaContainer)
                return;
            if (mediaDataArray[mediaIndex].type === 'image') {
                const img = document.createElement('img');
                img.src = mediaDataArray[mediaIndex].src;
                mediaContainer.innerHTML = '';
                mediaContainer.appendChild(img);
            }
            else if (mediaDataArray[mediaIndex].type === 'video') {
                const video = document.createElement('video');
                video.src = mediaDataArray[mediaIndex].src;
                video.autoplay = true; // Automatically start playing the video
                video.loop = true; // Optionally loop the video
                mediaContainer.appendChild(video);
            }
            setTimeout(() => {
                mediaIndex = (mediaIndex + 1) % mediaData.length;
                showMedia(mediaIndex);
            }, mediaData[mediaIndex].duration);
        };
        showMedia(mediaIndex);
    }
    catch (error) {
        console.error('Error loading media:', error);
    }
}));
//# sourceMappingURL=frontend.js.map