# Landing Page Project

first of all hi there i hope you're having a great day

secondly i would like to to talk about my JS code

functions:

populate():
this functions has a for of loop that goes over all the 
sections of the webpage 
And creates an element of type li and stores it inside a variable called listItem then creates another element of type span and stores it inside a variable called anchor then inside the anchor variable I inserted the data-nav attribute from this section as 
a text then I made another dataset called data- anchor and I stored the id of the section  then I added it to the span along with the class menu link from the stylesheet then I appended the anchor to the last item as a child and then I appended the list 
item to then nav bar list as a child 
NOTE( I used span instead of anchor tag because I prefer not to go through the hassle of disabling they href and using anchor without href doesn't make sense to me)

active():
this function  has a variable called scrollPosition that stores the current scroll position at the top of the viewport
then a for of loop that goes over all the section and checks which one is in the view port adds the the active class and removes it from the rest through an If condition 
Note(i added 1 pixel because sometime the scrollTop is off by a fraction of a pixel)

scroll():
i did a lot of research on this one and found a lot of ways to implement it but I came up with a new way to do it from what I learned from the course so far, on the event listener which I used one only for the whole list to improve in performance, the 
event listener passes the target to the scroll function and then the scroll function makes a variable called ID that gets the dataset which I made earlier called data- anchor then I made another variable called scrollToSelection which gets the element by 
ID using the queryselector and the ID variable I made before it then I used the scrollIntoView with the behavior smooth to make it glide


Event listener:
1-uses the DOMContentLoaded event to make sure all the Sections are loaded before calling the populate function 
2-uses click event and event to store the Span that was clicked on and make sure it was a span before passing it to the Scroll function
3- uses Scroll event to update the active class using the active function

Note: this course has been amazing for me and life changing Thank you Udacity team <3
Even though I didn’t make any of the suggested extra requirements due to my Final Exams and being busy I learned a lot of new things doing this project that weren’t in the course 
