# X-Wing-Miniatures-Application

As an avid Star Wars fan, I often game with my friends.  This includes many genres, including Star Wars, and many game types, including RPG and miniatures.  

We use a very large LCD television as a play surface, which allows us to display all kinds of information on our "table".

Quite handy.

One game we play on this surface is [X-Wing] by [Fantasy Flight Games].  We always have a blast.

One challenge, though, on such a big surface, and with so many miniatures, is the placement of all of the pieces you need to check navigation and determine whether an opponent is in your firing arc.  To solve this, I designed this simple web page which, with a little JavaScript and CSS thrown in, which handles a great deal of this.

It starts with a rectangle, which has a firing arc attached to the front.  (This is all to proper scale.)
<img src="arcsm.png" width= 300>

This is dragged with the mouse under the location of the miniature base.  Then, as you can see [here], through some simple CSS and JavaScript, the arc can be rotated to align to the front of the miniature by grabbing the orange squares and dragging the mouse.  Now it is easy to see if another ship is in the firing arc without risking any accidental moving of any miniatures.

To determine movement, there is a handy little console (which can be dragged around as well, to stay out of the way) that can toggle movement paths and destinations from distance 1 to distance 5.  Again, this allows placement of the miniature, accurately, with less risk of moving other pieces.

<img src="Console.png" height=300>


There are some refinements which are needed, namely finer rotation control.  In this iteration, the arc moves in 1 degree increments.  The next iteration will have a solution for smaller increments.  We are ultimately wanting to incorporate a hardware layer, which would use a custom base with WIFI or bluetooth, and a piece to determine orientation.  This would work alongside sensors built into the table, which would detect and relay the position and orientation of the selected base, and the app would automatically move and rotate accordingly.  Eventually, I would like to be able to set the ship and pilot type for each base, and the app would account for additional rear or side firing arcs, and any special movement.

We have a ways to go, but we are excited.

If you would like a live demo, head [here].

[//]: # (These are the links used in the body of this document.)
   [X-Wing]: <https://www.fantasyflightgames.com/en/products/x-wing/>
   [Fantasy Flight Games]: <https://www.fantasyflightgames.com>
   [here]: <http://www.nathanthomas.org/xwing/>
