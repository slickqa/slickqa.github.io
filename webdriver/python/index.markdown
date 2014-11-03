---
layout: default
title: Slick Webdriver Python
---

The slick-webdriver-python project (source on [github](http://github.com/slickqa/slick-webdriver-python), package available from [pypi](https://pypi.python.org/pypi/slickqa-webdriver))
is a wrapper around the [python webdriver client bindings](https://pypi.python.org/pypi/selenium).  It makes test code 
simpler and more maintainable by providing:

  * Wrapping all actions with log statements (using python's builtin logging framework) that detail everything it's doing
  * Providing a nice readable api, making your tests readable
  * Waiting for elements to exist (with customizable timeout) so that you don't have to
  * Providing a Page api that allows for easy organization of locators
  * Page api allows for flat (Page -> locator) and nested (FrameworkElement -> Page -> Container -> Locator) api
  * No need to instantiate every page class individually (avoiding boilerplate code)
  * Event based api where you can add your own pre and post actions as part of standard calls (like taking a screenshot on click)
  * more good tidbits

