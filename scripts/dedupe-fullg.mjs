import { writeFileSync } from "fs";

import bl1 from "../data/@digitineguillotine/bl1.mjs";
import bl2 from "../data/@digitineguillotine/bl2.mjs";
import bl3 from "../data/@digitineguillotine/bl3.mjs";
import bl4 from "../data/@digitineguillotine/bl4.mjs";
import bl5 from "../data/@digitineguillotine/bl5.mjs";
import bl6 from "../data/@digitineguillotine/bl6.mjs";
import bl7 from "../data/@digitineguillotine/bl7.mjs";
import bl8 from "../data/@digitineguillotine/bl8.mjs";
import bl9 from "../data/@digitineguillotine/bl9.mjs";

const deduped = new Set([
  ...bl1.userList,
  ...bl2.userList,
  ...bl3.userList,
  ...bl4.userList,
  ...bl5.userList,
  ...bl6.userList,
  ...bl7.userList,
  ...bl8.userList,
  ...bl9.userList
].map(({ user }) => user.uniqueId));

console.log(deduped.size);
writeFileSync('../data/@digitineguillotine/bl-uniqueId-only.json', JSON.stringify([...deduped], null, 2));
