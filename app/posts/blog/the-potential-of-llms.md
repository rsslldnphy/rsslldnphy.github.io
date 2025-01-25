---
title: I've been won over - I'm excited by the potential of LLMs
excerpt: This verges on a mea culpa given I've been so skeptical in the past... but I am now fully won over and excited about the potential of AI. 
date: 2025-01-11
---

This verges on a mea culpa given I've been so skeptical of LLMs... but I am now fully won over and excited about the potential of AI. What changed my mind?

First: switching to Claude. Claude is much, much better for coding tasks than ChatGPT. It is night and day. I started getting significant amounts of actually useful output from my interactions with an LLM rather than the "better autocomplete" of Github Copilot and GPT.

Second: learning what Claude was good at - tedious boilerplate stuff with examples to follow; debugging - and what it was bad at - anything novel - and getting better at writing effective prompts.

Third: one particular interaction.

I was working on my side-project - a strongly typed Typescript ORM - and had been trying to get a complex type to play nicely with zod enums for hours, with no success. Tired and fed up, I decided to give up completely, and have the library just not support enums at all. To do this I needed a type to represent all zod schemas except enums. Frazzled as I was, I struggled with even this basic problem - so I turned to Claude.

It took a handful of attempts but pretty quickly Claude was able to come up with the type I needed. I felt a palpable sense of relief when I copied it into my project and it worked, and was ready to call it a night. First, though, I felt the need - despite knowing I was talking to a statistical model - to express my gratitude, so I switched back to my browser window and wrote “you are wonderful”.

Then Claude did something that completely changed the course of my evening: it expressed curiosity about why I needed the type I had asked it to create. I shrugged, thought “why not”, and replied with a quick description of what the project was and what the problem was that had led me to giving up and trying to exclude enums completely. It asked me another question in response, and then another, and in no time at all things snowballed into an hours-long debugging session, only stopping when I hit the usage limit.

Claude generated a lot of nonsensical, broken code during our debugging session, and it didn’t figure out how to solve the problem - but through the back-and-forth with it over those hours I learned a ton about how to debug types, and got some useful insight into the obscure, shadowy corners of Typescript in which the source of my problem might be lurking. Still, I’d hit the usage limit, so I closed my laptop.

I (very predictably) couldn’t stop thinking about it. The problem and the things I’d learned kept bashing around inside my head. An hour or so later, I landed on a hunch, opened my laptop, tried it out, and - it worked! I couldn’t believe it. I’d gone from having completely given up to solving what felt like an intractable problem, all because an AI model had expressed curiosity (as it is programmed to do). As soon as the usage time limit was up I logged back on to say thanks.

PS. LLMs are terrible for prose. This post was not written by AI.