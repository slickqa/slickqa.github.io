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

Example Usage
-------------

What does a test using this fabulous framework look like?  Let me show you:

```python
from slickwd import BrowserType, Browser, Container, WebElementLocator, Find
from nose import with_setup
from nose.tools import assert_regexp_matches

# Page Classes --------------------------------------------------
class GoogleSearchPage(Container):
    Search_Query_Text_Field = WebElementLocator("Search Box", Find.by_name("q"))
    Search_Button = WebElementLocator("Search Button", Find.by_name("btnG"))

    def is_current_page(self, browser):
        return browser.exists(GoogleSearchPage.Search_Query_Text_Field, timeout=0, log=False)

class SearchResultsPage(Container):
    Results_Div = WebElementLocator("Results Div", Find.by_id("ires"))

    def is_current_page(self, browser):
        return browser.exists(SearchResultsPage.Results_Div, timeout=0, log=False)

# Tests ---------------------------------------------------------
browser = None


def s():
    global browser
    if browser is not None:
        browser.quit()
    browser = Browser(BrowserType.FIREFOX)

def cleanup():
    global browser
    if browser is not None:
        browser.quit()

@with_setup(s, cleanup)
def test_google_search():
    global browser
    browser.go_to('http://www.google.com')
    browser.wait_for_page(GoogleSearchPage)
    browser.click_and_type(GoogleSearchPage.Search_Query_Text_Field, "Slick Test Manager")
    browser.click(GoogleSearchPage.Search_Button)
    browser.wait_for_page(SearchResultsPage)
    assert_regexp_matches(browser.get_page_text(), '.*SlickQA:.*')
```

The test is written so the code can be read, easily modified if something in the page is changed,
and allow for code reuse (page classes).  Normally page classes would be held in a different module
for better organization.  This is what is referred to in the documentation as the "static page class
model".  There is also a different way to structure page classes that allows for nesting of containers
(page classes) to make a hierarchy and enable code completion in IDEs.

