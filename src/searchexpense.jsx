function SearchExpense({ searchQuery, setSearchQuery }) {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search Expenses"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchExpense;
