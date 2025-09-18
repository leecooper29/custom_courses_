type SearchBarProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function SearchBar({ label = 'Search', value, onChange, placeholder }: SearchBarProps): JSX.Element {
  return (
    <div className="search">
      <label className="lbl">{label}:</label>
      <input
        type="text"
        className="search-input"
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar;


