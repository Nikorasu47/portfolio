import { icons } from "./icons";

function TechIcons() {
  return (
    <div className="technologies__icons">
      {icons.map(({ src, alt, title }) => (
        <img key={title} src={src} alt={alt} title={title} />
      ))}
    </div>
  );
}

export default TechIcons;
