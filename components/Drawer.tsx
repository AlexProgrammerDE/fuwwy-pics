import { ReactNode } from "react";


/**
 * Drawer component that renders a collapsible drawer with content.
 * 
 * Props:
 * - children: ReactNode - The content to be rendered inside the drawer.
 * 
 * This component creates a drawer container with a toggle input and an overlay label. The main content
 * area is wrapped within a "drawer-content" div. The drawer can be toggled open or closed by clicking
 * the toggle input. The overlay label helps control the visibility of the drawer content when toggled.
 */


export default function Drawer({ children }: { children: ReactNode }) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      </div>
    </div>
  );
}
