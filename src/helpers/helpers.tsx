export function findHashes(text: string) {
  const words = text.replaceAll("\n", " ").split(" ");
  const regrex = /^#[a-zа-я\d_]{2,}$/i;
  const newTags = words.filter((word) => regrex.test(word));
  return newTags.length ? newTags : [];
}
