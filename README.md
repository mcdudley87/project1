# project1
Demons &amp; Dicerolls


The game started as a sketch on a legal pad and grew into Demons & Dicerolls, 
a tribute to the tabletop RPGs and GameBoy games I've loved since I was a kid.
Also, being an absolute beginner at JavaScript, I wanted a project that I felt 
was within my grasp while also making me use some of the tools that I understood
conceptually if not practically. 

This also tapped into my of writing and design and gave me some room to 
write goofy flavor text and do some simple art and animations (pixelated 
sprites are not mine, those are from Google).

The Rules:

The game is essentially a slot machine game of chance that uses the D20 theme from 
DND and other RPGs. The play begins the game by summoning a demon at random from 
the array of monsters, The Dungeon, by pressing the summon button. This populates the 
HP, flavor text, name, and image of the monster. 

The player presses roll to play. A win gains another roll, a loss loses a roll, 
the game ends when you win with 10 monsters slain or when your lives drop to zero.
Pressing reset does exactly that. 


Process:

1. Started with the layout and CSS. I work visually, so I form a concept
mentally and with sketches first, then get it in the computer. From there,
I am able to better organize the functions and code I need to write. 

2. Next was basic RNG logic and pitting it against monster's health points
which were drawn from an array of monsters, the "Dungeon." Used placeholder
images and animations while working. 

3. Once the system was working with basic visuals, I started making the visuals
and user experience a little sharper. Added music, updated animation, started
concepts of monsters to draw, which may or may not be complete by due date. 

4. Found and resolved a bug where the randomization would pull a monster name
from one object and the health from another. 
  -This bug gave me the idea for a future improvement--to procedurally generate
  monsters with their flavor text and name pulled from an array, and the body
  being divided into 3 separate DIVs, head, body/torso, bottom/legs, that would 
  shuffle to assemble into on monster on button click. We'll get there. 
  

Tools Used:
1. JavaScript
2. HTML
3. CSS
4. Trusty legal pad and ballpoint.

Resources:
1. logo on start screen: https://textcraft.net/
2. GIFs animated by myself compiled with: https://gifmaker.me/
3. Google
4. StackOverflow

