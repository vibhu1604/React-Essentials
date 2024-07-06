import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItems) => (
            <CoreConcept key={conceptItems.title} {...conceptItems} />
          ))}
        </ul>
      </h2>
    </section>
  );
}
