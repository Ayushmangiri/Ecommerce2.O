import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';

function Navbar() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div>
      <Box>
        <div className='flex justify-between items-center p-2 shadow-md lg:px-20 h-[70px] border-b'>
          <div className='flex items-center gap-9'>
            <div className='flex items-center gap-2 p-2'>
                {!isLarge &&
              <IconButton>
                <MenuIcon />
              </IconButton>
}
              <h1 className='logo cursor-pointer text-lg md:text-2xl text-[#00927c] font-bold'>
                Apna Bazzar
              </h1>
            </div>
            <ul>    
                {
               ["Men", "Women" , "Home & furniture","Electronics"].map((item)=>
                <li key={item} className='hidden lg:inline-block lg:mx-4 cursor-point ,mainCategory 
               hover:text-[#00927c] hover:border-b-2 border-[#00927c] pb-1'
                >
                  {item}
                </li>
               )
                }
            </ul>
          </div>

          <div className='flex gap-1 lg:gap-4 items-center'>
            <IconButton>
              <SearchIcon />
            </IconButton>

            {false ? (
              <Button>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src='https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_1280.png'
                />
                <h1 className='ml-2 font-semibold hidden lg:block'>Apna</h1>
              </Button>
            ) : (
              <Button
                variant='contained'
                color='success'
                startIcon={<AccountCircleIcon />}
              >
                Login
              </Button>
            )}

            <IconButton>
              <FavoriteBorder sx={{ color: '#00927c', fontSize: 30 }} />
            </IconButton>

            <IconButton>
              <AddShoppingCart sx={{ color: '#00927c', fontSize: 30 }} />
            </IconButton>

           
             {isLarge && (
            <Button
              variant="outlined"
              color="success"
              startIcon={<Storefront />}
              sx={{ textTransform: 'none', fontWeight: 'bold', ml: 1 }}
            >
              Sell on Apna Bazzar
            </Button>
          )}
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Navbar;
