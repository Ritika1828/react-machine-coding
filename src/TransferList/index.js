import { useState } from "react";
import TransferList from "./TransferList";

const initialValues = [
  [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
    { value: "gatsby", label: "Gatsby.js" },
    { value: "vue", label: "Vue" },
    { value: "jq", label: "jQuery" },
  ],
  [
    { value: "sv", label: "Svelte" },
    { value: "rw", label: "Redwood" },
    { value: "np", label: "NumPy" },
    { value: "dj", label: "Django" },
    { value: "fl", label: "Flask" },
  ],
];

function TransList() {
  const [data, setData] = useState(initialValues);
  console.log("daata,", data);
  return (
    <TransferList
      value={data}
      onChange={(arr) => {
        setData(arr);
      }}
      titles={["Frameworks", "Libraries"]}
    />
  );
}

export default TransList;
