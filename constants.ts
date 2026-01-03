
import type { Level } from './types';

export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

export const LEVEL_STYLES: Record<Level, {
  bg: string;
  hoverBg: string;
  text: string;
  ring: string;
  border: string;
  hoverBorder: string;
  solidBg: string;
}> = {
  A1: { bg: 'bg-yellow-100', hoverBg: 'hover:bg-yellow-200', text: 'text-yellow-700', ring: 'focus:ring-yellow-500', border: 'border-yellow-500', hoverBorder: 'hover:border-yellow-500', solidBg: 'bg-yellow-500' },
  A2: { bg: 'bg-emerald-100', hoverBg: 'hover:bg-emerald-200', text: 'text-emerald-700', ring: 'focus:ring-emerald-500', border: 'border-emerald-500', hoverBorder: 'hover:border-emerald-500', solidBg: 'bg-emerald-500' },
  B1: { bg: 'bg-slate-800', hoverBg: 'hover:bg-slate-700', text: 'text-white', ring: 'focus:ring-slate-500', border: 'border-slate-600', hoverBorder: 'hover:border-slate-500', solidBg: 'bg-slate-800' },
  B2: { bg: 'bg-red-100', hoverBg: 'hover:bg-red-200', text: 'text-red-700', ring: 'focus:ring-red-500', border: 'border-red-500', hoverBorder: 'hover:border-red-500', solidBg: 'bg-red-500' },
};
