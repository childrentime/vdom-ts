// src/vdom.ts
// Define VNode type
export type VNodeType = string | Function;

// VNode interface
export interface VNode {
  type: VNodeType;
  props: Record<string, any> | null;
  children: (VNode | string)[];
}

// Function to create VNode
export function createElement(
  type: VNodeType,
  props: Record<string, any> | null,
  ...children: (VNode | string)[]
): VNode {
  return { type, props, children };
}