import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItems) => (
            <CoreConcept key={conceptItems.title} {...conceptItems} />
          ))}
        </ul>
    </Section>
  );
}
