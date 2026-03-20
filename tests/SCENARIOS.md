# Test Scenarios

## Smoke Tests

### SM-01 — Data module structure
**File:** `tests/smoke/data.test.ts`
**What:** `src/data/index.ts` exports non-empty arrays of projects, awards, and skills with all required fields.
**Why:** If data is malformed the entire site renders broken cards or throws at runtime.

### SM-02 — Animations module structure
**File:** `tests/smoke/animations.test.ts`
**What:** `src/lib/animations.ts` exports constants with the `hidden`/`visible` shape Framer Motion requires.
**Why:** An animation variant missing `hidden` or `visible` causes a Framer Motion runtime error on every page load.

## Run commands

```bash
# All tests
npm test

# Smoke only (< 30 s)
npm run test:smoke
```
