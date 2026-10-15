import { Component } from 'react';
import type { ReactNode } from 'react';
export class ContentBoundary extends Component<{ children: ReactNode; onHome: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div className="not-found" role="alert"><p className="eyebrow">A MOMENT BETWEEN PAGES</p><h1>The collection couldn’t open.</h1><p>Please try again when your connection is ready.</p><div className="recovery-actions"><button className="text-link" onClick={this.props.onHome}>Return to the library ↗</button><button className="text-link" onClick={()=>location.reload()}>Reload this page ↻</button></div></div>;
    return this.props.children;
  }
}
