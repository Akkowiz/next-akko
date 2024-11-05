export default function getGnomeAudio() {
  const rng = Math.floor(Math.random() * 6) + 1;
  return new Audio(`/DE_GnomeSounds/GnomeMaleZanyGreetings0${rng}.ogg`);
}
