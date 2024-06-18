import { useEffect } from 'react';

export default function ShareButtons() {
  useEffect(() => {
    document.getElementById('twitterShare').addEventListener('click', () => {
      window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href));
    });
    document.getElementById('lineShare').addEventListener('click', () => {
      window.open('https://line.me/R/msg/text/?' + encodeURIComponent(window.location.href));
    });
    document.getElementById('copyUrl').addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href);
      alert('URLをコピーしました');
    });
  }, []);

  return (
    <div className="share-buttons-container">
      <button id="twitterShare">Twitterで共有</button>
      <button id="lineShare">LINEで共有</button>
      <button id="copyUrl">URLをコピー</button>
    </div>
  );
}