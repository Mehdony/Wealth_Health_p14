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
    // setTimeout(() => {
    //   setSent(false);
    // }, 2000);
    // on vide le formulaire
    e.target.reset();
  };

  return (
    <div className={styles.formContainer} >
      <h2 className={styles.title}>Create Employee</h2>
      {/* fonction callback  */}
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.userInfos}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="firstName">First Name</label>
            <input required  className={styles.input} type="text" name="firstName" id="firstName" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="lastName">Last Name</label>
            <input  required  className={styles.input} type="text" name="lastName" id="lastName" />
          </div>

          <div className={styles.inputGroup}>
            {/* birth date */}
            <label className={styles.label} htmlFor="birthDate">Birth Date</label>
            <input  required  className={styles.input} type="date" name="birthDate" id="birthDate" />
          </div>

          <div className={styles.inputGroup}>
            {/* startDate */}
            <label className={styles.label} htmlFor="startDate">Start Date</label>
            <input  required  className={styles.input} type="date" name="startDate" id="startDate" />
          </div>
        </div>
        <div className={styles.userAddress}>
          <div className={styles.inputGroup}>
            {/* street */}
            <label className={styles.label} htmlFor="street">Street</label>
            <input  required  className={styles.input} type="text" name="street" id="street" />
          </div>

          <div className={styles.inputGroup}>
            {/* city */}
            <label className={styles.label} htmlFor="city">City</label>
            <input  required  className={styles.input} type="text" name="city" id="city" />
          </div>

          <div className={styles.inputGroup}>
            {/* state */}
            <label className={styles.label} htmlFor="state">State</label>
            {/* option select usa states */}
            <select  className={styles.input} name="state" id="state">
              {states.default.map((state) => {
                return (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={styles.inputGroup}>
            {/* zip code */}
            <label className={styles.label} htmlFor="zipCode">Zip Code</label>
            <input  required  className={styles.input} type="text" name="zipCode" id="zipCode" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="department">Department</label>
            <select  className={styles.input}  name="department" id="department">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>

          <button className={styles.button} type="submit">Save</button>
        </div>
      </form>

      {sent ? (
        <div className={styles.modalContainer}>
          {" "}
          <Modal message="Employee added with success" setSent={setSent}/>
        </div>
      ) : null}
    </div>
  );
};

export default Form;
