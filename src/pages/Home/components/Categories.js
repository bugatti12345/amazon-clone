import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../../../data/data.json'

const styles = {
  container: {
    padding: '10px 0',
    width: '100%',
  },
  cardContainer: {
    padding: '10px 10px',
  },
  card: {
    padding: '20px 20px 15px 20px',
    backgroundColor: '#fff',
  },
}

export default function Categories() {
  return (
    <Grid container sx={styles.container}>
      {categories.map((category) => {
        const { image, note, title } = category
        return (
          <Grid item xs={3} sx={styles.cardContainer}>
            <Grid item sx={styles.card}>
              <Typography variant="h6" fontWeight={700}>
                {title}
              </Typography>
              <Link to="/">
                <img src={image} className="img" />
              </Link>
              <Typography>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  {note}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
