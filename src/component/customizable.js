import { FaArrowDown } from "react-icons/fa";

const Options = () => {
  const data = [
    "IDEAL FOR", "OCCASION", "WORK", "FABRIC", "SEGMENT", "SUITABLE",
    "RAW MATERIAL", "PATTERN"
  ];

  return (
    <div className="options">
      {data.map((item, index) => (
        <div key={index} className="option-item">
          <div className="option-row">
            <span className="option-text">{item}</span>
            <span className="arrow"><FaArrowDown /></span>
          </div>
          <span className="all-text">ALL</span>
        </div>
      ))}
    </div>
  );
};

export default Options;

  