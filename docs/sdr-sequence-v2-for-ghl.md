# SDR sequence v2, formatted for GHL

Paste-ready bodies for the Yelp Prospecting Email Campaign in location
`JLycxFbUVQFY3z4zPpCS`. Kevin pastes these himself. Nothing in this repo
modifies, publishes or triggers the live workflow.

Subject lines are unchanged from the current sequence. They earn 40.3 percent
opens across 1,195 sends.

## Read this before you paste: the greeting does not work the way the brief assumed

The brief asks for "the fallback that renders nothing when the first-name field
looks like a company name rather than a person." **A GHL merge fallback cannot
do that.** A fallback fires when the field is EMPTY. When the field contains
"Lilah Landscaping, LLC" it is not empty, so no fallback fires and the greeting
renders exactly as it did before.

There is a second problem. `Hey {{contact.first_name}},` with an empty field
renders `Hey ,` including the comma and the space. A fallback that renders
nothing makes the greeting worse, not better.

Both problems disappear if the comma travels with the name. So the greeting is
a single custom field holding the whole line:

| first_name in the CRM | `greeting_line` holds | Email opens with |
|---|---|---|
| Kevin | `Hey Kevin,` | Hey Kevin, |
| Tyler McAdams | `Hey Tyler,` | Hey Tyler, |
| Lilah Landscaping, LLC | (empty) | the first line of the body |
| VICTOR GASTELUM | (empty) | the first line of the body |
| (empty) | (empty) | the first line of the body |

### Setting it up

1. In GHL, create a contact custom field named **Greeting Line**, type Text.
   Note the merge token it gives you. This document assumes
   `{{contact.greeting_line}}`; use whatever GHL actually shows.
2. Populate it on import. KIREEK computes the value:
   `outbound_gate.greeting(first_name)` returns either `Hey Kevin,` or an empty
   string, using the same company-name detection that blocks the send.
3. Paste the bodies below with the token alone on the first line.

**I could not confirm the exact merge syntax this location uses.** The email
templates in the location are empty starters, and the workflow campaign id in
the brief is a UUID which the campaign endpoint rejects as "must be a mongodb
id", so the live sequence could not be read. `{{contact.first_name}}` is GHL's
standard contact token and is almost certainly right, but **send one test to
yourself before enrolling anyone** and confirm the greeting renders and the
empty case leaves no stray comma.

## Geography

Emails **2, 4 and 5 are identical** in both variants. Only **1 and 3** carry
Phoenix wording, so only those two need a branch.

- Phoenix metro contact: Phoenix variant.
- Everyone else: national variant.
- Unknown city: national. National copy reads fine to a Phoenix business; the
  reverse is the failure this rule exists to prevent.

Every body below was checked by `outbound_gate.geo_violations()`. No national
variant contains "Phoenix", "the valley", or any other Phoenix-only term.

---

## Email 1

**Subject:** Your Yelp ads aren't broken

### Phoenix variant

```
{{contact.greeting_line}}

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
```

### National variant

```
{{contact.greeting_line}}

Most Yelp advertisers I talk to have thought about cutting the ads at least
once. Some months look fine, some look like money disappearing.

Nine times out of ten the ads are not the problem. What happens after the lead
comes in is the problem.

A quote request lands at 7pm while you are finishing a job. You call back three
hours later. That person booked with whoever answered first.

I run Yelp ads for home service companies as a Yelp Premier Partner, and the
piece that actually moves the needle is the response, not the targeting.

Quick question so I know whether this is even relevant to you: are you running
Yelp ads right now?

Kevin
```

---

## Email 2

**Subject:** A lead came in. Then what?

Identical in both variants, no Phoenix wording.

```
{{contact.greeting_line}}

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
```

---

## Email 3

**Subject:** 242 leads. 28 booked by AI.

### Phoenix variant

```
{{contact.greeting_line}}

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
```

### National variant

```
{{contact.greeting_line}}

Real numbers from one of my landscaping clients, no rounding up.

Before: response times over four hours. After: under ten minutes, automatically,
including nights and weekends.

In their first 30 days on the system, 28 estimates were booked without anyone on
their team touching a lead. They closed close to 4 in 10 of those.

Same ad spend. Same market. The only thing that changed was what happened in the
first ten minutes after a lead came in.

Worth seeing what your own numbers would look like? I can put together the same
breakdown for your account. Just say yes and I will pull it.

Kevin
```

---

## Email 4

**Subject:** The follow-up problem nobody talks about

Identical in both variants, no Phoenix wording.

```
{{contact.greeting_line}}

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
```

---

## Email 5

**Subject:** One last thing before I wrap up

Identical in both variants, no Phoenix wording.

```
{{contact.greeting_line}}

I have sent a few of these and you have not replied, which usually means one of
three things. Yelp is working fine for you, you handle leads yourself and it is
covered, or this is not a priority right now.

All three are fair and I will stop after this one.

If it is the second one, the thing worth knowing is that speed beats effort here.
The business that replies in ten minutes beats the business with better reviews
that replies in four hours. That is true whether or not you ever work with me.

If anything changes, I am at 623-300-0708.

Kevin
```

---

## Before any of this is enrolled

1. **The list gate comes first.** These are written for a business that
   currently advertises on Yelp and publishes a response time over one hour.
   Sent to anyone else they fail exactly as the last version did, only now the
   copy is not the excuse. Both signals are captured by a human on the public
   Yelp page and recorded; neither is available from any Yelp API, and browsing
   Yelp programmatically is against their terms and got Kevin's IP blocked on
   2026-07-08.
2. **Clean `first_name` before populating `greeting_line`.** Whatever is wrong
   in that field today is what produced "Hey Lilah Landscaping, LLC Team,".
   `outbound_gate.looks_like_company()` flags them.
3. **Verify addresses.** Bounce is 5.36 percent, target under 3.
   `outbound_gate.deliverable()` adds an MX check, which catches domains that
   resolve but publish no mail exchanger. It does not verify the mailbox
   itself, so it will not get you to 3 percent alone.
4. **Keep sending from viridiaanalytics.com** until aiviridia.com shows real
   inbox placement.
5. **Route replies into GHL** or the reply-rate field reads zero forever.
