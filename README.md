# AvatarForge

Deterministic SVG avatars on Cloudflare Workers, generated with [DiceBear](https://www.dicebear.com) — same seed always produces the same avatar.

## Usage

```
GET /:id/:seed
```

`:id` is a style's 1-indexed position (see `/` for the full list with previews). `:seed` is any string (username, email, etc).

```
https://<your-worker>.workers.dev/1/felix
```

Optional query params, forwarded as DiceBear options:

| Param             | Type   |
| ----------------- | ------ |
| `size`             | number |
| `radius`           | number |
| `scale`            | number |
| `backgroundColor`  | string |
| `flip`             | `none` \| `horizontal` \| `vertical` \| `both` |

## Development

```
npm install
npm run dev
```

## Deploy

```
npm run deploy
```
