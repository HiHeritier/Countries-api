const CountryInfo = ({ title, property, subproperty }) => {
  // formats a number according to the locale
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  // return a comma separated list
  const formatListItems = () => {
    return subproperty
      ? property.map((item) => item[subproperty]).join(", ")
      : property.map((item) => item).join(", ");
  };

  const value = () => {
    if (typeof property === "number") return formatNumber(property);
    if (Array.isArray(property)) return formatListItems();
    if (!property) return "none";
    return property;
  };

  return (
    <div>
      <span className="font-semibold">{title}: </span>
      {value()}
    </div>
  );
};

export default CountryInfo;
