// Initialize Firebase
var config = {
    apiKey: "AIzaSyADjDribPiyticZmPUQ5CaiDeKrjr_Jfvk",
    authDomain: "train-schedule-d7aa4.firebaseapp.com",
    databaseURL: "https://train-schedule-d7aa4.firebaseio.com",
    projectId: "train-schedule-d7aa4",
    storageBucket: "train-schedule-d7aa4.appspot.com",
    messagingSenderId: "1136602023"
};
firebase.initializeApp(config);
var trainDB = firebase.database();

// submit button 
$("#submitBtn").on("click", function () {
    var trainName = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    // use moment to format right
    var firstTrain = $("#first-train").val().trim();
    var trainFrequency = $("#train-frequency").val().trim();
});

// push submitted into to firebase

// collect data to fb 

// append to form (use moment to format time)