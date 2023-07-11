import { useContext, useState } from "react";
import styles from "./Form.module.css";
import { usersListContext } from "../../Context/userContext";
import * as states from "../../../states.json";
import Modal from "modalite_react";

const Form = () => {
  // on récupère la liste des employés et la fonction pour la modifier
  const { usersList, setUsersList } = useContext(usersListContext);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // on créé un objet à partir des données du formulaire
    const formData = new FormData(e.target);
    const newEmployee = Object.fromEntries(formData.entries());
    // on ajoute l'objet à la liste des employés
    setUsersList([...usersList, newEmployee]);
    console.log("envoyé");
    // on ouvre la modal
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 2000);
    // on vide le formulaire
    e.target.reset();
  };

  return (
    <div>
      <h2>Create Employee</h2>
      {/* fonction callback  */}
      <form onSubmit={(e) => handleSubmit(e)}>
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
              {states.default.map((state) => {
                return (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                );
              })}
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

          <button type="submit">Save</button>
        </div>
      </form>

      {sent ? (
        <div className={styles.modalContainer}>
          {" "}
          <Modal message="Employee added with success" timeDuration={2000} />
        </div>
      ) : null}
    </div>
  );
};

export default Form;
