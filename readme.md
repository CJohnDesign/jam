# J.A.M. | Join a Metronome

For setup instructions, please see [_build](https://github.com/CJohnDesign/_Build)

## The Problem

**All musicians are out of work!**<br/>
We've seen bedroom livestreams explode in the last 10 days. Bands can play together from the same place but we haven't figured out playing together remotely.  

## The Solution
JAM plays a 4/4 click track that is in sync with all other devices in the world. Pick a tune, play to the click and the audience hears it all happen live.

## How it's built
It is a simple Javascript function. It uses the device's internal clock to keep time.

## Challenges
1) While the tempo is generally perfect, the exact timing varied about 500ms between devices. This was solved with the slider that nudges the track forward or back.  
2) General understanding of the platform. People assumed they could login and join a proverbial jam room. Non-musicians didn't know it was a problem.

## Accomplishments
**It works!**

## Backlog - Phase 1.1
* Converting the audio mechanism to Web Audio which is more precise than the JS `setInterval` used now.
* Get sound working on mobile
* BPM dropdown in top right, giving users the ability to switch tempo without editing the URL
* Landing page + how it works video.
* Enhanced browser support
* Commissioned art for the background
* 3/4 and 6/8 time signatures
* Custom drum kits

## Backlog - Phase 2.0
* Proper integration with a streaming solution
* Automated tempo sync
* Ability to play backing tracks along with musicians or for singer to stay in key. 
* Test general relativity by having one player play from a high-speed train or plane. 
