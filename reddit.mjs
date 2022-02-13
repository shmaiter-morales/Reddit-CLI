#! /usr/bin/env node

import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";

// parse env vars
const { argv } = yargs(process.argv);

const res = await fetch(`https://www.reddit.com/.json`);
const data = await res.json();
const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];
const link = `https://www.reddit.com${randomPost.data.permalink}`;

// log if --print flag is passed
if (argv.print) {
  console.log(`
    title: ${randomPost.data.title}\n
    link: ${link}
    `);
} else {
  open(link);
}
