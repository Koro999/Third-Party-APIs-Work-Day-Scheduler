// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  var currentTimeHour = dayjs().format('H') //pulls the current hour 
  const workHours =[9,10,11,12,13,14,15,16,17] //hours of the usual work days
  
  for (let index = 0 ; index < workHours.length; index++) { //set colors od boxes depending on time of day
    console.log(workHours[index])
    if (currentTimeHour == workHours[index]){ // if the current time is equal to the work hour show present 
      $("#hour-" + workHours[index])
        .addClass('present');
    }
    else if (currentTimeHour > workHours[index]){ //if the current time is more than the work hour show past 
      $("#hour-" + workHours[index])
        .addClass('past');
    }
    else if (currentTimeHour < workHours[index]){ //if the current time is less than the work hour show future 
      $("#hour-" + workHours[index])
        .addClass('future');
    }
    
  }

  })
  
  //Display the current date in the header of the page.
  var currentDay = $("#currentDay");
  currentDay.text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));

