import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
function App() {
  const [handleButton, setHandleButton] = useState();
  let tabContent = <p>Please select the button</p>;
  if (handleButton) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[handleButton].title}</h3>
        <p>{EXAMPLES[handleButton].description}</p>
        <pre>
          <code>{EXAMPLES[handleButton].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton) {
    setHandleButton(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>
            <ul>
              {CORE_CONCEPTS.map((conceptItems) => (
                <CoreConcept key={conceptItems.title} {...conceptItems} />
              ))}
            </ul>
          </h2>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={handleButton === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={handleButton === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={handleButton === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={handleButton === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
