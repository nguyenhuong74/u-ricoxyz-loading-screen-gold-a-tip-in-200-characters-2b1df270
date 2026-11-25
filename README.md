[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/nguyenhuong74/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/nguyenhuong74/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

# The Spinner Isn't Stuck — Your Agent Is Stalling

> "Tip: the spinner isn't stuck — your AI agent is re-reading the prompt you typed at 2 a.m. and deciding how to tell you it can't do that."

## Why it fits the judge's brief

It is a loading-screen tip, not a slogan: it explains the spinner itself, the thing the reader is staring at mid-build. The laugh comes from the turn — the pause isn't a bug, it's your agent buying time to break bad news about the sloppy prompt you typed half-asleep. Both sides of the audience feel seen at once: the stressed developer recognises their own 2 a.m. prompt, and the AI coding agent is the one caught hesitating. Every word works in a single glance (136 characters), and it dodges the usual coffee, deadline and compile jokes for a fresher target: the awkward silence between a human and their agent.

## Run it

Requires Node 22.18+ (uses Node's TypeScript type stripping, stdlib only):

```sh
node main.ts
```

This validates the tip (1–200 characters, single line, not only whitespace) and writes it to `/output/entry.txt` with no trailing newline. Deterministic: every run produces byte-identical output.
