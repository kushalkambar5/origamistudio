---
name: humanizer
description: Remove signs of AI-generated writing and inject authentic human voice, cadence, and nuance into text. Use when reviewing, editing, or humanizing blog posts, essays, documentation, or technical guides. Based on Wikipedia's AI Cleanup guide and the 24 AI-slop anti-patterns.
---

# Humanizer Skill

A systematic editing methodology to eliminate AI-generated writing tropes, sterile corporate fluff, and formulaic structures, replacing them with authentic voice, dynamic rhythm, grounded opinions, and intellectual vitality.

---

## The Two Halves of Human Writing

1. **Anti-Pattern Eradication**: Eliminating the tells of AI-generated prose (inflated significance, promotional adjectives, trailing `-ing` clauses, weasel attributions, negative parallelisms).
2. **Soul, Rhythm & Voice Injection**: Introducing cadence variation, honest friction, genuine opinions, first/second-person engagement, and tolerance for real-world nuance.

---

## 1. How to Inject Voice and Soul

### Have Grounded Opinions & React to Facts
- **Sterile / Robotic**: "Multi-agent systems consume 4x more tokens than single-prompt architectures, introducing trade-offs between cost and accuracy."
- **Human / Grounded**: "Let’s be honest about the economics here: burning 50,000 tokens on a 3-agent debate to rename a variable is an expensive way to look sophisticated. For 80% of daily coding tasks, a single focused model with a fast compiler loop easily wins."

### Vary Sentence Cadence & Rhythm
- Avoid monotonous medium-length sentences.
- Intermix short, punchy statements with longer, rhythmic analytical sentences.
- Use natural pauses and conversational transitions.

### Acknowledge Complexity and Trade-offs
- Real engineering and business decisions are full of trade-offs. Don't write like a promotional brochure where every tool is "flawless" and "revolutionary."
- Explicitly state when a solution is overkill, where it breaks down, and what maintenance burdens it introduces.

### Use Direct, Natural Framing
- Use "I" or "we" when discussing real engineering experiences or strategic decisions.
- Address the reader directly as "you" when walking through decisions or implementations.

---

## 2. The Humanizer Editing Checklist

When reviewing or rewriting any section:

- [ ] **No Inflation**: Search for and eliminate `"stands as a testament"`, `"pivotal moment"`, `"in today's fast-paced world"`.
- [ ] **No Shallow `-ing` Clauses**: Replace trailing `, showcasing...` and `, highlighting...` with concrete independent sentences.
- [ ] **No Banned Vocabulary**: Check against the banned word list (`delve`, `utilize`, `transformative`, `plethora`, `beacon`, `tapestry`, `groundbreaking`).
- [ ] **No Weasel Words**: Replace `"experts say"` with actual named organizations, authors, or benchmark studies.
- [ ] **No Formulaic Transitions**: Eliminate cookie-cutter headings like `"Challenges and Future Outlook"` in favor of specific topic-driven headers.
- [ ] **Rhythm Check**: Read paragraphs aloud—ensure they flow with natural conversational variation.

For the full catalog of anti-patterns and before/after examples, see [references/slop-patterns.md](references/slop-patterns.md).
