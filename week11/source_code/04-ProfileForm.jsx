import { useState } from 'react';

export default function ProfileForm() {
  const [user, setUser] = useState({ name: '', email: '', bio: '' });

  // WRONG: user.name = 'Kim Minho'; setUser(user);  (same object)
  // CORRECT: spread creates a new object
  const handleChange = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form>
      <input value={user.name}  onChange={e => handleChange('name',  e.target.value)} />
      <input value={user.email} onChange={e => handleChange('email', e.target.value)} />
      <textarea value={user.bio} onChange={e => handleChange('bio', e.target.value)} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </form>
  );
}
