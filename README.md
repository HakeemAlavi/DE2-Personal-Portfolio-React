# DE2-Personal-Portfolio-React
My GitHub Pages Repository for React
<br><br>
[hakeemalavi.github.io/DE2-Personal-Portfolio-React](https://hakeemalavi.github.io/DE2-Personal-Portfolio-React/)
<br><br>
### Questions and Answers

1. **What is NPM?**
   - NPM, or Node Package Manager, serves as a pivotal tool in the JavaScript ecosystem. Functioning as a package manager for Node.js, NPM facilitates the installation, sharing, and management of dependencies within a JavaScript project.

2. **What is SPA?**
   - SPA, an acronym for Single Page Application, represents a modern approach to web applications. These applications dynamically rewrite the current page, leveraging technologies such as AJAX and HTML5 to provide users with a seamless and responsive experience without the need to load entire pages from the server.

3. **What is the event loop?**
   - The event loop stands as a foundational concept in JavaScript's design, enabling it to proficiently handle asynchronous operations. This mechanism continuously checks the message queue for events or messages, executing them sequentially. The event loop is instrumental in maintaining JavaScript's non-blocking nature and handling concurrent tasks.

4. **What is the difference between `export x` and `export default x`? How do you import them differently?**
   - The distinction between `export x` and `export default x` lies in their export mechanisms. The former exports a specific module or variable named `x`, while the latter exports a default module or variable `x`. Importing these modules differs: `import { x } from 'module';` for `export x`, and `import x from 'module';` for `export default x`.

5. **Why do you use `className` as a property in React and not `class`?**
   - In React, the utilization of `className` instead of `class` stems from the need to avoid conflicts with the reserved keyword `class` in JavaScript. By using `className` in JSX, React ensures a seamless integration of HTML and JavaScript.

6. **Why should you not write the following? What will happen?**
   ```jsx
   <button onClick={setCounter(counter + 1)}> +1 </button>
   ```
   - This code will not behave as intended since it triggers the `setCounter` function immediately during rendering, rather than upon button click. To address this issue, the correct syntax is:
   ```jsx
   <button onClick={() => setCounter(counter + 1)}> +1 </button>
   ```

7. **What is object deconstruction and how is it connected to React components (example)?**
   - Object destructuring, a feature in JavaScript, facilitates the extraction of properties from objects and assignment to variables. In React, this is commonly employed to extract props efficiently. An example within a React component is as follows:
   ```jsx
   const MyComponent = ({ prop1, prop2 }) => {
     // Utilize prop1 and prop2 here
   };
   ```

8. **How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?**
   - In React components, the JSX (JavaScript XML) syntax permits the seamless integration of HTML and JavaScript. JSX is transpiled into JavaScript using tools like Babel. React employs a virtual DOM to efficiently update the actual DOM, resulting in a cohesive blend of HTML and JavaScript.

9. **What is async/await? Bring an example.**
   - `async/await` constitutes a powerful feature in JavaScript for managing asynchronous code with a syntax resembling synchronous programming. An illustrative example is as follows:
   ```javascript
   const fetchData = async () => {
     try {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };
   ```

10. **What is a Promise? Bring an example.**
    - A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation. Exemplifying its usage:
    ```javascript
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        fetch('https://api.example.com/data')
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    };
    ```
