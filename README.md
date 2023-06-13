<!-- Title of the project -->

**Web application for demonstrating pedestrian position around the car.**

<!-- Description of the project -->
    This project is made up of web development technologioes like HTML, CSS, JAVASCRIPT.
    In this we first create two semicircles using divs and align them in proper manner using css.
    We made the divs used in making the semicircles clickable and show some text when clicked on it.

    In center of the circles there is a car created using html and css by using div and horizontal lines.
    When a user clicked on the divs some text that is associated with the divs is shown below.

    The project is runs only when it is connected to a server.
    We had created a node js server using web socket and we recieve some message that is sent from the web page.

    On the web page a green button is there that is initially reed in color but when it is connected by the server the color of the button is turned out to be green and a text div is also associated with the div that is initially not connected but later it is changed to connected.

    There is also a reset button on the webpage when it is clicked it disconnects from the server and changes the color of the button to red and text to not connected.

<!-- How to run the project? -->
    You can run the project in vs code using live server extention,and directly by providing  path to the files of the project.

    When the server is turned on  when a user clicks on the div the text associated with each div is sent from the webpage is shown on the server.

<!-- Use of the Project -->

    Eight div are used in creating the concurrent cicles and with each div a unique text is diaplyed on the server.

    The main use of the project in automotive industry is that the outer circle represents the outer boundry of the car at radius of 25cm and the inner circle represents the inner boundry of that car at radius of 15cm.

    When any person is comes in the boundry area an alert is going to the server and notification is displayed on the server.

    When any pedestrian is comes in the inner boundry of car it alerts with the message that someone is around the car at distance of 15cm.

    When any pedestrian is comes in the outer boundry of car it alerts with the message that someone is around the car at distance of 25cm.

The 8 messages displayed on the server when someone is around the car are as follow:

1. v2c front 25cm:- This is displayed when someone at front at distance of 25cm.
2. v2c right 25cm:- This is displayed when someone at right at distance of 25cm.
3. v2c back 25cm:- This is displayed when someone at back at distance of 25cm.
4. v2c left 25cm:- This is displayed when someone at left at distance of 25cm.

5. v2c front 15cm:- This is displayed when someone at front at distance of 15cm.
6. v2c right 15cm:- This is displayed when someone at right at distance of 15cm.
7. v2c back 15cm:- This is displayed when someone at back at distance of 15cm.
8. v2c left 15cm:- This is displayed when someone at left at distance of 15cm.

All this is done with the help of the sensors used in cars and is useful to detect the pedestrian position around the car.

**MOHIT KUMAR**