import styles from "./ContactItem.module.css";

function ContactItem({ data, deleteHandler }) {
  return (
    <li className={styles.item}>
      <p>
        {data.name} {data.lastname}
      </p>
      <p>
        <span>📧</span> {data.email}
      </p>
      <p>
        <span>📞</span> {data.phone}{" "}
      </p>
      <button onClick={() => deleteHandler(data.id)}>🗑</button>
    </li>
  );
}

export default ContactItem;
