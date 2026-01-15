---
name: git-release
description: Create consistent releases and changelogs
license: MIT
compatibility: opencode
metadata:
  audience: maintainers
  workflow: github
---

## What I do

- Draft release notes from merged PRs
- Propose a version bump following semantic versioning
- Provide a copy-pasteable `gh release create` command
- Generate changelog entries in a consistent format

## When to use me

Use this when you are preparing a tagged release.

Ask clarifying questions if the target versioning scheme is unclear.

## Release workflow

1. **Analyze commits** since the last release
2. **Determine version bump** (major, minor, or patch)
3. **Generate changelog** with categorized changes:
   - Breaking Changes
   - Features
   - Bug Fixes
   - Documentation
   - Dependencies
4. **Create release command** with proper tags and notes

## Example output

```bash
gh release create v1.2.0 \
  --title "v1.2.0 - Feature Release" \
  --notes "$(cat CHANGELOG.md)"
```
