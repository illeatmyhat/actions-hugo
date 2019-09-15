[![license](https://img.shields.io/github/license/peaceiris/actions-hugo.svg)](https://github.com/peaceiris/actions-hugo/blob/master/LICENSE)
[![release](https://img.shields.io/github/release/peaceiris/actions-hugo.svg)](https://github.com/peaceiris/actions-hugo/releases/latest)
[![GitHub release date](https://img.shields.io/github/release-date/peaceiris/actions-hugo.svg)](https://github.com/peaceiris/actions-hugo/releases)
[![GitHub Actions status](https://github.com/peaceiris/actions-hugo/workflows/Test/badge.svg)](https://github.com/peaceiris/actions-hugo/actions)

<img width="400" alt="GitHub Actions for Hugo" src="./images/ogp.svg">



## GitHub Actions for Hugo extended and Modules

- [gohugoio/hugo: The world’s fastest framework for building websites.](https://github.com/gohugoio/hugo)



## Getting started

### Create `.github/workflows/gh-pages.yml`

An example workflow with [GitHub Actions for deploying to GitHub Pages with Static Site Generators]

[GitHub Actions for deploying to GitHub Pages with Static Site Generators]: https://github.com/peaceiris/actions-gh-pages

[![peaceiris/actions-gh-pages - GitHub](https://gh-card.dev/repos/peaceiris/actions-gh-pages.svg?fullname)](https://github.com/peaceiris/actions-gh-pages)

![peaceiris/actions-hugo latest version](https://img.shields.io/github/release/peaceiris/actions-hugo.svg?label=peaceiris%2Factions-hugo)
![peaceiris/actions-gh-pages latest version](https://img.shields.io/github/release/peaceiris/actions-gh-pages.svg?label=peaceiris%2Factions-gh-pages)

```yaml
name: github pages

on:
  push:
    branches:
    - master

jobs:
  build-deploy:
    runs-on: ubuntu-18.04
    steps:
    - uses: actions/checkout@master

    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v2.0.0
      with:
        hugo-version: '0.58.2'

    - name: Build
      run: hugo --gc --minify --cleanDestinationDir

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2.3.1
      env:
        ACTIONS_DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: ./public
```



## Options

### Hugo extended

```yaml
- name: Setup Hugo
  uses: peaceiris/actions-hugo@v2.0.0
  with:
    hugo-version: '0.58.2'
    extended: true
```

### Latest version of Hugo

```yaml
- name: Setup Hugo
  uses: peaceiris/actions-hugo@v2.0.0
  with:
    hugo-version: 'latest'
```

**Note**: This action gets a Hugo latest version by GitHub API. Please be aware of [GitHub API Rate limiting]

[GitHub API Rate limiting]: https://developer.github.com/v3/#rate-limiting



## License

- [MIT License - peaceiris/actions-hugo]

[MIT License - peaceiris/actions-hugo]: https://github.com/peaceiris/actions-hugo/blob/master/LICENSE



## About the author

- [peaceiris's homepage](https://peaceiris.com/)
