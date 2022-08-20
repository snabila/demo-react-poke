const Pagination = ({ clickNext, clickPrev, next, prev }) => {
  const nextDisabled = () => {
    if (next == null) {
      return true;
    }
    return false;
  };

  const prevDisabled = () => {
    if (prev == null) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex justify-between text-slate-600">
      <button onClick={clickPrev} disabled={prevDisabled()}>
        &lt; Previous
      </button>
      <button onClick={clickNext} disabled={nextDisabled()}>
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
