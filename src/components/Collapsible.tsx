'use client';
import { useState } from 'react';
import s from './Collapsible.module.css';
export function Collapsible({ text, maxChars = 300 }: { text: string; maxChars?: number }) {
const [open, setOpen] = useState(false);
const clean = text.replace(/<[^>]*>/g, '').trim();
const tooLong = clean.length > maxChars;
const shown = open || !tooLong ? clean : clean.slice(0, maxChars) + '…';
return (
<div>
<p className={s.body}>{shown}</p>
{tooLong && (
<button className={s.toggle} onClick={() => setOpen(v => !v)}>{open ? '접기' : '더보기'}</button>
)}
</div>
);
}