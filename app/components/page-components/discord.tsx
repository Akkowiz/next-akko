// https://widgets.vendicated.dev/
// for the cool embedding tool

export default function DiscordEmbed() {
  return (
    <iframe
      title="Discord User Embed"
      style={{ height: "192px" }}
      className="w-full"
      sandbox="allow-scripts"
      scrolling="no"
      src="https://widgets.vendicated.dev/user?id=242370610259427328&theme=dark&banner=true&full-banner=true&rounded-corners=false&discord-icon=false&badges=false&guess-nitro=false&"
    ></iframe>
  );
}
