import { useState } from 'react';

const FilterForm = () => {
  const [forms, setForms] = useState([]);

  const addForm = () => {
    setForms([...forms, {}]);
  };

  return (
    <div className="p-4">
      <div className="mb-4 p-4 border border-gray-300 rounded bg-gray-800 text-white">
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col">
            <label className="text-sm">Timeframe</label>
            <select className="form-select bg-gray-700 text-white">
              <option>1 Day</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Pattern</label>
            <select className="form-select bg-gray-700 text-white">
              <option>-----</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Tags</label>
            <input type="text" className="form-input bg-gray-700 text-white" placeholder="Tags" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Direction</label>
            <select className="form-select bg-gray-700 text-white">
              <option>-----</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">In Force</label>
            <select className="form-select bg-gray-700 text-white">
              <option>-----</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Hit Mag</label>
            <select className="form-select bg-gray-700 text-white">
              <option>No</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">CC</label>
            <select className="form-select bg-gray-700 text-white">
              <option>-----</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">FTFC</label>
            <select className="form-select bg-gray-700 text-white">
              <option>-----</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">PMG</label>
            <input type="number" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">P3</label>
            <select className="form-select bg-gray-700 text-white">
              <option>-----</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">ATR $</label>
            <input type="number" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">ATR %</label>
            <input type="number" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Min Price</label>
            <input type="number" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Max Price</label>
            <input type="number" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">RR Min</label>
            <input type="number" className="form-input bg-gray-700 text-white" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Market Cap</label>
            <select className="form-select bg-gray-700 text-white">
              <option>50B+</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Spread</label>
            <select className="form-select bg-gray-700 text-white">
              <option>-----</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Sector</label>
            <select className="form-select bg-gray-700 text-white">
              <option>-----</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Index</label>
            <select className="form-select bg-gray-700 text-white">
              <option>No</option>

            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Gappers</label>
            <select className="form-select bg-gray-700 text-white">
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
              <select className="form-select bg-gray-700 text-white">
                <option>1 Day</option>

              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Pattern</label>
              <select className="form-select bg-gray-700 text-white">
                <option>-----</option>

              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Tags</label>
              <input type="text" className="form-input bg-gray-700 text-white" placeholder="Tags" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">In Force</label>
              <select className="form-select bg-gray-700 text-white">
                <option>-----</option>

              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Current Candle</label>
              <select className="form-select bg-gray-700 text-white">
                <option>No</option>

              </select>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addForm}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        + Add Form
      </button>
    </div>
  );
};

export default FilterForm;
