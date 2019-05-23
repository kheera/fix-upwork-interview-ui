# fix-upwork-interview-ui
Upwork has a massive UI problem where you can click on the side of a modal and the modal is closed and all your work is lost. 

This script fixes the UI problem by coloring the outside of the modal so you know not to click on it.

The accept interview modal on upwork presents as a modal on the left side with a faded background. The modal appears to slide out of the browser on the right side of the screen and remains attached to the right of the screen with the modal background stretching all the way across the screen to the right side of the browser window. I often find myself clicking to the right of the modal, which causes the modal to close. There is no visual indicator to the right of the modal that you are actually clicking on the background - instead the background color makes me think I can safely click on the modal without closing it. 

This creates a really poor user experience where I find myself losing my work.

This is a tapermonkey script which fixes the modal.

Here is a video demonostrating the effect:

https://www.youtube.com/watch?v=_nwshgT6GGk

You'll notice the change just before the 5 second mark.
