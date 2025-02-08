---
title: Let me tell you a microservices horror story…
excerpt: The “single responsibility principle” can be useful heuristic, but I’ve also seen it misapplied many times with sometimes disastrous results...
date: 2025-02-01
---

The “single responsibility principle” can be useful heuristic, but I’ve also seen it misapplied many times with sometimes disastrous results. Pair it with an uncritical adoption of microservices and things can end up in a truly horrifying place.

Today I want to tell you about the most egregious example of this I’ve encountered in my career. To spare their blushes, I won’t name the company, and I’ll keep my description of the service vague too.

Some background: the company was in the process of migrating from a monolithic application with a SQL database to a new streaming architecture using Kafka. They were also moving to a completely new programming language. The existing teams had no experience in Kafka, streaming architectures, or the new programming language.

The microservices were designed by an architect who gave the teams detailed specs to implement, so it wasn’t entirely down to the team how things ended up, but it wasn’t entirely down to the architect either.

OK time to describe the microservice. It was a service, let’s call it FooHandler, whose responsibility was to:

• Consume events from a Kafka topic

• Check their “type” field

• If they had a type of “foo”, publish them to a “foo” topic

• If they had a type other than “foo”, do nothing

That’s right. The entire functionality of the microservice boiled down to a single “if” statement. Setting up the microservice, though, required a few hundred lines of code - not to mention the config and infrastructure-as-code needed to deploy it.

Even worse, because the team were new to streaming architectures, they did not yet understand how to deal with at-least-once delivery. In an attempt to turn at-least-once-delivery into exactly-once-delivery, they created a database for the microservice that recorded the ID of every event it had processed. Yep - an “if” statement backed by a database!

What did I learn from this experience? A few things:

• The “single responsibility principle”, misapplied, is responsible for some truly heinous crimes against software

• It is imperative, if you are introducing new technologies, to upskill your team

• New architectures are best kicked off by a small number of very senior engineers, who can create good examples to follow and lay helpful guardrails before bringing on less experienced engineers

• It’s a risky move to introduce a lot of new technologies all at once (see “innovation tokens” described in the "Choose Boring Technology" blog for a good rule of thumb for thinking about this)

And what about the FooHandler service? Well, for all I know, it’s still in production. And the company that created it is doing well. Which leads me to the final thing I learned:

• Companies are resilient things. Often they can take even truly heinous crimes against software in their stride.

Does this mean I should reconsider how important the quality of my code is? No... it’s the [companies] who are wrong.