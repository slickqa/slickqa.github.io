---
layout: default
title: About Slick
---

History
=======

Slick was born out of frustration with commercial software quality assurance tools.  The tools were rigid and tied to
a very strict waterfall process.  They also were written with the goal to limit what an individual tester could do.
While this is admiral from a security point of view, it made making progress in using the tool slow.  Every time
the tester wanted to add a build, start a testrun, or anything else they had to file a ticket to get the administrator
involved.

Another major problem was integration.  The company that made the test management tool also made their own automation
tools.  This meant that those tools worked great with it, but nothing else did.  They claimed to have a great "open api"
but it was a slow, clunky, overly complicated SOAP api, and finding documentation was next to impossible.

Then came web testing
---------------------

When the group of testers responsible for slick started doing web testing, we found the best tools were not the
commercial ones.  [Selenium or Webdriver](http://www.seleniumhq.org) were far better and updated quicker for new
browsers.  They were also free and easy to use with large helpful communities.  Integrating selenium with those
commercial test management apps was somewhere between difficult and impossible.

Agile was too quick
-------------------

We were using agile development methods, which meant that as a QA organization we couldn't spend precious valuable time
fiddling with a test management tool.  All we wanted it for was to show our test results, give the managers their pretty
graphs that they so desperately needed.  We had to be quick, writing automation quickly, and didn't have time to
spend managing an application.

Then the manager came and said "How long would it take to do a quick and dirty php page that saves results to a
database?"  I wasn't a fan of php, and I hated quick and dirty hacks.  Seeing the potential for a simple, but extendable
and maintainable webapp, I pulled up my IDE and started coding.  The legend goes that it was written in one weekend.
It probably took 3-4 days.  The webapp only managed one project, and it just had a list of testruns, and those were
just reports of pass/fail and a graph.  It didn't keep track of history or anything else.  It was small and simple,
but it did the job.

Success means a rewrite
-----------------------

Although it wasn't quick and dirty hack, it wasn't a full test management app either.  Eventually we needed more
and the managers wanted more than one graph.  I had a strong belief in throwing away code that no longer fits, so I
rewrote it in a different language and different tools.  That didn't last long as more people wanted to help and
the code wasn't "pretty" yet.

Rewrite after rewrite
---------------------

We call this slick version 3, but it might be version 5 or 6.  I lost count.  Now it's based on angularjs, mongodb,
and I use python for the REST services.  Will it change in the future?  I would bet on it.  The community is growing
and I want it to grow much bigger, so now I'm most concerned with making upgrades that are easy on everyone.
