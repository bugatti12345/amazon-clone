import React from 'react'
import {
  Grid,
  TextField,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { theme } from '../../theme/theme'

const styles = {
  root: {
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: 'calc(100% - 120px)',
    '& > div': {
      width: '100%',
      '&:hover': {
        border: 'none'
      },
      '& > div': {
        borderRadius: 0,
      },
    },
  },
  dropdownBtn: {
    width: 52,
    '& button': {
      borderRadius: '4px 0 0 4px',
      height: '100%',
      padding: 0,
      minWidth: '52px',
      color: '#555',
      textTransform: 'none',
      fontWeight: 300,
    },
  },
  search: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '0 4px 4px 0',
    width: 45,
    '& button': {
      borderRadius: 0,
    },
  },
}

export const SearchBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Grid
      item
      container
      xs
      direction="row"
      align="center"
      justifyContent="center"
      sx={styles.root}
    >
      <Grid item sx={styles.dropdownBtn}>
        <Button
          variant="contained"
          color="grey"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          All
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>All Departments</MenuItem>
          <MenuItem>Arts & Crafts</MenuItem>
          <MenuItem>Books</MenuItem>
        </Menu>
      </Grid>
      <Grid item sx={styles.input}>
        <TextField variant="outlined" size="small" />
      </Grid>
      <Grid item sx={styles.search}>
        <IconButton color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
