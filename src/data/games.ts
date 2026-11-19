import type { ImageMetadata } from "astro";
import moodDude from "../assets/games/mood-dude.png";
import moodDudeInfinity from "../assets/games/mood-dude-infinity.png";
import moodDudeAdventures from "../assets/games/mood-dude-adventures.png";
import tinyLandlord from "../assets/games/tiny-landlord.png";
import tinyLandlordIdle from "../assets/games/tiny-landlord-idle.png";
import tinyLandlordTycoon from "../assets/games/tiny-landlord-tycoon.png";
import bounceCourt from "../assets/games/bounce-court.png";
import cuteShooter from "../assets/games/cute-shooter.png";
import dancyFingers from "../assets/games/dancy-fingers.png";
import trappyFlump from "../assets/games/trappy-flump.png";

export type Game = {
  name: string;
  icon: ImageMetadata;
  /** One sentence, shown wherever the game is listed. */
  summary: string;
  website: string;
  googlePlay: string;
  /** Its App Store address. Left out until the game is live there. */
  appStore?: string;
};

export type GameGroup = { title: string; intro?: string; games: Game[] };

const play = (id: string) =>
  `https://play.google.com/store/apps/details?id=com.eiilo.games.${id}`;

// The name and number at the end of the game's App Store address. There is
// no country in it, so Apple sends each visitor to their own storefront.
const apple = (slug: string, id: number) => `https://apps.apple.com/app/${slug}/id${id}`;

// To add a game: put its icon in src/assets/games, import it above,
// and add an entry to the group it belongs to.
export const gameGroups: GameGroup[] = [
  {
    title: "Mood Dude",
    intro:
      "Colour-switching platformers. The dude can only stand on ground of his own colour, and walks straight through walls that aren’t.",
    games: [
      {
        name: "Mood Dude",
        icon: moodDude,
        summary:
          "The original. He runs on his own, you make him jump and change his mood, through levels built by hand. On the App Store it is called Mood Dude: Color Switch.",
        website: "https://mooddude.app/",
        googlePlay: play("mooddude"),
        appStore: apple("mood-dude-color-switch", 6829543306),
      },
      {
        name: "Mood Dude: Infinity",
        icon: moodDudeInfinity,
        summary:
          "A track that is built as you run and never ends. Every mood switch spends one from your stock, so each change counts.",
        website: "https://mooddude.app/",
        googlePlay: play("mooddudeinfinity"),
        appStore: apple("mood-dude-infinity", 6829543585),
      },
      {
        name: "Mood Dude: Adventures",
        icon: moodDudeAdventures,
        summary:
          "A full platform adventure. Walk, run, climb, swim and stomp across eight island worlds.",
        website: "https://mooddude.app/",
        googlePlay: play("mooddudeadventures"),
        appStore: apple("mood-dude-adventures", 6829543664),
      },
    ],
  },
  {
    title: "Tiny Landlord",
    intro:
      "One weird apartment building, three ways to be its landlord. The ghost in 3B is in all of them.",
    games: [
      {
        name: "Tiny Landlord",
        icon: tinyLandlord,
        summary:
          "Draw a tenant request, swipe to accept or refuse, and watch the consequences compound.",
        website: "https://tiny-landlord.com/",
        googlePlay: play("tinylandlord"),
      },
      {
        name: "Tiny Landlord: Idle",
        icon: tinyLandlordIdle,
        summary:
          "Every tenant runs a racket and every racket is a floor. Take a cut, then hire the cast to run it for you.",
        website: "https://tiny-landlord.com/idle/",
        googlePlay: play("tinylandlord.idle"),
      },
      {
        name: "Tiny Landlord: Tycoon",
        icon: tinyLandlordTycoon,
        summary:
          "A real-time property sim on a hand-drawn city map. Start with one building and end up owning the city.",
        website: "https://tiny-landlord.com/tycoon/",
        googlePlay: play("tinylandlord.tycoon"),
      },
    ],
  },
  {
    title: "Arcade",
    games: [
      {
        name: "Bounce Court",
        icon: bounceCourt,
        summary:
          "Swipe a paddle around a round court, keep an ever-faster ball in play and smash the jelly bricks in the middle.",
        website: "https://bounce-court.com/",
        googlePlay: play("bouncecourt"),
      },
      {
        name: "Cute Shooter",
        icon: cuteShooter,
        summary:
          "Pilot a tiny UFO through +, −, ×2 and ÷2 gates to grow your number, and pop waves of very cute shapes.",
        website: "https://cute-shooter.com/",
        googlePlay: play("cuteshooter"),
      },
      {
        name: "Dancy Fingers",
        icon: dancyFingers,
        summary:
          "A four-lane rhythm game for your thumbs, with forty original synthesized tracks and a composer in your pocket.",
        website: "https://dancy-fingers.com/",
        googlePlay: play("dancyfingers"),
      },
      {
        name: "Trappy Flump",
        icon: trappyFlump,
        summary:
          "A satirical flappy game with towering piles of cash and breaking news that changes the rules mid-flight.",
        website: "https://trappyflump.com/",
        googlePlay: play("trappyflump"),
      },
    ],
  },
];

export const games: Game[] = gameGroups.flatMap((group) => group.games);

// Where to get them, as the end of a sentence ("10 games, …"). Every game is
// on Google Play; the count for the App Store follows the `appStore` fields.
const onAppStore = games.filter((game) => game.appStore).length;
export const stores =
  onAppStore === games.length
    ? "all free on Google Play and the App Store"
    : `all free on Google Play, and ${onAppStore} of them on the App Store too`;
