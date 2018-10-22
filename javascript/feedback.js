var pos = 0;
var quotes = ["Wouldn't change a thing. It's very encouraging to be in an environment where it's safe and comfortable to ask questions about these topics. Thanks again!",
  "I would have liked to have been 1-on-1 with a coach but I'm well aware that's almost an impossibility.",
  "I have no negative feedback for Codebar. I really like the setup of working with new people every time, because I feel every coach has different insights on how to improve. Thank you for the amazing work you all do!",
  "My first experience of programming and I don't think there was room for improvement. Thank you.",
  "Too engrossed in lesson to take notice if there was something I would change.",
  "It was wonderful.  Well structured and organised brilliantly.  Thank you Codebar for making it happen!  And to all the coaches and volunteers out there.",
  "I was genuinely surprised more people didn't want to attend as students. I wonder where the event was communicated",
  "It would be awesome if Codebar could be organized 2 or 3 times a week in the same city. Wishful thinking but we never know... :)",
  "Your all doing an amazing thing by helping us learn coding and I thank you for that.",
  "Really good - no question was too simple to ask and I think I really got to grips with the module. \r\n\r\nIt was really friendly and fun, but I also learnt a lot :)",
  "The workshop was great. I would definitely attend another! It's hard for me to believe that free resources as great as this exist.",
  "Excellent informal, relaxed atmosphere. Very supportive coach who helped with practical application of Python for importing and analysing data sets.",
  "I thought it was excellent. I am a complete beginner and I felt I learnt loads! Thanks so much! ",
  "Had a great time! It motivated me to learn more. ",
  "Very useful. Very good atmosphere, learn so much in so little time, increased self-confidence.",
  "The workshop was really great! Understood and learned many things and solved all the problems I had on my list. It was awesome.",
  "Great atmosphere. Thank you for providing a nice environment to make new friends and learn. I like that it is not so formal. How awesome is it that there was pizza?!",
  "I found it great and learned loads of stuff that you probably couldn't/wouldn't  find in any text book or course.",
  "Very friendly environment, helpful and friendly coach! After the workshop I feel more motivated to learn web development.",
  "Very challenging but excellent, I really enjoyed testing my own knowledge!",
  "Amazing willingness to help and encourage people to dive into the code world!!!"
];

function nextFeedback() {
  document.getElementById('feedback-quote').innerHTML = quotes[pos];
  if (pos < quotes.length-1) {
    pos = pos + 1;
  } else {
    pos = 0
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  nextFeedback();
  setInterval(nextFeedback, 5000);
});
