# AI Contribution Statement

## 1. Tools used

I used ChatGPT/Codex by OpenAI while completing this assignment.

## 2. Prompts

I asked ChatGPT/Codex to review the assignment requirements and help implement the React components, class-based state management, props and callback logic, styling, and project documentation. I also used it to review the finished application with the available lint and build commands.

## 3. What it got wrong or issues found during review

The review identified that the starter project imported `ChildComponent` with an uppercase filename while the actual file was named `childComponent.jsx`. That capitalization/import mismatch can fail on case-sensitive systems, so the file and import were changed to consistently use `ChildComponent.jsx`. No incorrect generated solution remained after linting and building the final code.

## 4. Reflection

This work reinforced how a child component can identify itself when it calls a callback supplied through props, while the parent remains responsible for immutable state updates. I understand how the constructor initializes the pet array, how `.map()` updates only the selected pet, and how the new state flows back into each card through props. I can explain every line of the submitted component code.
