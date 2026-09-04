import { Hono } from "hono";
import { Avatar } from "@dicebear/core";
import adventurerNeutral from "@dicebear/styles/adventurer-neutral.json" with { type: "json" };
import adventurer from "@dicebear/styles/adventurer.json" with { type: "json" };
import avataaarsNeutral from "@dicebear/styles/avataaars-neutral.json" with { type: "json" };
import avataaars from "@dicebear/styles/avataaars.json" with { type: "json" };
import bigEarsNeutral from "@dicebear/styles/big-ears-neutral.json" with { type: "json" };
import bigEars from "@dicebear/styles/big-ears.json" with { type: "json" };
import bigSmile from "@dicebear/styles/big-smile.json" with { type: "json" };
import blobs from "@dicebear/styles/blobs.json" with { type: "json" };
import botttsNeutral from "@dicebear/styles/bottts-neutral.json" with { type: "json" };
import bottts from "@dicebear/styles/bottts.json" with { type: "json" };
import cameo from "@dicebear/styles/cameo.json" with { type: "json" };
import clay from "@dicebear/styles/clay.json" with { type: "json" };
import constellation from "@dicebear/styles/constellation.json" with { type: "json" };
import critters from "@dicebear/styles/critters.json" with { type: "json" };
import croodlesNeutral from "@dicebear/styles/croodles-neutral.json" with { type: "json" };
import croodles from "@dicebear/styles/croodles.json" with { type: "json" };
import cutouts from "@dicebear/styles/cutouts.json" with { type: "json" };
import disco from "@dicebear/styles/disco.json" with { type: "json" };
import dylan from "@dicebear/styles/dylan.json" with { type: "json" };
import funEmoji from "@dicebear/styles/fun-emoji.json" with { type: "json" };
import gaze from "@dicebear/styles/gaze.json" with { type: "json" };
import glass from "@dicebear/styles/glass.json" with { type: "json" };
import glyphs from "@dicebear/styles/glyphs.json" with { type: "json" };
import icons from "@dicebear/styles/icons.json" with { type: "json" };
import initialFace from "@dicebear/styles/initial-face.json" with { type: "json" };
import landscape from "@dicebear/styles/landscape.json" with { type: "json" };
import lineFace from "@dicebear/styles/line-face.json" with { type: "json" };
import loops from "@dicebear/styles/loops.json" with { type: "json" };
import loreleiNeutral from "@dicebear/styles/lorelei-neutral.json" with { type: "json" };
import lorelei from "@dicebear/styles/lorelei.json" with { type: "json" };
import marbles from "@dicebear/styles/marbles.json" with { type: "json" };
import micah from "@dicebear/styles/micah.json" with { type: "json" };
import miniavs from "@dicebear/styles/miniavs.json" with { type: "json" };
import moods from "@dicebear/styles/moods.json" with { type: "json" };
import notionistsNeutral from "@dicebear/styles/notionists-neutral.json" with { type: "json" };
import notionists from "@dicebear/styles/notionists.json" with { type: "json" };
import openPeeps from "@dicebear/styles/open-peeps.json" with { type: "json" };
import patchwork from "@dicebear/styles/patchwork.json" with { type: "json" };
import personas from "@dicebear/styles/personas.json" with { type: "json" };
import pixelArtNeutral from "@dicebear/styles/pixel-art-neutral.json" with { type: "json" };
import pixelArt from "@dicebear/styles/pixel-art.json" with { type: "json" };
import pixelbot from "@dicebear/styles/pixelbot.json" with { type: "json" };
import planets from "@dicebear/styles/planets.json" with { type: "json" };
import rings from "@dicebear/styles/rings.json" with { type: "json" };
import shadows from "@dicebear/styles/shadows.json" with { type: "json" };
import shapeGrid from "@dicebear/styles/shape-grid.json" with { type: "json" };
import shapes from "@dicebear/styles/shapes.json" with { type: "json" };
import slice from "@dicebear/styles/slice.json" with { type: "json" };
import sprouts from "@dicebear/styles/sprouts.json" with { type: "json" };
import squircles from "@dicebear/styles/squircles.json" with { type: "json" };
import stack from "@dicebear/styles/stack.json" with { type: "json" };
import stripes from "@dicebear/styles/stripes.json" with { type: "json" };
import thumbs from "@dicebear/styles/thumbs.json" with { type: "json" };
import toonHead from "@dicebear/styles/toon-head.json" with { type: "json" };
import triangles from "@dicebear/styles/triangles.json" with { type: "json" };
import voxelArt from "@dicebear/styles/voxel-art.json" with { type: "json" };
import voxelBot from "@dicebear/styles/voxel-bot.json" with { type: "json" };
import waves from "@dicebear/styles/waves.json" with { type: "json" };
import weave from "@dicebear/styles/weave.json" with { type: "json" };

const styles: Record<string, unknown> = {
  "adventurer-neutral": adventurerNeutral,
  adventurer,
  "avataaars-neutral": avataaarsNeutral,
  avataaars,
  "big-ears-neutral": bigEarsNeutral,
  "big-ears": bigEars,
  "big-smile": bigSmile,
  blobs,
  "bottts-neutral": botttsNeutral,
  bottts,
  cameo,
  clay,
  constellation,
  critters,
  "croodles-neutral": croodlesNeutral,
  croodles,
  cutouts,
  disco,
  dylan,
  "fun-emoji": funEmoji,
  gaze,
  glass,
  glyphs,
  icons,
  "initial-face": initialFace,
  landscape,
  "line-face": lineFace,
  loops,
  "lorelei-neutral": loreleiNeutral,
  lorelei,
  marbles,
  micah,
  miniavs,
  moods,
  "notionists-neutral": notionistsNeutral,
  notionists,
  "open-peeps": openPeeps,
  patchwork,
  personas,
  "pixel-art-neutral": pixelArtNeutral,
  "pixel-art": pixelArt,
  pixelbot,
  planets,
  rings,
  shadows,
  "shape-grid": shapeGrid,
  shapes,
  slice,
  sprouts,
  squircles,
  stack,
  stripes,
  thumbs,
  "toon-head": toonHead,
  triangles,
  "voxel-art": voxelArt,
  "voxel-bot": voxelBot,
  waves,
  weave,
};

const styleNames = Object.keys(styles);
const numberOptionKeys = ["size", "radius", "scale"];
const stringOptionKeys = ["backgroundColor", "flip"];

type Bindings = { RATE_LIMITER: { limit: (opts: { key: string }) => Promise<{ success: boolean }> } };
const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
  const items = styleNames
    .map((style, i) => {
      const id = i + 1;
      const href = `/${id}/felix`;
      return `<li><a href="${href}"><img src="${href}" width="80" height="80" alt="${style}"><br>${id} ${style}</a></li>`;
    })
    .join("");
  return c.html(
    `<!doctype html><meta charset="utf-8"><title>AvatarForge</title>` +
      `<ul style="list-style:none;display:flex;flex-wrap:wrap;gap:1rem;padding:0;font-family:sans-serif;text-align:center">${items}</ul>`,
  );
});

app.get("/:id/:seed", async (c) => {
  const ip = c.req.header("CF-Connecting-IP") ?? "unknown";
  const { success } = await c.env.RATE_LIMITER.limit({ key: ip });
  if (!success) {
    return c.text("Too Many Requests", 429);
  }

  const index = Number(c.req.param("id")) - 1;
  const style = styles[styleNames[index]];
  if (!style) {
    return c.text("Unknown style", 404);
  }

  const cache = caches.default;
  const cacheKey = new Request(c.req.url);

  let response = await cache.match(cacheKey);
  if (response) {
    return response;
  }

  const options: Record<string, unknown> = { seed: c.req.param("seed") };
  for (const key of numberOptionKeys) {
    const value = c.req.query(key);
    if (value !== undefined) options[key] = Number(value);
  }
  for (const key of stringOptionKeys) {
    const value = c.req.query(key);
    if (value !== undefined) options[key] = value;
  }

  const avatar = new Avatar(style as never, options);
  response = new Response(avatar.toString(), {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
      "CDN-Cache-Control": "max-age=31536000",
    },
  });

  await cache.put(cacheKey, response.clone());

  return response;
});

export default app;
