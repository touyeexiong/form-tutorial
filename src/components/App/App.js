import './App.css';

function App() {
  return (
    <>
      <div className='wrapper'>
        <h1>How about them apples?</h1>
        <form>
          <fieldset>
            <label>
            <input name="name"/>
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;