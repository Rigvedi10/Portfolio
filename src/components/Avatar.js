import { useState } from 'react';
import { profile } from '../data';

// Shows the user's photo from /profile.jpg. If that file isn't present yet,
// it gracefully falls back to the generated "SR" monogram (/avatar.svg).
export default function Avatar({ className = 'avatar-img' }) {
  const [src, setSrc] = useState('/profile.jpg');
  return (
    <img
      className={className}
      src={src}
      alt={profile.name}
      onError={() => setSrc('/avatar.svg')}
    />
  );
}
