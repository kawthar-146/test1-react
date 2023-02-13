function Form({ onValChange, formObject, onFormSubmit }) {
    return (
      <div className="row mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onChange={onValChange}
            value={formObject.name}
            name="name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onChange={onValChange}
            value={formObject.price}
            name="price"
          />
        </div>
        <div className="d-grid">
          <input
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-success"
          />
        </div>
      </div>
    );
  }
  export default Form;