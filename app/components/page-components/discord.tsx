// https://widgets.vendicated.dev/
// for the cool embedding tool

export default function DiscordEmbed() {
  return (
    <iframe
      title="Discord user embed"
      style={{ width: "340px", height: "192px" }}
      frameBorder="0"
      sandbox="allow-scripts"
      src="https://widgets.vendicated.dev/user?id=242370610259427328&theme=dark&banner=true&full-banner=true&rounded-corners=false&discord-icon=false&badges=false&guess-nitro=false&"
    ></iframe>
  );
}
