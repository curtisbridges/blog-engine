# Blog Engine

My personal blog engine for serving markdown formatted posts and pages.

## Technical Goals:
- Write in markdown. 
    - The engine will transform markdown to plain HTML on the fly. Pretty URLs support.
    - Markdown files can be requested directly by using .md on slug.
- Engine in node and express.
    - EJS???
- Have authentication which will allow some basic online administration.
    - create/edit/delete pages and posts
    - capture and display stats on views (server-side capture only)
- Runnable against a filesystem such that the data can be backed up to source control.
- Searchable
- Uses tags
- Docker deployable
- Deploy to cloud service (AWS or Linode)

## Non-technical Goals
- Serve as a good portfolio item
- Usable for my personal blog
- Becomes a platform where I make posts for developer posts


## Routes

- / --> base URL
- /admin --> All administration
    - /users --> CRUD for user creation. Seeded with admin
    - /pages --> CRUD for pages
    - /posts --> CRUD for posts
    - /tags --> CRUD for tags
    - /stats --> Read-only stats (blog stats and client stats)

## MongoDB

### Post Schema
{
    slug: <some string>,
    title: <some string>,
    author: <some string>,
    markdown: <markdown formatted string>,
    html: <sanitized html string>,
    created: <JS Date>,
    edited: <JS Date>,
    draft: <boolean>,
    tags: <tag JSON?>
}

### Page Schema
{
    name: <unique string>,
    markdown: <markdown formatted string>,
    html: <sanitized html string>,
    created: <JS Date>,
    edited: <JS Date>,
    draft: <boolean>,
    tags: <tag JSON?>
}

### Backup and Restore
- [Official Docs](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/)
- [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-back-up-restore-and-migrate-a-mongodb-database-on-ubuntu-14-04)
