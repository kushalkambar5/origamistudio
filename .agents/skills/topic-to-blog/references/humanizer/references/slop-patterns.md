# AI-Slop Anti-Patterns Catalog & Rewrite Guide

This catalog documents the 24 common anti-patterns that make text read as machine-generated, along with concrete before-and-after rewrites.

---

## 1. Structural Slop Anti-Patterns

### Anti-Pattern 1: Significance Inflation & Grandiose Posturing
- **Tells**: `"stands as a testament"`, `"marks a pivotal moment"`, `"underscores the importance"`, `"in the ever-evolving landscape"`, `"serves as a reminder"`, `"plays a crucial role"`
- **Why it's slop**: LLMs habitually puff up simple facts into epochal milestones.
- **Before**: *The adoption of TypeScript was a pivotal moment in the company's engineering history, standing as a testament to their unwavering commitment to code quality.*
- **After**: *The team migrated to TypeScript in 2021 to catch type errors during compile time.*

---

### Anti-Pattern 2: Shallow Trailing `-ing` Participle Clauses
- **Tells**: Sentences ending in `, highlighting...`, `, underscoring...`, `, reflecting...`, `, showcasing...`, `, ensuring...`, `, paving the way for...`
- **Why it's slop**: AI models tack on artificial participle phrases to simulate analytical depth.
- **Before**: *The new benchmark achieved 94% accuracy, showcasing the revolutionary power of multi-agent architectures and underscoring their enduring significance.*
- **After**: *The benchmark achieved 94% accuracy on SWE-bench, up 12% from the single-model baseline.*

---

### Anti-Pattern 3: Promotional Puffery & Tourist-Brochure Adjectives
- **Tells**: `"groundbreaking"`, `"transformative"`, `"cutting-edge"`, `"vibrant"`, `"nestled"`, `"boasts a"`, `"seamlessly"`, `"paramount"`, `"breathtaking"`, `"plethora of"`
- **Why it's slop**: Excessive empty praise replaces concrete facts.
- **Before**: *The groundbreaking platform boasts a vibrant ecosystem of cutting-edge plugins, seamlessly empowering developers with a plethora of intuitive capabilities.*
- **After**: *The platform includes 45 community plugins for linting, testing, and cloud deployment.*

---

### Anti-Pattern 4: Vague Authorities & Weasel Attributions
- **Tells**: `"Industry experts argue"`, `"Observers have noted"`, `"Studies show"`, `"Many believe"` (with no named source or citation)
- **Why it's slop**: Fabricates consensus to avoid concrete attribution.
- **Before**: *Industry observers argue that agentic workflows will completely displace traditional software engineering practices.*
- **After**: *In a 2025 survey of 400 engineering leads by GitHub, 62% reported using agentic tools for multi-file refactoring.*

---

### Anti-Pattern 5: Formulaic "Challenges & Future Prospects" Outlines
- **Tells**: Mandatory cookie-cutter subheadings like `Challenges and Opportunities`, `Looking Ahead`, `Despite these challenges...`, `The Road Ahead`
- **Why it's slop**: Predictable school-essay structural formula.
- **Before**: *Despite these challenges, the future of autonomous agents remains bright. As technology continues to evolve, we can expect even greater synergies.*
- **After**: *The biggest near-term bottleneck is token cost and verification latency. Until test-suite execution runs in under two seconds, human-in-the-loop review will remain the default for production deploys.*

---

### Anti-Pattern 6: Negative Parallelisms
- **Tells**: `"It is not just about X; it is about Y"`, `"Not only did it do X, but it also revolutionized Y"`
- **Why it's slop**: Clichéd rhetorical device overused by AI chatbots.
- **Before**: *Agentic development is not just about writing code; it is about reimagining the entire creative paradigm of software craftsmanship.*
- **After**: *Agentic development shifts the engineer's role from writing line-by-line syntax to designing verification harnesses and review gates.*

---

### Anti-Pattern 7: Overuse of Em-Dashes & Rule of Three
- **Tells**: Every paragraph containing multiple em-dashes (`—`) or forced triplets (*"fast, reliable, and scalable"* / *"agility, efficiency, and precision"*).
- **Why it's slop**: Algorithmic symmetry that lacks human conversational asymmetry.
- **Fix**: Break thoughts into natural sentences with varied structures.

---

## 2. Banned AI-Slop Vocabulary List

Avoid these words and replace them with plain, direct English:

| Banned AI Word / Phrase | Natural Human Alternative |
| :--- | :--- |
| `utilize` | use |
| `whilst` | while |
| `endeavour` | try / work |
| `delve into` | explore / examine / look at |
| `tapestry` / `beacon` | context / example |
| `testament` | proof / result |
| `plethora` / `myriad` | many / several / dozens |
| `in light of` / `prior to` | because / before |
| `that being said` / `with that in mind` | (cut entirely or use "however" / "so") |
| `foster` / `cultivate` | build / encourage / develop |
| `paramount` | critical / essential |
| `harness the power of` | use / leverage |
| `game-changer` | major improvement / significant shift |
