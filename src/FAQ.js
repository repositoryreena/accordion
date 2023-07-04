import React, { useState, useRef } from "react";
import Accordion from "./Accordion.js";
import "./styles.css";
import lavieenrose from "./lavieenrose.mp3";
import bohemianrhapsody from "./bohemianrhapsody.mp3";
import imagine from "./imagine.mp3";

function FAQ() {

  const lavieenrose2 = `Hold me close and hold me fast
  The magic spell you cast
  This is la vie en rose
  When you kiss me heaven sighs
  And tho i close my eyes
  I see la vie en rose.
  When you press me to your heart
  I'm in a world apart
  A world where roses bloom
  And when you speak, angels sing from above
  Everyday words seem to turn into love songs
  Give your heart and soul to me
  And life will always be la vie en rose.`

  const bohemianrhapsody2 = `Is this the real life?
  Is this just fantasy?
  Caught in a landside,
  No escape from reality
  Open your eyes,
  Look up to the skies and see,
  I'm just a poor boy, I need no sympathy,
  Because I'm easy come, easy go,
  Little high, little low,
  Any way the wind blows doesn't really matter to
  Me, to me
  Mamaaa,
  Just killed a man,
  Put a gun against his head, pulled my trigger,
  Now he's dead
  Mamaaa, life had just begun,
  But now I've gone and thrown it all away
  Mama, oooh,
  Didn't mean to make you cry,
  If I'm not back again this time tomorrow,
  Carry on, carry on as if nothing really matters
  Too late, my time has come,
  Sends shivers down my spine, body's aching all
  The time
  Goodbye, everybody, I've got to go,
  Gotta leave you all behind and face the truth
  Mama, oooh
  I don't want to die,
  I sometimes wish I'd never been born at all.
  I see a little silhouetto of a man,
  Scaramouch, Scaramouch, will you do the Fandango!
  Thunderbolts and lightning, very, very frightening me
  Galileo, Galileo
  Galileo, Galileo
  Galileo, Figaro - magnificoo
  I'm just a poor boy nobody loves me
  He's just a poor boy from a poor family,
  Spare him his life from this monstrosity
  Easy come, easy go, will you let me go
  Bismillah! No, we will not let you go
  (Let him go!) Bismillah! We will not let you go
  (Let him go!) Bismillah! We will not let you go
  (Let me go) Will not let you go
  (Let me go)(Never) Never let you go
  (Let me go) (Never) let you go (Let me go) Ah
  No, no, no, no, no, no, no
  Oh mama mia, mama mia, mama mia, let me go
  Beelzebub has a devil put aside for me, for me,
  For meee
  So you think you can stop me and spit in my eye
  So you think you can love me and leave me to die
  Oh, baby, can't do this to me, baby,
  Just gotta get out, just gotta get right outta here
  Nothing really matters, Anyone can see,
  Nothing really matters,
  Nothing really matters to me
  Any way the wind blows...`

  const imagine2 = `Imagine there's no heaven
  It's easy if you try
  No hell below us
  Above us, only sky
  Imagine all the people
  Livin' for today
  Ah
  Imagine there's no countries
  It isn't hard to do
  Nothing to kill or die for
  And no religion, too
  Imagine all the people
  Livin' life in peace
  You
  You may say I'm a dreamer
  But I'm not the only one
  I hope someday you'll join us
  And the world will be as one
  Imagine no possessions
  I wonder if you can
  No need for greed or hunger
  A brotherhood of man
  Imagine all the people
  Sharing all the world
  You
  You may say I'm a dreamer
  But I'm not the only one
  I hope someday you'll join us
  And the world will live as one`

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);

  const audioPlayerRef1 = useRef(null);
  const audioPlayerRef2 = useRef(null);
  const audioPlayerRef3 = useRef(null);

  const toggleSong1 = () => {
    const audioPlayer = audioPlayerRef1.current;
    if (audioPlayer.paused) {
      audioPlayer.play();
      setIsPlaying1(true);
    } else {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      setIsPlaying1(false);
    }
  };

  const toggleSong2 = () => {
    const audioPlayer = audioPlayerRef2.current;
    if (audioPlayer.paused) {
      audioPlayer.play();
      setIsPlaying2(true);
    } else {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      setIsPlaying2(false);
    }
  };

  const toggleSong3 = () => {
    const audioPlayer = audioPlayerRef3.current;
    if (audioPlayer.paused) {
      audioPlayer.play();
      setIsPlaying3(true);
    } else {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      setIsPlaying3(false);
    }
  };

  return (
    <div>
      <Accordion
        title={
          <div>
            <span>La Vie En Rose</span>
            <button className="play-button button" onClick={toggleSong1}>
              {isPlaying1 ? "Stop" : "Play"}
            </button>
          </div>
        }
        content={<pre>{lavieenrose2}</pre>}
      />
      <Accordion
        title={
          <div>
            <span>Bohemian Rhapsody</span>
            <button className="play-button button" onClick={toggleSong2}>
              {isPlaying2 ? "Stop" : "Play"}
            </button>
          </div>
        }
        content={<pre>{bohemianrhapsody2}</pre>}
      />
      <Accordion
        title={
          <div>
            <span>Imagine</span>
            <button className="play-button button" onClick={toggleSong3}>
              {isPlaying3 ? "Stop" : "Play"}
            </button>
          </div>
        }
        content={<pre>{imagine2}</pre>}
      />

      <audio ref={audioPlayerRef1} src={lavieenrose} />
      <audio ref={audioPlayerRef2} src={bohemianrhapsody} />
      <audio ref={audioPlayerRef3} src={imagine} />
    </div>
  );
}

export default FAQ;
