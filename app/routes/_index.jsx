import { Link } from '@remix-run/react';
import ShareButtons from '../components/ShareButtons';
import * as shareStyles from '../styles/share.css';
import * as styleStyles from '../styles/style.css';

export const links = () => [
  { rel: "stylesheet", href: shareStyles },
  { rel: "stylesheet", href: styleStyles }
];

export const meta = () => ([
  {
    charset: "utf-8",
    title: "alpha: 俺らゲイ",
    viewport: "width=device-width,initial-scale=1",
    "cache-control": "no-cache, no-store, must-revalidate",
    "pragma": "no-cache",
    "expires": "0",
    "og:title": "俺らゲイ",
    "og:type": "website",
    "og:url": encodeURIComponent("https://alpha.we-are.gay"),
    "og:image": encodeURIComponent("https://media.discordapp.net/attachments/1092295569034203198/1220098537627324456/IMG_5898.png"),
    "og:description": "ゲイの心を大切に。",
    "og:site_name": "俺らはゲイ。道を開けろ",
    "twitter:card": "summary_large_image",
    "twitter:site": "@freewifi_tech",
    "twitter:title": "俺らゲイ",
    "twitter:description": "ゲイの心を大切に",
    "twitter:image": encodeURIComponent("https://media.discordapp.net/attachments/1092295569034203198/1220098537627324456/IMG_5898.png")
  }
]);

export default function Index() {
  return (
    <div>
      <h1>俺らゲイ</h1>
      <div className="thank-you">俺らゲイ</div>
      <ShareButtons />
    </div>
  );
}