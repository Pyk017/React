import { useState } from "react";
import Select from "./Select";
import { SelectOption } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[] | undefined>([]);
  const [value2, setValue2] = useState<SelectOption | undefined>(undefined);

  return (
    <div className="App">
      <Select
        multiple={true}
        options={options}
        onChange={(e) => setValue1(e)}
        value={value1}
      />
      <Select options={options} onChange={(e) => setValue2(e)} value={value2} />
    </div>
  );
}

export default App;
