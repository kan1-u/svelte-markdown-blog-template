---
title: Sample Post
author: Kanichi
date: 2022-07-03
description: A sample post introducing some of the markdown features. 😀
---

# Markdown Example

## Heading

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

```markdown
# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading
```

## Horizontal Rules

---

```markdown
---
```

## Emphasis

**bold**

**bold**

_italic_

_italic_

~~strikethrough~~

```markdown
**bold**

**bold**

_italic_

_italic_

~~strikethrough~~
```

## Blockquotes

> Foo
>
> > Bar
> >
> > > Baz

```markdown
> Foo
>
> > Bar
> >
> > > Baz
```

## Lists

Unordered

- Foo A
- Foo B
  - Bar
    - Baz
- Foo C

```markdown
- Foo A
- Foo B
  - Bar
    - Baz
- Foo C
```

Ordered

1. Foo
2. Bar
3. Baz

```markdown
1. Foo
2. Bar
3. Baz
```

## Code

Inline

`inline code`

```markdown
`inline code`
```

Block code

```
block
code
```

````markdown
```
block
code
```
````

Syntax highlighting

```js
console.log('Hello World');
```

````markdown
```js
console.log('Hello World');
```
````

## Tables

| option | left | center | right |
| ------ | :--- | :----: | ----: |
| Foo    | Foo  |  Foo   |   Foo |
| Bar    | Bar  |  Bar   |   Bar |
| Baz    | Baz  |  Baz   |   Baz |

```markdown
| option | left | center | right |
| ------ | :--- | :----: | ----: |
| Foo    | Foo  |  Foo   |   Foo |
| Bar    | Bar  |  Bar   |   Bar |
| Baz    | Baz  |  Baz   |   Baz |
```

## Links

[markdown](https://daringfireball.net/projects/markdown/)

```markdown
[markdown](https://daringfireball.net/projects/markdown/)
```

## Images

![octocat](https://octodex.github.com/images/original.png)

```markdown
![octocat](https://octodex.github.com/images/original.png)
```

## Plugins

### [Mermaid](https://mermaid-js.github.io/mermaid/#/)

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

````markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

### [MathJax](https://www.mathjax.org/)

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are

$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}.
$$

```markdown
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are

$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}.
$$
```
