# Property-based Testing Talk

See `index.js` and `index.test.js`.

The commonly useful properties I listed were:
- Doesn't crash.
- Not undefined.
- Test your implementation against a correct one.
- Inverses.
- Idempotence. f(f(x)) = f(x).
- f(g(x)) = f(x)

Most of these are from [this blog
post](https://fsharpforfunandprofit.com/posts/property-based-testing-2/) (and
indeed the first post in the series was the basis for the first example in the
talk). The later few post successors give more explanation and examples. It's in
F#, but this shouldn't really matter.
