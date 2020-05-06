// Represent a post
// curtis@curtisbridges.com

const slugify = require('slugify')

// {
//     slug: <some string>,
//     title: <some string>,
//     author: <some string>,
//     markdown: <markdown formatted string>,
//     html: <sanitized html string>,
//     created: <JS Date>,
//     edited: <JS Date>,
//     draft: <boolean>,
//     tags: <tag JSON?>
// }

class Post {
    slug
    title
    author
    markdown
    html
    created
    edited
    draft = true
    tags = {}

    constructor() {}

    constructor(title, markdown) {
        this.slug = slugify(title)
        this.title = title
        this.markdown = markdown
        this.created = Date.now()
    }
}

module.exports = Post
