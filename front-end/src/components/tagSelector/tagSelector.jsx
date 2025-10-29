import "./tagSelector.css";
import { useState } from "react";
import { icons } from "../TechIcons/icons";

function TagSelector() {
  const [selectedTags, setSelectedTags] = useState([]);
  function handleTagClick(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    }
  }
  return (
    <div className="modal__tags">
      {icons.map(({ title }) => (
        <button
          key={title}
          type="button"
          className={selectedTags.includes(title) ? "tag selected" : "tag"}
          onClick={() => handleTagClick(title)}
          disabled={!selectedTags.includes(title) && selectedTags.length >= 3}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
export default TagSelector;