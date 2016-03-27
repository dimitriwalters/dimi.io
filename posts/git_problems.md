First off, GitHub user [SethRobertson](https://github.com/SethRobertson) created a [guide](http://sethrobertson.github.com/GitFixUm) titled, *"On undoing, fixing, or removing commits in git"*. This is a choose-your-own-adventure style answer to nearly any git problem you can face. It should be in every developer's bookmark.

Along with this resource, I thought I'd share what I think is the perfect workflow for using git in a team. Using feature branches is the first step, but most importantly it is how other people's changes becomes merged. Here is the process, when someone wants to make a PR (pull request), do the following:

```
git checkout master
git pull --rebase
git checkout [feature branch]
git rebase master
```

There will likely be conflicts, this is where the above guide comes in handy. Once the rebase is complete, submit the PR. If the branch looks good, simply `git merge --no-ff [feature branch]` and that completes the workflow - note, the flag stands for "no fast-forward" and is used to force an addition merge commit. This is what I have found works in teams, and it is something I wish I learned earlier in my developer life - so hopefully this makes git a bit easier to work with!
