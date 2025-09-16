'use client'

import s from './StarRating.module.css'

export default function StarRating({score=0}:{score?:number}) {
  const pct = Math.max(0, Math.min(100, (score / 10) * 100));
  return (
    <div className={s.wrap} aria-label={`평점 ${score} / 10`}>
      <div className={s.base}>★★★★★</div>
      <div className={s.fill} style={{ width: `${pct}%` }}>★★★★★</div>
    </div>
  );
}

