// Embedding profiles is a no-go apparently,
// or atleast firefox default settings won't allow it and
// if you have to tinker with your browser settings to make it visible,
// id rather not use it

const spotifyEmbedUrl = `https://open.spotify.com/user/mdzexa1bk7k9e12miwmfizv5y?si=9eb7bf9d2a7545ab`;

export default function SpotifyEmbed() {
  return (
    <div style={{ width: "100%", height: "380px", marginBottom: "20px" }}>
      <iframe
        src={spotifyEmbedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="encrypted-media"
        style={{ borderRadius: "8px" }}
      ></iframe>
    </div>
  );
}
