# games.eiilo.com

The eiilo games website: one page that lists every game with its icon, a
sentence about it, and links to Google Play and to the game's own site. It
looks like [eiilo.com](https://eiilo.com) (the `eiilo-com` repository) and
shares its menu.

It is a static site built with [Astro](https://astro.build). `npm run build`
writes plain files to `dist/`, and a GitHub Actions workflow publishes them
to GitHub Pages.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # writes dist/
npm run preview   # serves dist/ as it will be published
```

Node 22.23.4 or later.

## Add or change a game

Everything is in `src/data/games.ts`. To add a game:

1. Put its icon (a square PNG, 192 px or larger) in `src/assets/games/`.
2. Import it at the top of `src/data/games.ts`.
3. Add an entry to the group it belongs to, or add a new group.

The games drift behind the logo. The ones named in `mainGames`, at the top of
`src/pages/index.astro`, are large and sharp; the others are small blurred
blocks further back. Mood Dude is not a block: the dude himself stands there,
hopping and changing mood.

Each game is also an item in the RSS feed at `/rss.xml`, and the page is in
the sitemap at `/sitemap-index.xml`; both are rebuilt on every push.

Check that the Google Play link opens before adding it: a package that isn't
published yet is a 404.

## Files

```
src/data/games.ts       the games, in groups
src/assets/games/       the icons; the build resizes them
src/pages/index.astro   the page
src/pages/rss.xml.js    the feed: one item per game
src/layouts/Base.astro  <head>, top bar, footer; the links go to eiilo.com
src/assets/logo.svg     the eiilo games logo, drawn in 3D in the hero
src/assets/logo-eiilo.svg  the eiilo logo in the top bar, which leads to eiilo.com
src/styles/global.css   the stylesheet
src/scripts/motion.js   pointer-following, card tilt, reveal on scroll
src/components/         logo, 3D logo, drifting products
public/                 copied as is: CNAME, robots.txt, favicon
```

Animations stop for visitors whose system asks for reduced motion; see the
`eiilo-com` README.

`global.css`, `motion.js`, `Logo3D.astro`, `Cubes.astro` and
`src/assets/floaters/` are copies of the ones in `eiilo-com`. When the look of
eiilo.com changes, copy them again.

## Publish

A GitHub Pages site has one custom domain, so this subdomain is its own
repository with its own Pages site. Every push to `main` runs
`.github/workflows/deploy.yml`. To set it up once:

1. In the repository, open Settings > Pages and set **Source** to
   **GitHub Actions**.
2. Under **Custom domain**, enter `games.eiilo.com`. `public/CNAME` holds the
   same name.
3. At the DNS provider, add one record: `games` `CNAME` `<account>.github.io.`
   where `<account>` is the user or organisation that owns this repository.
4. Once the certificate is issued, tick **Enforce HTTPS**.
