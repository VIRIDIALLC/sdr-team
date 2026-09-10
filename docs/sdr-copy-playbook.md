# SDR sequence, rewrite v2

Subject lines are unchanged. They earn a 40.3 percent open rate across 1,195
sends and there is no reason to touch them. Everything below the subject line is
new.

## What changed and why

**Length.** The originals run 200 to 280 words. These run 90 to 130. Nobody
reading on a phone between jobs finishes the long version, and the open data
says they are opening and then not acting.

**The ask.** Every original ended with a request that requires writing a
paragraph, "reply and I'll send you the breakdown." These end with a question
answerable in one or two words. The bar for replying has to be lower than the
bar for ignoring.

**The greeting.** First name only, title cased, and no greeting at all when the
field does not look like a person's name. Three of the last 84 sends opened with
"Hey Lilah Landscaping, LLC Team," and "Hello VICTOR GASTELUM,".

**Claims.** 39.95 percent becomes "close to 4 in 10." The under 2 minutes claim
is gone, since the approved TFP figure is under 10 minutes and two speed claims
in one sequence is a credibility problem waiting to happen. The 78 percent stat
is gone entirely, replaced with your own numbers, which are better because you
can defend them.

**No em dashes, en dashes, curly quotes or ellipsis characters anywhere.**

**Merge field.** `{{contact.first_name}}` with a fallback that renders nothing.
If the fallback fires, the email opens on its first line, which reads fine.

---

## Email 1

**Subject:** Your Yelp ads aren't broken

Hey {{contact.first_name}},

Most Yelp advertisers I talk to have thought about cutting the ads at least
once. Some months look fine, some look like money disappearing.

Nine times out of ten the ads are not the problem. What happens after the lead
comes in is the problem.

A quote request lands at 7pm while you are finishing a job. You call back three
hours later. That person booked with whoever answered first.

I run Yelp ads for home service companies here in Phoenix as a Yelp Premier
Partner, and the piece that actually moves the needle is the response, not the
targeting.

Quick question so I know whether this is even relevant to you: are you running
Yelp ads right now?

Kevin

---

## Email 2

**Subject:** A lead came in. Then what?

Hey {{contact.first_name}},

Say someone sends you a quote request on Yelp at noon on a Monday. You are on a
job. You see it at 4pm.

By then they have messaged three other companies and booked with whoever replied
first. You still paid for that lead.

That is not a hustle problem. You cannot sit by your phone all day and also run
the work.

Our clients have a system that replies to every Yelp message in seconds,
qualifies the person, and sends them a booking link, so the estimate is on the
calendar before anyone picks up a phone.

How long does it usually take you to get back to a Yelp lead? Ballpark is fine.

Kevin

---

## Email 3

**Subject:** 242 leads. 28 booked by AI.

Hey {{contact.first_name}},

Real numbers from one of my landscaping clients here in the valley, no rounding
up.

Before: response times over four hours. After: under ten minutes, automatically,
including nights and weekends.

In their first 30 days on the system, 28 estimates were booked without anyone on
their team touching a lead. They closed close to 4 in 10 of those.

Same ad spend. Same market. The only thing that changed was what happened in the
first ten minutes after a lead came in.

Worth seeing what your own numbers would look like? I can put together the same
breakdown for your account. Just say yes and I will pull it.

Kevin

---

## Email 4

**Subject:** The follow-up problem nobody talks about

Hey {{contact.first_name}},

Most home service businesses reach out to a lead once. If nobody picks up, that
lead is gone.

The ones winning follow up five to seven times, across text and email, over two
weeks. Not because they are pushier. Because most people are busy the first time
you call and ready the fourth time.

Nobody has time to do that by hand on every lead. That is the whole reason we
automate it.

Out of every ten Yelp leads you paid for last month, how many got more than one
follow up attempt? Most people say one or two.

Kevin

---

## Email 5

**Subject:** One last thing before I wrap up

Hey {{contact.first_name}},

I have sent a few of these and you have not replied, which usually means one of
three things. Yelp is working fine for you, you handle leads yourself and it is
covered, or this is not a priority right now.

All three are fair and I will stop after this one.

If it is the second one, the thing worth knowing is that speed beats effort here.
The business that replies in ten minutes beats the business with better reviews
that replies in four hours. That is true whether or not you ever work with me.

If anything changes, I am at 623-300-0708.

Kevin

---

## Before this goes live

1. **Fix the list first.** These are written for a Phoenix home service business
   that currently advertises on Yelp. Sent to a pest control company in Tulsa
   they will fail exactly like the last version did, only now the copy is not the
   excuse.
2. **Verify emails before sending.** The current bounce rate is 5.36 percent.
   Under 3 is the target, and sustained high bounce eventually costs the
   deliverability you currently have.
3. **Keep sending from viridiaanalytics.com** until aiviridia.com shows real
   inbox placement, then move cold outreach there permanently.
4. **Route replies into GHL,** or accept that the reply rate field will read zero
   forever. Maisa replied to email 1 of the old sequence and the CRM never knew.
