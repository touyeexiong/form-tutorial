import React, { useState, useReducer } from 'react';
import './App.css';

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      apple: '',
      count: 0,
      name: '',
      'gift-wrap': false,
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return (
    <>
      <div className='wrapper'>
        <h1>How about them apples?</h1>
        {submitting &&
          <div>
            You are submitting the following:
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
              ))}
            </ul>
          </div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset disabled={submitting}>
            <label>
              <p>Name</p>
              <input name="name" onChange={handleChange} value={formData.name || ''}/>
            </label>
          </fieldset>
          <fieldset disabled={submitting}>
            <label>
              <p>Name</p>
              <select name="apple" onChange={handleChange} value={formData.apple || ''}>
                <option value="">--Please choose an option--</option>
                <option value="fuji">Fuji</option>
                <option value="Jonathan">Jonathan</option>
                <option value="honey-crisp">Honey Crisp</option>
              </select>
            </label>
            <label>
              <p>Count</p>
              <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
            </label>
            <label>
              <p>Gift Wrap</p>
              <input 
              disabled={formData.apple !== 'fuji'}
              type="checkbox" 
              name="gift-wrap" 
              onChange={handleChange} 
              value={formData['gift-wrap'] || false}
              />
            </label>
          </fieldset>
          <button type="submit" disabled={submitting}>Submit</button>
        </form>
      </div>
    </>
  );
}
// git test
export default App;