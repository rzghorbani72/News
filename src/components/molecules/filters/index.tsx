import { ChangeEvent, useState } from "react";

function Filter({
  className,
  options,
  title,
}: {
  className: string;
  options: { value: string; label: string }[];
  title?: string;
}) {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h3>{title}</h3>
      <select
        title={title}
        className={className}
        onChange={onChange}
        value={value}
      >
        <option disabled selected>
          {" "}
          -- select an option --{" "}
        </option>
        {options.map(({ value, label }: { value: string; label: string }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
