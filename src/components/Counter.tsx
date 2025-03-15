import { useState } from 'react';
import { t } from 'i18next';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
        onClick={() => setCount(count - 1)}
      >
        {t('subtract')}
      </button>
      <span className="text-2xl font-semibold">{count}</span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        {t('add')}
      </button>
    </div>
  );
}
