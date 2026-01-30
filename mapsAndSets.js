new Set([1,1,2,2,3,4])
Set {1, 2, 3, 4}

[...new Set("referee")].join("")
"refer"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

Map {
  [1,2,3] => true,
  [1,2,3] => false
}

const hasDuplicate = arr => new Set(arr).size !== arr.length;
hasDuplicate([1,3,2,1]); // true
hasDuplicate([1,5,-1,4]); // false

const vowelCount = str => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const map = new Map();

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }

  return map;
};
