import React from 'react';
import styles from '../../styles/Home.module.css';

export default function Testing({ user }) {
  const { login, name, avatar_url, bio } = user;
  return (
    <div className={styles.mycontainer}>
      <img src={avatar_url} alt="avatar" style={{ borderRadius: '50%' }} />
      <h2>{login}</h2>
      <h3>Name: {name}</h3>
      <h3>Bio: {bio}</h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id); // freonzx

  const user = await fetch(`https://api.github.com/users/${id}`).then((res) =>
    res.json()
  );

  return {
    props: {
      user,
    },
  };
}
