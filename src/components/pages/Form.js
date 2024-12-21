const Form = () => {
  return (
    <div className="container" id="test">
      <div className="col-lg-8 col-sm-12 mx-auto">
        <form className="mt-5" action="./email.php" method="POST">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">First Name</label>
            <input name="name" type="text" className="form-control bg-light" id="name" aria-describedby="nameHelp" />
          </div>
          {/* Diğer input ve textarea elemanları için de benzer şekilde düzeltmeler yapın */}
          <button id="submit" type="submit" className="btn btn-primary" name="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Form;
