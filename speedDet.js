// Speed Detector Program
// This program checks the speed of a car and assigns demerit points based on the speed.

// Define a function to check speed
function checkSpeed(speed) {
    const speedLimit = 70;         // The maximum allowed speed in km/s
    const kmPerPoint = 5;          // For every 5 km/s above limit, driver gets 1 point

    // If speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate the number of demerit points
        const points = Math.floor((speed - speedLimit) / kmPerPoint);

        // If driver gets more than 12 points, license is suspended
        if (points > 12) {
            console.log("License suspended");
        } else {
            // Print the number of points accumulated
            console.log("Points: " + points);
        }
    }
}

// Example usage:
checkSpeed(80);   // Expected output: "Points: 2"
checkSpeed(135);  // Expected output: "License suspended"
checkSpeed(70);   // Expected output: "Ok"
