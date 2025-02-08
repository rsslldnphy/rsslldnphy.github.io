---
title: Why you should write code to be deleted… especially now LLMs exist.
excerpt: I’ve long been of the opinion that it's a bad idea to try to create the perfect, dazzling, scalable, future-proof architecture...
date: 2025-02-05
---

I’ve long been of the opinion that it's a bad idea to try to create the perfect, dazzling, scalable, future-proof architecture. Instead I think you usually get better outcomes by writing code that solves the problem you have now and no more, and writing it with the aim of making it easy to delete. Martin Fowler calls this “Sacrificial Architecture”.

Not only is it much faster to build an app that will scale to thousands of users rather than millions, we’re also just not as good as we might like to think at predicting the future. _Will_ the app’s users scale to millions? If they do, will their usage patterns create the specific bottlenecks we think they will? I’d wager that we - as a discipline - are wrong more times than we’re right, and that’s a lot of wasted work.

It’s also not just about scalability. How many times has a new product feature not landed the way you hoped, and needed significant changes or dropping entirely? It’s much better to find this out quickly before investing a lot of effort.

OK, so you're convinced that writing code that's easy to delete is a good thing. But what does this actually mean? Well, it takes some thought and some discipline, but fortunately the practices you need will be helpful in lots of other ways too.

To be easy to delete, code needs a clear boundary between itself and the rest of the application; it needs to be loosely coupled; and the code for the feature needs to be as localised as possible, rather than spread through many files and intertwined with code for other, unrelated features. A good way to achieve this is to structure your application as vertical slices of functionality.

But what does this have to do with LLMs? Well, I may be wrong about this, so I'd love to hear your opinion, and it may change as models get more advanced, but in my experience so far, I've found LLMs much better at generating new code than at refactoring existing code.

So if you can lop off old code and replace it with a feature generated fresh, my bet is that you'll be able to get good results from LLMs much faster and more consistently.

But there's more: writing code in vertical slices, as localised as possible, means the context you need to understand a feature is smaller and more explicitly scoped. And the less context an LLM needs to complete its task, the better it will perform.

I also think that code quality in general may take a hit as LLM use increases (though I'm less confident of this). A third nice side-effect of writing code to be deleted is that the blast radius of any given change is limited and made explicit. So that dip in code quality might not have as big an impact as it could have.

What do you reckon? Am I on the money? Does your experience match mine? I'm finding it really interesting thinking through the impact LLMs might have on software development, and I'm always keen to hear what predictions other people have too.