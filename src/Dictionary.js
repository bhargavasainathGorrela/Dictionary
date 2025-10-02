import { useState } from 'react';
import './Dictionary.css';

function Dictionary() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const searchWord = word.trim();
    
    if (!searchWord) {
      setError('Please enter a word');
      setResult(null);
      return;
    }

    setLoading(true);
    setResult(null);
    setError('');

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      
      if (!response.ok) throw new Error('Word not found');

      const data = await response.json();
      setResult(data[0]);
      setError('');
    } catch (err) {
      setError('Word not found. Try another word.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="dictionary-container">
      <div className="dictionary-card">
        <h1 className="dictionary-title">Dictionary</h1>
        
        <div className="search-box">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a word..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>

        {loading && (
          <div className="loading">Loading...</div>
        )}

        {error && (
          <div className="error">{error}</div>
        )}

        {result && (
          <div className="result">
            <h2 className="word">{result.word}</h2>
            {result.phonetic && (
              <p className="phonetic">{result.phonetic}</p>
            )}

            {result.meanings.map((meaning, idx) => (
              <div key={idx} className="meaning">
                <h3 className="part-of-speech">
                  {meaning.partOfSpeech}
                </h3>
                
                {meaning.definitions.slice(0, 2).map((def, defIdx) => (
                  <div key={defIdx} className="definition-block">
                    <p className="definition">
                      {defIdx + 1}. {def.definition}
                    </p>
                    {def.example && (
                      <p className="example">
                        Example: "{def.example}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dictionary;