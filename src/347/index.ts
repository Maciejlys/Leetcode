export default function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  nums.forEach((n) => {
    map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 0);
  });

  const result: number[] = [];

  const sorted = [...map.entries()];
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }

  return result;
}
