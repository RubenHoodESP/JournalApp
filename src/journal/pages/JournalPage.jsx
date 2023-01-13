import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nulla delectus expedita cupiditate saepe numquam explicabo ipsum labore, laboriosam fuga, provident sapiente sint sit distinctio corrupti voluptatibus maiores autem dicta.</Typography> */}
    
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
          <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>
    
    </JournalLayout>
  )
}
