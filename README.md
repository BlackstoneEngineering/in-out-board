# in-out-board
In/Out board using Bluetooth Low Energy

## Purpose
I wanted a cool way to see who was around in the office. Using bluetooth I get ~50ft range, so even if the person is hidden away in a conference room I know they are in the building. 

## How to use
1. Clone repo
2. install necessary packages with `npm install`
3. run the application with `node app.js` (may require sudo)
  - Note: the computer this is run on needs to have BLE capablilities. I'm using a Raspberry Pi 3.
4. open webpage to `127.0.0.1:8080` 

## Customization
There is a dicitonary in the `app.js` file called `employee`. You will need to populate each employee into this dicitonary.
  - `name` is the employee's name
  - `status` is whether the employee is in or out
  - `mac` is the bluetooth mac address of the employees phone

## pretty picture
![Screenshot](https://github.com/BlackstoneEngineering/in-out-board/blob/master/in-out-board-gif.gif) <br>
This is what the demo looks like when its working.

## Future 
I want to extend this demo to integrate with outlook and skype, so if the employee is out of the offic the board will tell you roughly where in the world they are.

## Liscense
Apache 2.0 . Feel free to re-use it, hack it and otherwise be awsome with it. Make sure to give credit where its due though. 
