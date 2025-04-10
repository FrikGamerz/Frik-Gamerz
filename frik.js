document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next-btn button'); // Selecting the button inside the div
    const video = document.querySelector('.hero-video'); // Video element

    const movielist = ['videos/minecraft.mp4', 'videos/cartoon.mp4'] // Video list

    let index = 0; // Start with the first video

    if (nextButton && video) {
        nextButton.addEventListener('click', function () {
            index += 1; // Move to the next video

            // Reset index to loop back to the first video
            if (index >= movielist.length) {
                index = 0;
            }

            video.src = movielist[index]; // Update the video source
            video.play(); // Ensure the new video plays automatically
        });
    } else {
        console.warn("Button or video element not found.");
    }
});
