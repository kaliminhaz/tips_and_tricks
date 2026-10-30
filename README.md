# Hackosquad Insecure Demo App

**Training repository — intentionally insecure.**

This public repository is a controlled exercise for learning how accidentally committed secrets can be discovered in source code and Git history.

All credentials and tokens in this repository are **synthetic, nonfunctional training strings**. They do not grant access to any service or system.

## Student mission

You have permission to investigate this repository only:

1. Find the database password exposed in the repository's files or history.
2. Find the demo API key and identify its file.
3. Inspect Git history and identify the commit that first introduced the database password.
4. Find the commit where the developer attempted to remove the exposed value.
5. Explain why deleting a secret from the latest version does not erase it from earlier commits.
6. Record evidence: file path, commit hash, and the relevant line or diff.

## Suggested commands

```bash
git log --oneline --all
git log -p --all
git log --all -- config/database.php
git show <commit-hash>
git grep -n -i -E 'password|api_key|secret|token' $(git rev-list --all)
```

You can also use GitHub's repository search and commit history UI.

## Scope and safety

- Authorized target: this repository only.
- Do not test credentials against any service.
- Do not attempt to access external systems.
- Do not reuse, submit, or publish these training strings as real credentials.
- The strings are deliberately fake and have no associated accounts.

## Important

Removing a secret from the current working tree does not remove it from Git's previous commits. In a real incident, the exposed credential must be revoked or rotated, and repository history may also need remediation.
