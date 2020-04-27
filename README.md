# Blog Engine

My personal blog engine for serving markdown formatted posts and pages.

## Technical Goals:
- Write in markdown. The engine will transform markdown to plain HTML on the fly.
- Engine in node and express.
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
