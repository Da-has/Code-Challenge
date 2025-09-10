# Speed Detector

## Description
The **Speed Detector** program checks the speed of a vehicle and issues demerit points if the speed exceeds the limit.  
If the number of points exceeds 12, the driver's license is suspended.

## How It Works
- If speed ≤ 70 km/s → Output: `"Ok"`
- For every **5 km/s** above 70 → Driver gets **1 demerit point**
- If **points > 12** → Output: `"License suspended"`

## Example
checkSpeed(80);   // Output: "Points: 2"
checkSpeed(135);  // Output: "License suspended"
checkSpeed(70);   // Output: "Ok"
