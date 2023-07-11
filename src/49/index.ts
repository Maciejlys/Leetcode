export default function groupAnagrams(strs: string[]): string[][] {
  let anagrams: Map<string, string[]> = new Map();
  strs.forEach((str) => {
    const sorted = str.split('').sort().join('');
    if (anagrams.has(sorted)) {
      anagrams.set(sorted, [...anagrams.get(sorted)!, str]);
    } else {
      anagrams.set(sorted, [str]);
    }
  });

  return [...anagrams.values()];
}
