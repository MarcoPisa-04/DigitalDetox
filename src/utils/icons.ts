import {
  Brain,
  ChartColumn,
  ClipboardCheck,
  Compass,
  FlaskConical,
  House,
  Leaf,
  Library,
  MessageCircle,
  Sparkles,
  Users,
  createElement,
} from 'lucide';
import type { NavId } from '../types/navigation';

type IconNode = Parameters<typeof createElement>[0];

export function createIcon(icon: IconNode, size = 18): SVGElement {
  const svg = createElement(icon, {
    width: size,
    height: size,
    'stroke-width': 1.6,
  });
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.classList.add('icon');
  return svg;
}

export function iconForNav(id: NavId): IconNode {
  switch (id) {
    case 'home':
      return House;
    case 'discover':
      return Compass;
    case 'understand':
      return Brain;
    case 'data-lab':
      return ChartColumn;
    case 'simulator':
      return FlaskConical;
    case 'experience':
      return Sparkles;
    case 'wellness':
      return Leaf;
    case 'reflection':
      return MessageCircle;
    case 'team':
      return Users;
    case 'survey':
      return ClipboardCheck;
    case 'project':
      return Library;
    default: {
      const exhaustive: never = id;
      return exhaustive;
    }
  }
}
