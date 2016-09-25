---
layout: default
title: Version control
---

# Version control

Execute this command in your projects folder :
* `cp my_plans.txt my_plans.txt.backup`
* `cat /dev/null > my_plans.txt`

Reopen the `my_plans.txt` file. What happened? No! Your file is empty!

## Prevent losing documents

By using version control you can stop losing changes to files

In your planning folder in a terminal window type in `git`. It should be installed on your PC. You should see all the various options & commands `git` have.

## `git` setup

In your `planning` folder type in:

`git status` it should tell you this folder is not a `git` repository
`git init` to create a new local git repository in the `planning` folder
`git status` to see what is going on. You should see some untracked files.
`git add .` to add all the local files into git
`git status` to see what is going on. There should be some files to commit now
`git commit -m ‘initial commit’ ` - to add the files into the local repository

Now repair the damage in the `my_plans.txt` file - put your plans back into the file. We created a backup in a file called `my_plans.txt.backup` after you are happy with the context of `my_plans.txt` delete `my_plans.txt.backup`. Use the `rm my_plans.txt.backup` command.

## Add & commit your changes into git:

`git add .` to add all your changes to git.

`git commit -m ‘put changes back’` - to commit the changes

`git status` should show there is no pending changes or uncommitted files

## Why is it called git:

It's name after it's creator [a grumpy old guy](https://www.quora.com/How-did-Git-get-its-name) - called [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)

## Getting chances back:

Execute this command:

* `cat /dev/null > my_plans.txt` the file should be empty again
* execute `git status` you should see that git realizes that the file changed

To get the contents of your file back type in `git stash` - this move recent changes to your files to the side.

Open `my_plans.txt` - the data from earlier should be in the file

The next step would be to link the local git repository to a remote repository. This way local changes are stored safely in the internet and if things goes wrong previous versions of files can be retrieved. Git is not only for storing your data, but it's main goal is to allow multiple people to work on the same codebase.

## Learn more

Now learn more about git by completing the [git-it]() tutorial.
