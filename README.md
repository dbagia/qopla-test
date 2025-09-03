# Qopla Assignment

This assignment is created from a template. It is a minimal setup to get React working in Vite with HMR and some ESLint rules.

## How to run

```
npm install
npm run dev
```

## Data

This assignment reads products and addon groups stored in files under `src/data`. It does not make any external api calls.

## External Libraries

The solution is implemented in Typescript and does not rely on any additional libraries/frameworks apart from React and Vite. I could have used tailwind but I wanted to demonstrate what I can be achieved using pure CSS.

## The Solution

I have created a main screen showing the menu and space for a cart. Clicking one of products in the menu brings up an Order summary and customisation sheet from the right.

## Limitations

 - It may not be touch friendly
 - I have not put any effort to make it accessible
 - It is partly responsive. I have used rem units and aspect-ratio on the main sheet component

## UX and Error handling

- I could not find more time to work on this aspect. While the functionality works correctly, the system does not inform the user when they have added the maximum allowed number of addons.
- The Order Summary component looks a bit off because of its fixed height. I could not spend more time to come up with a better design
- Colors: I have mostly used shades of gray apart from Variant and Size selection where I have used Green to indicate what is selected
- I couldn't implement consistent and scalable fonts. I believe this could have been easily achieved if I relied on a library or introduced default settings.

## Use of AI

- The solution is entirely handwritten accept for some utility functions in `arrayUtils.ts` and asking AI how to use transform/translate in order to animate the sheet.
