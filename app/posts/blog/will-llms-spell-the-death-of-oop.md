---
title: Will LLMs spell the death of OOP?
excerpt: I've been thinking recently about what impact LLMs could have on software engineering as a whole...
date: 2025-01-18
---

Will LLMs spell the death of OOP? Yes, and here's why 👇🏻

Ok with the clickbait-y intro out of the way (for which I feel suitably ashamed): I've been thinking recently about what impact LLMs could have on software engineering as a whole. I have some predictions (guesses) that I might write up in another post, but there's one in particular I thought was interesting enough to share on its own.

My hunch: LLMs will perform better with functional rather than object-oriented code. As a result, we’ll see the industry shift away from OOP to FP as LLM use becomes more prevalent.

Why? Because the most crucial thing you can do to get good results from an LLM is to give it the right context, and given a piece of OOP and a piece of FP code, how you figure out what the “right context” is is dramatically different.

With FP code you have a function that takes some inputs, does something with them, and returns some output. The function might call other functions - but if you need to dig into their implementation details you know exactly where to look.

With OOP code you have to understand an object hierarchy: abstract classes, interfaces, subclasses, method overriding… given a piece of OOP code in isolation it is not at all obvious what code a given method call is going to run. Or how to find it without searching through the entire project. Or whether it could actually run different code given different subclasses. And we haven’t even got to mutable state. That’s a lot for an AI model to reason about!

So: FP code, context is local and explicit; OOP code, context is distributed and implicit. FP wins, QED.

However… I did find it a little suspicious that my hunch about what will make code easier for LLMs aligns so neatly with my pre-existing bias as to what makes code easier for humans. I needed an independent, neutral second opinion. So I asked Claude. And he agreed with me (see screenshot). So clearly I am right. 

![Claude agrees that FP is easier for him to work with](/images/blog/will-llms-spell-the-death-of-oop-2.jpg)

Although… there is of course no way for Claude to *know* whether it finds OOP or FP easier. It is just trying to guess the most likely next token. And it is very possible that FP fans (me included) like wanging on about how great their favourite paradigm is more than OOP fans do, so there’s just more of that in its training data.