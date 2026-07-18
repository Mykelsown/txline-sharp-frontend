import React, { useState } from "react";
import { TopBar } from "./components/TopBar";
import { FixturePanel } from "./components/FixturePanel";
import { SignalFeed } from "./components/SignalFeed";
import { ArenaPanel } from "./components/ArenaPanel";
import {
  mockSignals,
  mockArenaResults,
  mockAgentStatus,
  mockFixtures,
} from "./data/mock";

export default function App() {
  const [selectedFixtureId, setSelectedFixtureId] = useState<number | null>(null);

  return (
    <div style={styles.root}>
      <TopBar status={mockAgentStatus} />

      <div style={styles.body}>
        <FixturePanel
          fixtures={mockFixtures}
          status={mockAgentStatus}
          selectedId={selectedFixtureId}
          onSelect={(id) =>
            setSelectedFixtureId((prev) => (prev === id ? null : id))
          }
        />

        <SignalFeed
          signals={mockSignals}
          selectedFixtureId={selectedFixtureId}
        />

        <ArenaPanel results={mockArenaResults} />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: "var(--bg)",
  },
  body: {
    flex: 1,
    display: "flex",
    overflow: "hidden",
    minHeight: 0,
  },
};
