import styles from "./Form.module.css";

const Form = () => {
  return (
    <div>
      <h2>Create Employee</h2>
      <form action="POST">
        <div className={styles.userInfos}>
          <div className={styles.imputGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" />
          </div>

          <div className={styles.imputGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" />
          </div>

          <div className={styles.imputGroup}>
            {/* birth date */}
            <label htmlFor="birthDate">Birth Date</label>
            <input type="date" name="birthDate" id="birthDate" />
          </div>

          <div className={styles.imputGroup}>
            {/* startDate */}
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name="startDate" id="startDate" />
          </div>
        </div>
        <div className={styles.userAddress}>
          <div className={styles.imputGroup}>
            {/* street */}
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="street" />
          </div>

          <div className={styles.imputGroup}>
            {/* city */}
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>

          <div className={styles.imputGroup}>
            {/* state */}
            <label htmlFor="state">State</label>
            {/* option select usa states */}
            <select name="state" id="state">
              <option value="state">State</option>
            </select>
          </div>

          <div className={styles.imputGroup}>
            {/* zip code */}
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" name="zipCode" id="zipCode" />
          </div>

          <div className={styles.imputGroup}>
            <label htmlFor="department">Department</label>
            <select name="department" id="department">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>
        </div>
      </form>

      <button>Save</button>
    </div>
  );
};

export default Form;
