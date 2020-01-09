---
path: "/post-7"
date: "01-09-2020"
title: "9 VS Code Extensions for Web Development"
author: "Matthew Rebehn"
cover_image: "./vsCodeEdit.jpg"
---

# 9 Great VS Code Extensions for Web Development

I have been a professional Web Developer for about 3 years now. I am self-taught and have dabbled in Web technologies for much longer but I considered myself a professional when I started to sell, or provide my services for a fee. Being self-taught, it took a long time to learn as much as I thought I needed to know to provide my services for a fee. The whole impostor syndrome hard at work.

In my travels I have used many editors, with many many different extensions. From full-fledged IDE's to starting out on Notepad ++ and just a plain Windows Text editor. In the beginning I was so lost, starting my coding journey with C and Bucky Roberts, who was a GREAT instructor, the content was just way over my head. I finally bounced around with a few different languages and landed on HTML and CSS to really get something to show up on a page that I could look at outside of the Command Line. That is what had me hooked. Actually seeing a graphical representation of code on the screen. Even if it was just some markup and styling. Then I jumped into JavaScript and never looked back.

As I dive in, keep in mind, these are just a few of the extensions that I find useful in my day to day work. This is not an exhaustive list. In fact, I have over 20 extensions installed, some disabled, at any given time, however these I find I am using day to day and without them, I would be lost.

I will list the extensions, then I will go on to write a little about what each of them do, how I use them, and how they can be useful to Web Developers in general.

The list is not in any specific order.<br/>
My top 9 extensions for Visual Studio Code are:

1. Autoprefixer

2. Bracket Pair Colorizer 2

3. Bookmarks

4. Code Spell Checker

5. GitLens

6. ES7 React / Redux / GraphQL / React-Native Snippets

7. Live Server

8. Import Cost

9. Prettier

   \*_Bonus_ - My Theme is Dark-Cipher, which is my own personal theme. I just recently published it, so check it out too: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Mattaz.dark-cipher).

1 - [Autoprefixer](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer) - I am sure many of you are familiar with what Autoprefixer does, but for those who are not, this tool helps you write CSS. More specifically... browser specific CSS. Autoprefixer parses your CSS and adds vendor specific prefixes to the CSS rules you have defined. For example if you wrote CSS for:

```css
.example {
  display: grid;
  transition: all 0.5s;
  user-select: none;
  background: linear-gradient(to bottom, white, black);
}
```

You will still need to add in the specific vendor prefixes for all the different browsers. This could potentially take a lot of time looking them all up and figuring out what you need to include. In the end it would look something like this:

```css
.example {
  display: -ms-grid;
  display: grid;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(white),
    to(black)
  );
  background: -o-linear-gradient(top, white, black);
  background: linear-gradient(to bottom, white, black);
}
```

Autoprefixer is the answer to this problem. It will do this work for you. The extension can also be set up to work with a specific project or an external Autoprefixer package. It can also be configured to run automatically using [Grunt](https://gruntjs.com) or [Gulp](https://gulpjs.com). The easiest way to use it is, once it is installed, go to your CSS file, press F1 and when the drop-down appears, select the Autoprefixer option and it will add all the prefixes directly to your already written CSS right in VS code.

2 - [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - This is the newest version of the Bracket Pair Colorizer extension in the Marketplace. There is an 'original' version but when you go to the original [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) listing, it informs you: "Announcement: A new version is being developed at [Bracket Pair Colorizer 2](https://github.com/CoenraadS/Bracket-Pair-Colorizer-2)". This is the one I have switched to.

Bracket Pair Colorizer does exactly what the name implies. It allows matching brackets to be identified with colors; matching colors. You can even define what colors to use. This makes it very easy to see scope, in fact some of the options include choosing a border style to highlight active scope. You can also show active scope in the gutter which is how I currently have my settings.

![Screenshot of Code](https://res.cloudinary.com/mattaz/image/upload/v1577668384/Projects/Selection_001_xjmrbl.png)

As you can see in the screenshot, the brackets are in the gutter as well as a line connecting them on the page to make it easier. The brackets' color also matches. This is just the way I set it up and as I said, there are many different ways to do it. This makes reading and even working with the code so much easier since in just a glance, you can see where you are at.

3 - [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) - This extension makes it very easy to navigate a large codebase. You can mark and un-mark positions in your code so you are able to navigate to and from whatever point you set up. Name them and see a list of all the bookmarks you set. It adds an icon to the side bar that when clicked, will show you all the bookmarks. I personally have a few websites from restaurants. They ask me to change their specials frequently, which I have found to be another great use case. I set a bookmark at the start of their specials in the code and that way, anytime I open the project I can go to the sidebar, see all the bookmarks, and navigate right to the spot where their weekly specials are and I change them without having to hunt through the entire index page looking for that spot.

![Screenshot of Bookmarks in Code](https://res.cloudinary.com/mattaz/image/upload/v1577717870/Projects/Selection_002_kszcqu.png)

The screenshot is actually from one of the restaurant projects, with the specials that need to be changed. As you can see there is an icon in my sidebar just for bookmarks, the bookmark is actually able to be given a name, and it shows up in the gutter as well. With a simple cmd/control + shift+ P, then start typing bookmarks, and all the options begin to show up.

4 - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - I am, and always have been, awful at spelling. Sometimes it is so bad that even the spell checker has no suggestions and I have to manually look it up... Luckily for me, and loads of other like me, they make software for spelling. Software that will actually check what you have already written and see if all the words are spelled correctly. Not just in word documents either. This extension is specifically for code projects. In fact, the first line of their listing in the Marketplace is: "A basic spell checker that works well with camelCase code." I know that when I am building a website for a client, I do not want spelling mistakes in it. Especially when it is launched. How many times have you been looking at a website, and stumbled on a misspelled word? Or better yet, you get a website launched, and within a week you have multiple emails from the grammar police about a misspelling on your newly launched website. Embarrassing.

This extension takes care of all those spelling problems. I also really like that you can add custom dictionaries either globally or on a project level. So if you are building a website for an industry with some crazy words you can just add a project level `.txt` file and point your spell checker to that file. Words that are not in the dictionary and misspelled, will have a squiggly underline. The extension will make suggestions as to what the correct word should be. A list of misspellings will also show up in the Problems Console at the bottom of the editor. You can then see the entire list and click on them one by one to be brought directly to the word. You can enable and disable different file types and it can be installed in different languages.

5 - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - This extensions allows you to "Supercharge the Git capabilities built into VS Code". It lets you visualize code authorship, navigate and explore Git repo's, go back through history, and much much more. Here is a small list from their marketplace listing:

1. Current Line Blame
2. Authorship Code Lens
3. Line History View
4. Side Bar Views
   1. Repositories View
   2. File History View
   3. Line History View
   4. Search Commits View
   5. Compare View
5. Gutter Blame - on demand
6. Gutter Heatmap - on demand
7. Recent Changes - on demand
8. Many Powerful Commands
9. User-defined modes to toggle between settings
10. Much Much More!

This is all offered for free too!!! This extension is [open-source](https://github.com/eamodio/vscode-gitlens) and is always looking for any kind of support. If you use Git, you could benefit from this extension.

![Screenshot of GitLens](https://res.cloudinary.com/mattaz/image/upload/v1577816094/Projects/Selection_003_vqxls1.png)

You can see my cursor is on line 172, which shows who made the last changes to that line of code. It was me, 8 months ago and it even includes the Git commit message. If you look at the bottom, you can see the Status Bar Blame. There is so much more to this extension, please check their website at [GitLens](https://gitlens.amod.io/) to see all of what it has to offer.

6 - [ES7 React / Redux / GraphQL / React-Native Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - I use this extension daily. It provides all those snippets we use over and over. For instance, if you start typing `imr` then hit `tab`, it will write `import React from 'react'`. How many times in a project do you actually write that out? I was doing it a lot!

![Insert Snippet](https://res.cloudinary.com/mattaz/image/upload/v1578359719/Projects/imrScreenshot_a9ngih.gif)

The snippets extension offers a lot more than just `imr`. If you check the listing in the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets), there is a list of them. It has everything from 'Basic Methods' to 'React', and 'React Hooks', 'React Native', 'Redux', 'Prop Types', and much more. Simple and short, three to five letter abbreviations that when typed, will trigger useful snippets on `tab`. There is also a feature to search through the snippets by using `cmd/ctr + shift + p` then start typing ES7 and it will pop up.

7 - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - A local development server that has live reload for static and dynamic pages which makes it a very useful tool. It can be used for all different types of files. I use it for my static HTML files. There are a few different ways to start it, but I usually just use the easiest. In VS code, if you go to the Explorer and just right click on an HTML file, an option will come up to open it using Live Server. You can configure what browser it automatically opens it in, and if you don't it will just open it in your default browser. Once it is open, live reload kicks in and you can then make changes to that file and it will be reflected in the browser. When it is running, you can start and stop it in the status bar at the bottom and it features a lot of other options and configurations. I have many projects that I built and still maintain that are not huge Node or Framework projects. Just plain HTML, CSS, and JS. Not even a `package.json` and this [Live Server](https://github.com/ritwickdey/vscode-live-server) is perfect for them.

8 - [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - Displays the size of the package you are importing at the end of the import statement.

![Import Cost](https://res.cloudinary.com/mattaz/image/upload/v1578365149/Projects/importCost_nmohxw.png)

This package was made by the people over at Wix. It is [Open Source](https://github.com/wix/import-cost), and seems to have a pretty active community. Every time you create a component and import a package, it is going to tell you how big it is. I have noticed that some of the packages, and some local packages it will not pick up the size, but generally it gives an excellent idea or estimate of the package size coming in. It makes it easy to track bloat and the potential size of projects. This is important when building projects of any size.

9 - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - The last extension on my list is a great extension called Prettier. This is a popular program and it can be used as a VS Code extension or it can be used in your individual programs with Yarn or NPM. It can also be used both ways and it can be coupled with ES Lint. Prettier is listed on their website as, "An opinionated code formatter". It helps make your code look pretty. It supports many different languages and integrates with just about all the editors out there. It makes it easy to collaborate on projects with multiple authors. Everyone has their own style of writing code. However, when you are working in a large code base you want all your committed code to conform to a specific style. In it's docs it describes Prettier's actions as, "It removes all original styling and ensures that all outputted code conforms to a consistent style."

You are able to define specific rules for your written code. It can then be integrated into your pipeline or even just on save. Once you make a `.prettierrc` file with all of your rules, you can apply them globally or on a project to project basis.

These are some of my favorite and most used extensions. If you have not yet tried [Visual Studio Code](https://code.visualstudio.com/), install it and give a try. You will not be sorry. If you are new to Web Development, be sure to check these extensions out and if you have been doing it for a while and are not using these... consider them too. VS Code has a vast array of different extensions and their [extensions API](https://code.visualstudio.com/api) is very easy to work with. If you have an idea for one, check out how easy it is to integrate.
