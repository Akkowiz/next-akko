// https://widgets.vendicated.dev/
// for the cool embedding tool

export default function DiscordEmbed() {
  return (
    <div className="w-full aspect-w-16 aspect-h-9">
      <iframe
        id="frame"
        title="Discord User Embed"
        style={{ height: "192px" }}
        // style={{ width: "340px", height: "192px" }}
        className="w-full"
        frameBorder="0"
        sandbox="allow-scripts"
        scrolling="no"
        src="https://widgets.vendicated.dev/user?id=242370610259427328&theme=dark&banner=true&full-banner=true&rounded-corners=false&discord-icon=false&badges=false&guess-nitro=false&"
      ></iframe>
    </div>
  );
}
