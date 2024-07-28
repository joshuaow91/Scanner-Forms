import { useState } from 'react';

const FilterForm = () => {
  const [forms, setForms] = useState([]);
  const [formCount, setFormCount] = useState(0);

  const addForm = () => {
    setForms([...forms, {}]);
    setFormCount(formCount + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // placeholder logic
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.formCount = formCount;
    console.log(data); // this will show you in the browser console the json, new forms will have _0, _1, etc added to the key name.
    // add api call here with either the native fetch api or the axios library
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4 p-4 border border-gray-300 rounded bg-gray-800 text-white">
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col">
            <label className="text-sm">Timeframe</label>
            <select name="timeframe" className="form-select bg-gray-700 text-white">
              <option>1 Day</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Pattern</label>
            <select name="pattern" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Tags</label>
            <input type="text" name="tags" className="form-input bg-gray-700 text-white" placeholder="Tags" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Direction</label>
            <select name="direction" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">In Force</label>
            <select name="in_force" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Hit Mag</label>
            <select name="hit_mag" className="form-select bg-gray-700 text-white">
              <option>No</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">CC</label>
            <select name="cc" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">FTFC</label>
            <select name="ftfc" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">PMG</label>
            <input type="number" name="pmg" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">P3</label>
            <select name="p3" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">ATR $</label>
            <input type="number" name="atr_dollar" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">ATR %</label>
            <input type="number" name="atr_percent" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Min Price</label>
            <input type="number" name="min_price" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Max Price</label>
            <input type="number" name="max_price" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">RR Min</label>
            <input type="number" name="rr_min" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Market Cap</label>
            <select name="market_cap" className="form-select bg-gray-700 text-white">
              <option>50B+</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Spread</label>
            <select name="spread" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Sector</label>
            <select name="sector" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Index</label>
            <select name="index" className="form-select bg-gray-700 text-white">
              <option>No</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Gappers</label>
            <select name="gappers" className="form-select bg-gray-700 text-white">
              <option>-----</option>
            </select>
          </div>
        </div>
      </div>

      {forms.map((_, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded bg-gray-800 text-white">
          <div className="grid grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label className="text-sm">Timeframe</label>
              <select name={`timeframe_${index}`} className="form-select bg-gray-700 text-white">
                <option>1 Day</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Pattern</label>
              <select name={`pattern_${index}`} className="form-select bg-gray-700 text-white">
                <option>-----</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Tags</label>
              <input type="text" name={`tags_${index}`} className="form-input bg-gray-700 text-white" placeholder="Tags" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">In Force</label>
              <select name={`in_force_${index}`} className="form-select bg-gray-700 text-white">
                <option>-----</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Current Candle</label>
              <select name={`current_candle_${index}`} className="form-select bg-gray-700 text-white">
                <option>No</option>
              </select>
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={addForm} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        + Add Form
      </button>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-2">
        Submit
      </button>
    </form>
  );
};

export default FilterForm;
