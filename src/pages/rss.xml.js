import rss from "@astrojs/rss";
import { games } from "../data/games";

// One item per game, newest first: a feed reader shows a new item when a
// game is added to src/data/games.ts. Games carry no date here, so items
// have none either; the Google Play address identifies each one.
export async function GET(context) {
  return rss({
    title: "eiilo games",
    description: "The mobile games made by eiilo games, all free on Google Play.",
    site: context.site,
    items: [...games].reverse().map((game) => ({
      title: game.name,
      description: game.summary,
      link: game.website,
      customData: `<guid isPermaLink="false">${game.googlePlay.replace(/&/g, "&amp;")}</guid>`,
    })),
  });
}
