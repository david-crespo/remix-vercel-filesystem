# Testing Remix + Vercel + files

I would like to list a directory and read files from it at runtime.

On `main` is a version that works locally but not on Vercel. See branch [`stuff-tried`](https://github.com/david-crespo/remix-vercel-filesystem/commits/stuff-tried) for a bunch of stuff I tried.

### Update

@maggie-j-liu helped me in the Remix Discord and found that merely adding a _mention_ of this string, not even actually using it for the file read, is enough to make this work:

```
`${__dirname}/../app/content`;
```

See branch [`maggies-fix`](https://github.com/david-crespo/remix-vercel-filesystem/compare/maggies-fix) ([live site](https://remix-vercel-filesystem-om3ppdmbz-david-crespo.vercel.app/)). Unclear whether this is a fact about Remix's configuration or about Vercel. When I run `remix build` with the change, the build output doesn't change, so I suspect it's a fact about Vercel.
