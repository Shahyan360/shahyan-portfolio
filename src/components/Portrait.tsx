export default function Portrait({ hero = false }: { hero?: boolean }) {
  return <picture><source media="(max-width: 600px)" srcSet="/images/portrait-mobile.webp" /><source media="(max-width: 1024px)" srcSet="/images/portrait-tablet.webp" /><img src="/images/portrait.webp" alt="Muhammad Shahyan Khalid in a navy blazer and glasses" width="900" height="1125" loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : 'auto'} className="portrait-image" /></picture>;
}
