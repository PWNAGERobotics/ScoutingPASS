## Things we might want to add someday:

- Provide a config file that lists the team members and a PIN or something. The
  team member enters their "secret" PIN instead of their initials and we do a
  lookup to get the initials. This prevents issue where they enter their
  initials incorrectly either by accident or design. We can store this as simple
  JSON so it can be very easily read by the JavaScript.
- Store "Scouter Initials" or in cookie or local storage so we can just default
  it later or default on refresh of the page. Look into how we manage cookies
  and how we can interact with local storage.
- Include a modified date as part of all scouting match results. We might find a
  use for this later.
- Provide a button that allows us to show a QR code of all scouted matches. We
  can then de-dupe in Excel or whatever software we use to stage the match data.
  We can take the last result for each Match # / Robot combination.
- We should think of a way to save results so we can combine them into a single
  QR code. This would allow us to put off scanning until a shift change or every
  N matches or so. We don't want to lose scouting matches.
- Scouters can earn scouting coins or something which can be redeemded for food
  or prizes. This provides a little but of motivation to help scout matches.
