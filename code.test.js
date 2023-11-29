const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
dm1 = {};
sol1={};
assert(JSON.stringify(allPairsShortestPaths(dm1)) == JSON.stringify(sol1));

dm2 = {'foo': {}};
sol2 = { foo: { foo: 0}}
assert(JSON.stringify(allPairsShortestPaths(dm2)) == JSON.stringify(sol2));

dm3 = {'foo': {'boo': 7, 'd': 7, 'e': 7, 'bar': 7},
    'boo': {},
    'd': {},
    'e': {},
    'bar': {}};
sol3 = { foo: { foo: 0, boo: 7, d: 7, e: 7, bar: 7 },
  boo: { foo: Infinity, boo: 0, d: Infinity, e: Infinity, bar: Infinity },
  d: { foo: Infinity, boo: Infinity, d: 0, e: Infinity, bar: Infinity },
  e: { foo: Infinity, boo: Infinity, d: Infinity, e: 0, bar: Infinity },
  bar: { foo: Infinity, boo: Infinity, d: Infinity, e: Infinity, bar: 0 } }
assert(JSON.stringify(allPairsShortestPaths(dm3)) == JSON.stringify(sol3));

dm4 = {'foo': {'boo': 7},
    'boo': {'e': 3},
    'd': {'bar': 4},
    'e': {'foo': 1},
    'bar': {'foo': 2}};
sol4 = { foo: { foo: 0, boo: 7, d: Infinity, e: 10, bar: Infinity },
  boo: { foo: 4, boo: 0, d: Infinity, e: 3, bar: Infinity },
  d: { foo: 6, boo: 13, d: 0, e: 16, bar: 4 },
  e: { foo: 1, boo: 8, d: Infinity, e: 0, bar: Infinity },
  bar: { foo: 2, boo: 9, d: Infinity, e: 12, bar: 0 } }
assert(JSON.stringify(allPairsShortestPaths(dm4)) == JSON.stringify(sol4));

dm5 = {'foo': {'boo': 7, 'd': 4},
    'boo': {'e': 3},
    'd': {'bar': 4},
    'e': {'foo': 1},
    'bar': {'foo': 2}};
sol5 = { foo: { foo: 0, boo: 7, d: 4, e: 10, bar: 8 },
  boo: { foo: 4, boo: 0, d: 8, e: 3, bar: 12 },
  d: { foo: 6, boo: 13, d: 0, e: 16, bar: 4 },
  e: { foo: 1, boo: 8, d: 5, e: 0, bar: 9 },
  bar: { foo: 2, boo: 9, d: 6, e: 12, bar: 0 } }
assert(JSON.stringify(allPairsShortestPaths(dm5)) == JSON.stringify(sol5));
