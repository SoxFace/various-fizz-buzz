# Learning Log

The purpose of Learning Log is to document the steps to complete each task in the repo.

As an entry level developer, I have found mastering the developer environment one of the biggest barriers to entry in this field. 

### Getting Started

VS Code is super helpful and runs a wizard to setup a Jest workspace on the entire repo. I am not familiar with workspaces and it created a lot of bloat in the repo, so I opted for a `npm install` in the root folder of relevant projects.

## 1-node

To run the test:
- `jest fizz-buzz.test.js`

### Reflection

I understand the logic behind solving FizzBuzz. Initially, I returned the index as number within a string `"1"`. Once I saw the expected output, I corrected the returning values. The majority of time was spent reversing VS Codes helpfulness in configuring Jest.

## 2-react

### Getting Started

`npm start` resulted in an error: `"error:0308010C:digital envelope routines::unsupported"`

Reviewing github issues presented several solutions and I chose the most well documented and 👍.

`export NODE_OPTIONS=--openssl-legacy-provider`

To run the test:
- `npm fizzBuzz.test.ts`

### Reflection

Probably didn't need to build the frontend for this task. However, good to know it builds.

I also like the explicitness of Typescript and the linting errors are extremely helpful.

## 3-react-php-microservice

### Getting Started

I've never worked with PHP commercially, so my environment is not setup. I installed php using `brew install php` and following the commands on the composer [download page](https://getcomposer.org/download/) 

To run the test:
- `/api composer test`

### Reflection

I tackled the api first. PHP syntax reminds me of C and folder structure of Ruby on Rails. I'm glad this test came with the necessary boilerplate, as I doubt I would have gotten there on my own with PHP within a day.

I had to double check if the output of the test is as expected using the docs, as I've never used phpunit before and while I was there I added a config to add the `-color` flag.

I used error driven development and was guided by the console errors. This led to adding CORS headers for the requests and adding an interface for the data structure to appease the typescript linter. I spent more time than I would like to admin on CSS replicating the `ui-diagram.png`. It reinforced my appreciation for open-source UI frameworks and tools such as Figma.

#### With more time I would...

- write tests for the ui and use field validation instead of alerts
- confirm if you would prefer the app to be dynamic by using local storage instead

### Getting gitted

I forked and forgot to create a branch for this submission. Once I realised I have submitted everything to main 🤦‍♀️! I hitup my favorite git [resource](https://ohshitgit.com/) and resolved the issue. Commands to stash and pop my commits onto the branch:

- git reflog
- git reset --soft acf48a7
- git stash
- git checkout submission/sonya
- git stash pop

As the commits were still on main, I then:

- git reset --hard acf48a7
- git push origin main --force

#### Reflection

Nothing like a self imposed git mess to get your heartrate up. 

Aaaaaand...it's still not right, as all the main commits are on my branch too.
