#!/usr/bin/env node
const print = (data) => console.log(data);
const utils = require("../../Utils");

function test() {
    print("Checking...")
}

const info = {
    name: "kpm",
    description: "KPM is a package manager which helps you to install modules from the internet.",
    version: 1,
    alias: 'kpm',
    author: "wisdomrider",
    dependencies: [],
    email: "avishekzone@gmail.com",
    methods: {
        test: {func: test, args: [], help: [""]}
    }
};
module.exports = info;
