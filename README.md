# Device Manager Admin Panel

![example workflow](https://github.com/RapidOwl/testy-test/actions/workflows/build-and-test.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cf136d40-5401-4fd1-9143-c3334a198c51/deploy-status)](https://app.netlify.com/sites/bejewelled-biscochitos-421234/deploys)

I've not done React on its own in a while so I used [Create React App](https://github.com/facebook/create-react-app) to get up and running.

## Scripts

After cloning the repository, run `npm install`. You can then:

- Run the application: `npm run start`
- Run the tests: `npm run test`
- Build the application for production: `npm run build`

## What's included

I've tried to include examples of things I'd expect to find in a real world project such as sensible folder structure, automated tests and reasonably sized components.

I've also tried to make the UX nice:

- Using MUI for a consistent experience (and dark mode)
- Tooltips for extra information
- React Router controlling tabs on the device details screen
- Chips for indicating signal quality

Aside from the application itself, I have included

- GitHub actions that build the application and run the tests
- [Netlify deployment](https://bejewelled-biscochitos-421234.netlify.app/) (automatically deployed from main via Netlify's GitHub app)

## Notes

- I named the repository testy-test because I didn't want others to be able to google the solution in the future.
- The test data was old so the next report dates are all in the past.
- The Storage property was missing from API response so I've not included that.
- I chose not to add labels to the device list because they are only available on the secondary request. This would create an N+1 problem for the device list.
- The SIM info wasn't on the endpoint so I added a basic signal strength indicator instead.

## What else could I do?

- The UI could be better (I didn't want to get into the weeds of spacing or type systems for this test)
- I know you expect me to match your designs here, but I could definitely do that
- Add icons highlighting the thresholds for last report time e.g. to show when a device has failed to report in
- Swap useEffect for useSWR to enable caching and revalidation when data is used across the component graph
- Error logging on the client
- Make the UI response
- Improve the loading experience with skeletons and spinners
- Use TypeScript
- Swap React for NextJS or Remix for server side rendering
- Use a Prettier plugin for sorting and grouping imports
- Linting to enable consistency across the team
- A light/dark mode toggle
- Storybook for custom components
- Paging for tables (with support on the API side of things)
- Make the GitHub Action actually deploy instead of Netlify pulling from GitHub for convenience
- The tooltips don't work with keyboard navigation so that would need to be fixed
