# React + TypeScript + Vite

Start the project:

1. run in the root folder in the terminal `npm install`
2. start project `npm run dev`

## Resources

- https://react.dev/
- https://reactrouter.com/

- https://www.conventionalcommits.org/en/v1.0.0/
  https://medium.com/neudesic-innovation/conventional-commits-a-better-way-78d6785c2e08
- https://www.npmjs.com/package/eslint-config-airbnb-typescript/
- https://eslint.org/

- https://vitejs.dev/
- https://volta.sh/

- https://sass-lang.com/
- https://stylelint.io/
- https://mui.com/material-ui/
- https://prettier.io/
- https://getbem.com
- https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi

- https://randomuser.me/
- https://www.npmjs.com/package/axios

## Thoughts

App deploy: https://randomsveta.github.io/borderless-test

### What I did

- I implemented:
  - **API call** using axios to get data from https://randomuser.me. Halfway through, I realised that it wasn't the best choice because they don't have an API for getting users by ID. I had to improvise and use a seed with a filter to get it. I was thinking of using state for the React Router location, but using it on a direct link without clicking any candidate card wouldn't work because I can only save data in state from clicking on a card, and using the API, the user is always random.
  - **candidates card list**: Cards don't have the same design because I didn't have all the data.
  - **React routing**: I added a header and footer to allow navigation from the main page to 'About', which is just an empty page with text. It also allows opening a candidate page /candidate/:username. Showing the username is not safe, but with the data I had, it was something unique that's close to an ID.
  - **search**: It's a pretty standard search that adapted a little bit to filter right away without a button using component state.
  - **pagination**: Just standard pagination for 50 results that I get from the API.
  - **React context**: I needed it to keep a link to the API the same. I could have used something different like environment variables or something else.
  - **responsive design**: The app is responsive because I added some media, used flex, and MUI components.
  - **loaders**: When data is in the process of fetching, a loader is in place of fetched data.
  - **tests**: I only added some simple tests because I was running out of time and some of the components had conditional rendering. I need to figure out how to use axios with Jest and React Testing Library.
  - **formatting, ESLint, stylelint, .vscode project etc...**: I prefer to have rules set up for the project.
  - **deploy on GitHub Pages**: They have a weird relationship with React projects, and because of that, I had to change the base routes for the app.

### What could be done

- I can add **useCallback** to optimise React functions even more.
- **filters**
- **styles for an extended candidate card**
- **styles for loaders**: They are not centred.
- **images**: Find images with a bigger resolution. I had to make them small so they wouldn't be too grainy.
- **perfect pixel**: I used the PerfectPixel extension for the top of the website but not for cards because I had different data in them.
- **UX improvements**: I was thinking on commenting on some things that could be improved in design but I think in this task it's just work in progress, and it would be nice who uses the interface, what the most important information for them, and what are the common user stories. I was confused about the second screenshot with extended card, and thought that it might be a popup window, but I didn't see close button, or overlay, so I decided to implement it as a page. Which also could be discussed depending on how users work with the interface. If it's important to stay on list page and open users in the separate window - it should be a page, if not maybe popup would be fine.

- and a lot more...
