# React-query X Axios

## INSTALLATION

1. Install the Library `npm i react-query`
2. In the root folder, create ajsconfig.json file for absolute imports configuration:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

3. In our `index.js` file, let's wrap our App component with **QueryClientProvider** component from `react-query` to provide **QueryClient** object to our app.

4. Now, let's install _axios_. `npm install axios`

5. Inside the folder called **data** under the _src_ folder, create a file called `constants.js` that contains the code below:

```js
export const REQUEST_TIMEOUT_SECONDS: Number = 30;

export const JSON_PLACEHOLDER_ENDPOINTS: Object = {
  LIST_OF_POSTS: "/post",
};
```

6.
