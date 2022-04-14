# Memory Game
<img src="./client/src/assets/logo.svg" align="right"
     alt="Memory Game Logo" width="120" height="178">
Memory games give space to critical thinking and that helps children nurture their attention to detail. Memory games can improve visual recognition. With many memory games based on spotting differences, or linking two related images, children improve their visual discrimination.


### [DEMO](https://lucent-taffy-1f2768.netlify.app)

<details><summary><b>Show instructions - <i>Client</i></b></summary>
  
1. Install Modules:
```sh
npm install || yarn
```
2. Init Serve : 
```sh
npm run serve || yarn serve
```
</details>


<details><summary><b>Show instructions - <i>Server</i></b></summary>
  
<i>It's not necessary to start it is online, if it's to test just run the commands below</i>
  
1. Install Modules:
```sh
npm install || yarn
```
2. Set your database connection `MongoDB` in `app.js`
 ```js
      app.use(cors());
      app.options('*', cors());

      mongoose.connect('Your Database Connection');

      mongoose.connection.on("connected", function () {
        console.log("Connected to Database");
      });
  ```

3. Init Serve : 
```sh
npm run start || yarn start
```
</details>
